<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useRecipeStore } from './stores/recipesStore'
import { useModalStore } from './stores/modalStore'

import AnimatedContainer from '@/components/AnimatedContainer.vue'
import SpinnerUtility from '@/components/SpinnerUtility.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'
import ModalRecipe from './components/ModalRecipe.vue'
import RecipeCard from './components/RecipeCard.vue'

import Food from './assets/images/food.webp'

const recipeStore = useRecipeStore()
const modalStore = useModalStore()

const { modal } = storeToRefs(modalStore)
const { ingredient, loadingRecipes, recipes, currentPage, itemsPerPage } = storeToRefs(recipeStore)

const handleSubmit = () => {
  return recipeStore.fetchRecipes(ingredient.value)
}

const updatePage = (page) => (currentPage.value = page)
const buttonBgColor = 'bg-[#fd9200]'
</script>

<template>
  <AnimatedContainer class="py-8 background">
    <div class="w-[95%] mx-auto max-w-[var(--max-width)] text-[#21160f]">
      <header
        class="flex flex-col items-center justify-center py-4 mb-4 gap-7 md:flex-row md:justify-between md:items-center"
      >
        <h1 class="text-[#7fa961] text-6xl font-bold uppercase text-center md:text-left">
          Saborify
        </h1>
        <nav>
          <RouterLink
            :to="{ name: 'favorites' }"
            class="font-semibold text-[#2b4d12] hover:text-[#fd9200] duration-300 transition-all hover:underline hover:underline-offset-4 decoration-2 hover:decoration-[#fd9200]"
          >
            Favoritos
          </RouterLink>
        </nav>
      </header>
      <main class="mb-4 md:flex md:flex-row md:justify-between">
        <div class="home-text">
          <p class="mb-4 text-5xl font-bold">
            Tu próxima receta <span class="block">comienza aquí</span>
          </p>
          <p>
            En Saborify, queremos que disfrutes de la magia de cocinar. Explora miles de recetas,
            busca platos por ingredientes que ya tienes en casa, y descubre nuevas ideas que se
            adapten a tus gustos y necesidades.
          </p>
        </div>
        <div class="">
          <img :src="Food" alt="plato de comida" height="" />
        </div>
      </main>
      <section class="flex justify-center w-full">
        <form @submit.prevent="handleSubmit" class="flex flex-col w-full max-w-2xl p-4">
          <label class="block w-full mb-2 text-center" for="">Busca receta por ingrediente</label>
          <input
            v-model="ingredient"
            class="w-full p-2 text-center border border-gray-300 rounded-lg"
            type="text"
            placeholder="Introduce el ingrediente en inglés, ej: chicken"
          />
          <input
            type="submit"
            class="w-full p-2 mt-2 bg-[#fd9400c0] text-white rounded-lg hover:bg-[#fd9200] cursor-pointer transition-colors"
            value="Buscar"
          />
        </form>
      </section>
      <SpinnerUtility class="mt-8 text-center" v-if="loadingRecipes" />
      <section class="mt-4" v-if="recipes.length">
        <h2 class="mt-4 text-2xl font-bold text-center">Recetas encontradas</h2>
        <RecipeCard :recipes="recipeStore.paginatedRecipes" />
      </section>
      <PaginationComponent
        v-if="recipeStore.filteredRecipes.length"
        :total-items="recipeStore.filteredRecipes.length"
        :items-per-page="itemsPerPage"
        :current-page="currentPage"
        @update:current-page="updatePage"
        :buttonBgColor="buttonBgColor"
      />
      <ModalRecipe v-if="modal" />
    </div>
  </AnimatedContainer>
</template>

<style scoped>
.background {
  background-image: linear-gradient(to top, #edf0ef, #e3ece8, #dae7df, #d3e2d5, #ceddca);
}
</style>
