import { ref, inject, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'

import { useModalStore } from './modalStore'
import { watch } from 'vue'

export const useFavoriteStore = defineStore('favoriteRecipes', () => {
  const toast = inject('toast')
  const modalStore = useModalStore()

  const favoriteRecipes = ref([])

  onMounted(() => {
    const recipesStorage = localStorage.getItem('recipes')
    if (recipesStorage) {
      favoriteRecipes.value = JSON.parse(recipesStorage)
    }
  })

  const saveFavoriteRecipesToLocalStorage = () => {
    try {
      localStorage.setItem('recipes', JSON.stringify(favoriteRecipes.value))
    } catch (error) {
      console.error('Error al guardar en localStorage:', error)
      toast.open({
        message: 'Hubo un error al guardar las recetas favoritas. Por favor, intenta de nuevo.',
        type: 'error'
      })
    }
  }

  watch(
    favoriteRecipes,
    () => {
      saveFavoriteRecipesToLocalStorage()
    },
    { deep: true }
  )

  const existFavorite = (recipe) => {
    return favoriteRecipes.value.some((fav) => fav.id === recipe.id)
  }

  const handleClickfavorite = (recipe) => {
    try {
      if (existFavorite(recipe)) {
        favoriteRecipes.value = favoriteRecipes.value.filter((fav) => fav.id !== recipe.id)
        toast.open({
          message: 'Receta eliminada correctamente',
          type: 'warning'
        })
      } else {
        favoriteRecipes.value.push(recipe)
        toast.open({
          message: 'Receta guardada correctamente',
          type: 'success'
        })
      }
      modalStore.modal = false
    } catch (error) {
      console.error('Error al manejar la receta favorita:', error)
      toast.open({
        message: 'Hubo un error al manejar la receta favorita. Por favor, intenta de nuevo.',
        type: 'error'
      })
    }
    modalStore.modal = false
  }

  const hasFavoriteRecipes = computed(() => favoriteRecipes.value.length > 0)

  return { handleClickfavorite, favoriteRecipes, existFavorite, hasFavoriteRecipes }
})
