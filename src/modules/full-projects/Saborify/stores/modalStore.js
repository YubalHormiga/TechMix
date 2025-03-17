import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const modal = ref(false)

  const toogleModal = () => {
    modal.value = !modal.value
  }
  return {
    modal,
    toogleModal
  }
})
