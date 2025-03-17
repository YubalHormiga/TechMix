<script setup>
import { storeToRefs } from 'pinia'
import { useModalStore } from '../stores/modalStore'
import { useRecipeStore } from '../stores/recipesStore'
import { useFavoriteStore } from '../stores/favoriteRecipesStore'

import SpinnerUtility from '@/components/SpinnerUtility.vue'

const recipeStore = useRecipeStore()
const favoriteStore = useFavoriteStore()
const modalStore = useModalStore()

const { recipe, loadingRecipeByID } = storeToRefs(recipeStore)
</script>

<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 transition-opacity bg-gray-500/75" aria-hidden="true"></div>
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
        <div
          class="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="px-6 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
            <SpinnerUtility v-if="loadingRecipeByID" class="mx-auto" />

            <div v-else>
              <img
                class="object-cover w-full h-56 rounded-lg shadow-md"
                :src="recipe.thumbnail_url"
                :alt="recipe.name"
              />

              <div class="mt-4">
                <h2 class="text-xl font-semibold text-gray-900">{{ recipe.name }}</h2>
                <p class="mt-1 text-sm text-gray-700">{{ recipe.description }}</p>
              </div>

              <div class="mt-4">
                <h3 class="text-lg font-semibold text-gray-900">Ingredientes</h3>
                <ul class="mt-2 space-y-1">
                  <li
                    v-for="(ingredient, index) in recipe.sections?.[0]?.components"
                    :key="index"
                    class="flex items-center text-sm text-gray-700"
                  >
                    <span class="mr-2 text-green-500">✔</span>
                    {{ ingredient.raw_text }}
                  </li>
                </ul>
              </div>

              <div class="mt-4">
                <h3 class="text-lg font-semibold text-gray-900">Instrucciones</h3>
                <ol class="mt-2 space-y-2">
                  <li
                    v-for="(instruction, index) in recipe.instructions"
                    :key="instruction.id"
                    class="flex items-start text-sm text-gray-700"
                  >
                    <span class="mr-2 font-bold text-blue-500">{{ index + 1 }}.</span>
                    {{ instruction.display_text }}
                  </li>
                </ol>
              </div>

              <div v-if="recipe.original_video_url" class="mt-4">
                <h3 class="text-lg font-semibold text-gray-900">Video</h3>
                <a
                  :href="recipe.original_video_url"
                  target="_blank"
                  class="inline-flex items-center mt-1 text-blue-600 hover:underline"
                >
                  ▶ Ver Video
                </a>
              </div>
            </div>
          </div>

          <div
            v-if="!loadingRecipeByID"
            class="px-6 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6"
          >
            <button
              type="button"
              class="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
              @click="modalStore.toogleModal"
            >
              Cerrar
            </button>
            <button
              type="button"
              class="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
              @click="favoriteStore.handleClickfavorite(recipe)"
            >
              {{
                favoriteStore.existFavorite(recipe) ? 'Quitar de favoritos' : 'Agregar a favoritos'
              }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
