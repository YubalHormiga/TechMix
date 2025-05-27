import { ref, inject, computed } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import { useFirebaseAuth, useFirestore, useDocument } from 'vuefire'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
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
      router.push({ name: 'login' })
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

  const handleToastError = () => {
    toast.open({ message: errorMessage.value, type: 'error' })
  }

  const handleToastSuccess = (message) => {
    toast.open({ message, type: 'success' })
  }

  const userDocRef = computed(() =>
    userData.value?.uid ? doc(db, 'users', userData.value.uid) : null
  )
  const { data: userDoc } = useDocument(userDocRef)
  const isAdmin = computed(() => userDoc.value?.isAdmin === true)
  const isSeller = computed(() => userDoc.value?.isSeller === true)
  const displayName = computed(() => userDoc.value?.displayName || '')

  return {
    userData,
    register,
    login,
    logoutUser,
    isLoggedIn,
    isAdmin,
    isSeller,
    displayName
  }
})
