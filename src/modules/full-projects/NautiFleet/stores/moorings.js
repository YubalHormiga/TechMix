import { addDoc, collection } from 'firebase/firestore'
import { defineStore } from 'pinia'
import { useCollection, useFirestore } from 'vuefire'

export const useMooringsStore = defineStore('moorings', () => {
  const db = useFirestore()
  const moorinsCollection = useCollection(collection(db, 'moorings'))
  async function createMooring(mooring) {
    await addDoc(collection(db, 'moorings'), mooring)
  }
  return {
    createMooring,
    moorinsCollection
  }
})
