<script setup>
import { useRecipeStore } from '../stores/recipesStore'

const recipeStore = useRecipeStore()

defineProps({
  recipes: {
    type: Array,
    required: true
  }
})

const maxValues = {
  calories: 2000,
  carbohydrates: 300,
  fat: 100,
  fiber: 25,
  protein: 100,
  sugar: 50
}

const getProgressWidth = (key, value) => {
  const maxValue = maxValues[key] || 100
  return `${(value / maxValue) * 100}%`
}

const getProgressColor = (key) => {
  const colors = {
    calories: 'bg-yellow-500',
    carbohydrates: 'bg-red-500',
    fat: 'bg-blue-500',
    fiber: 'bg-green-500',
    protein: 'bg-orange-500',
    sugar: 'bg-fuchsia-500'
  }
  return colors[key] || 'bg-gray-500'
}
</script>

<template>
  <div class="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
    <div
      class="flex flex-col overflow-hidden bg-white rounded-lg shadow"
      v-for="recipe in recipes"
      :key="recipe.id"
    >
      <img class="object-cover w-full h-56" :src="recipe.thumbnail_url" :alt="recipe.name" />

      <div class="flex-1 px-6 py-4">
        <div class="mb-2 text-xl font-bold">{{ recipe.name }}</div>

        <div class="mt-4 space-y-2">
          <div v-for="(value, key) in recipe.nutrition" :key="key" class="flex items-center">
            <span class="w-24 text-sm font-medium text-gray-600 capitalize">{{ key }} </span>
            <div class="flex-1 h-2 bg-gray-200 rounded-full">
              <div
                class="h-full rounded-full"
                :class="getProgressColor(key)"
                :style="{ width: getProgressWidth(key, value) }"
              ></div>
            </div>
            <span class="ml-2 text-sm text-gray-700">
              {{ value }} {{ key === 'calories' ? 'kcal' : 'g' }}
            </span>
          </div>
        </div>
      </div>

      <div class="flex justify-center px-6 py-4">
        <button
          type="button"
          class="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none"
          @click="recipeStore.fetchRecipeByID(recipe.id)"
        >
          Más Información
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
