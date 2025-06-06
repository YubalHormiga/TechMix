import { ref, inject, computed } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import { useFirebaseAuth, useFirestore, useDocument } from 'vuefire'
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  updateProfile
} from 'firebase/auth'
import { doc, setDoc, updateDoc } from 'firebase/firestore'
import { useErrorHandling } from '@/composables/useErrorHandling'

export const useAuthStore = defineStore('auth', () => {
  const auth = useFirebaseAuth()
  const db = useFirestore()
  const router = useRouter()
  const toast = inject('toast')
  const { errorMessage, handleErrorMessage } = useErrorHandling()

  const userData = ref(null)
  const isLoggedIn = ref(false)

  const register = async (email, password, displayName) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(user, { displayName })
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        displayName,
        isAdmin: false,
        isSeller: false
      })
      handleAuthSuccess(user)
      handleToastSuccess('¡Registro exitoso!')
    } catch (error) {
      handleErrorMessage(error)
      handleToastError()
    }
  }

  const login = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      handleAuthSuccess(user)
      handleToastSuccess('¡Inicio de sesión exitoso!')
    } catch (error) {
      handleErrorMessage(error)
      handleToastError()
    }
  }

  const logoutUser = async () => {
    try {
      await signOut(auth)
      router.push('/projects/NautiFleet')
      isLoggedIn.value = false
      userData.value = null
      handleToastSuccess('Se ha cerrado sesión correctamente.')
    } catch (error) {
      handleErrorMessage(error)
      handleToastError()
    }
  }

  const handleAuthSuccess = async (user) => {
    userData.value = {
      email: user.email,
      uid: user.uid,
      displayName: user.displayName || ''
    }
    isLoggedIn.value = true
    router.push({ name: 'dash-board' })
  }

  const handleToastError = (customMessage = null) => {
    toast.open({
      message: customMessage || errorMessage.value,
      type: 'error'
    })
  }

  const handleToastSuccess = (message) => {
    toast.open({ message, type: 'success' })
  }

  const isAuthenticated = computed(() => isLoggedIn.value && !!userData.value)
  const userDocRef = computed(() =>
    userData.value?.uid ? doc(db, 'users', userData.value.uid) : null
  )
  const { data: userDoc } = useDocument(userDocRef)
  const isAdmin = computed(() => userDoc.value?.isAdmin === true)
  const isSeller = computed(() => userDoc.value?.isSeller === true)
  const displayName = computed(() => userDoc.value?.displayName || '')

  const updateUserProfile = async (newDisplayName, newPassword) => {
    try {
      const currentUser = auth.currentUser
      if (!currentUser) {
        handleToastError('Usuario no autenticado.')
        return
      }

      const trimmedName = newDisplayName?.trim()
      const trimmedPassword = newPassword?.trim()

      if (!trimmedName && !trimmedPassword) {
        handleToastError('Debes ingresar al menos un dato para actualizar.')
        return
      }

      if (trimmedName) {
        await updateProfile(currentUser, { displayName: trimmedName })
        if (userDoc.value) {
          await updateDoc(userDocRef.value, { displayName: trimmedName })
        }
      }

      if (trimmedPassword) {
        await updatePassword(currentUser, trimmedPassword)
      }

      handleToastSuccess('Perfil actualizado correctamente.')
    } catch (error) {
      handleErrorMessage(error)
      handleToastError()
    }
  }

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email)
      handleToastSuccess('Te enviamos un correo para restablecer tu contraseña.')
    } catch (error) {
      handleErrorMessage(error)
      handleToastError()
    }
  }
  return {
    userData,
    register,
    login,
    logoutUser,
    isLoggedIn,
    isAuthenticated,
    isAdmin,
    isSeller,
    displayName,
    updateUserProfile,
    resetPassword
  }
})
