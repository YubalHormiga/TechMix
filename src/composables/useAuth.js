import { useFirebaseAuth } from 'vuefire'
import { onAuthStateChanged } from 'firebase/auth'

export function authenticateUser() {
  const auth = useFirebaseAuth()

  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      if (user) {
        resolve(user)
      } else {
        reject()
      }
    })
  })
}
