import { ref, inject, computed } from 'vue'
import { defineStore } from 'pinia'
import recipeService from '../services/APIServices'
import { useModalStore } from './modalStore'

export const useRecipeStore = defineStore('recipeStore', () => {
  const toast = inject('toast')
  const modalStore = useModalStore()
  const ingredient = ref('')

  const recipes = ref([])
  const recipe = ref({})

  const loadingRecipes = ref(false)
  const loadingRecipeByID = ref(false)

  const currentPage = ref(1)
  const itemsPerPage = ref(10)

  const fetchRecipes = async () => {
    const trimmedIngredient = ingredient.value.trim()
    if (!trimmedIngredient || !/^[a-zA-Z\s]+$/.test(trimmedIngredient)) {
      toast.open({
        message: 'Por favor, introduce un ingrediente válido (solo letras y espacios).',
        type: 'info'
      })
      ingredient.value = ''
      return
    }
    loadingRecipes.value = true
    try {
      const response = await recipeService.getRecipes(ingredient.value)
      recipes.value = response.data.results || []
      if (recipes.value.length === 0) {
        toast.open({
          message: 'No se han encontrado recetas con ese ingrediente',
          type: 'info'
        })
      }
    } catch (error) {
      toast.open({
        message: 'Hubo un error al obtener las recetas. Por favor, intenta de nuevo.',
        type: 'error'
      })
    } finally {
      loadingRecipes.value = false
    }
    ingredient.value = ''
  }

  const fetchRecipeByID = async (id) => {
    modalStore.toogleModal()
    recipe.value = {}
    loadingRecipeByID.value = true
    try {
      const response = await recipeService.getRecipeByID(id)
      recipe.value = response.data
    } catch (error) {
      console.error('Error al obtener detalles de la receta:', error)
    }
    loadingRecipeByID.value = false
  }

  const filteredRecipes = computed(() => {
    return recipes.value
      .filter((recipe) => Object.keys(recipe.nutrition).length > 0)
      .map((recipe) => ({
        ...recipe,
        nutrition: Object.fromEntries(
          Object.entries(recipe.nutrition).filter(([key]) => key !== 'updated_at')
        )
      }))
  })

  const paginatedRecipes = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value
    const end = start + itemsPerPage.value
    return filteredRecipes.value.slice(start, end)
  })

  return {
    ingredient,
    recipes,
    recipe,
    filteredRecipes,
    loadingRecipes,
    loadingRecipeByID,
    fetchRecipes,
    fetchRecipeByID,
    itemsPerPage,
    currentPage,
    paginatedRecipes
  }
})
