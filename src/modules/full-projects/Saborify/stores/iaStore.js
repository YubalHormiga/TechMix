import { ref, inject } from 'vue'
import { defineStore } from 'pinia'
import IAService from '../services/IASerevice'

export const useIAStore = defineStore('ia', () => {
  const toast = inject('toast')
  const prompt = ref('')
  const iaResponse = ref('')
  const isLoading = ref(false)
  const generateRecipe = async () => {
    iaResponse.value = ''
    isLoading.value = true
    try {
      if (!/^[\p{L}\d\s(),-]+$/u.test(prompt.value.trim())) {
        toast.open({
          message: 'Ingresa ingredientes válidos (puedes usar tildes, números y símbolos básicos',
          type: 'info'
        })
        prompt.value = ''
        return
      }
      const textStream = await IAService.generateRecipe(prompt.value)
      for await (const text of textStream) {
        iaResponse.value += text
      }
    } catch (error) {
      toast.open({
        message: 'No se pudo generar la receta.',
        type: 'error'
      })
    } finally {
      isLoading.value = false
    }
  }

  return { prompt, iaResponse, generateRecipe, isLoading }
})
