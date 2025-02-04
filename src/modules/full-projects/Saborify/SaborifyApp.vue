<script setup>
import { ref } from 'vue'
import AnimatedContainer from '@/components/AnimatedContainer.vue'
import SpinnerUtility from '@/components/SpinnerUtility.vue'

import Food from './assets/images/food.webp'

const ingredient = ref('')
const recipes = ref([])
const loading = ref(false)
const apiKey = import.meta.env.VITE_TASTY_API_KEY // Asegúrate de tener tu clave de API de Tasty aquí

async function fetchRecipes(ingredients) {
  try {
    const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&q=${ingredients}`

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
        'X-RapidAPI-Key': apiKey
      }
    })

    const foundRecipes = await response.json()
    console.log(foundRecipes.results)

    return foundRecipes.results
  } catch (error) {
    console.error('Error al obtener las recetas:', error)
    return []
  }
}

async function handleSubmit() {
  loading.value = true
  recipes.value = await fetchRecipes(ingredient.value.trim())
  loading.value = false
}
</script>

<template>
  <AnimatedContainer class="home">
    <div class="w-[95%] mx-auto max-w-[var(--max-width)] text-[#21160f]">
      <header>
        <h1 class="text-[#fd9200] text-4xl font-bold py-4 uppercase text-center mb-4 md:text-left">
          Saborify - <span class="text-red-600">"En construcción"</span>
        </h1>
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
            class="w-full p-2 mt-2 bg-[#fd9200] text-white rounded-lg hover:bg-[#fd9400c0] cursor-pointer transition-colors"
            value="Buscar"
          />
        </form>
      </section>
      <SpinnerUtility class="mt-8 text-center" v-if="loading" />
      <section class="mt-4" v-if="recipes.length">
        <h2 class="mt-4 text-2xl font-bold text-center">Recetas encontradas</h2>
        <div class="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="recipe in recipes"
            :key="recipe.id"
            class="flex flex-col p-4 bg-white rounded-lg shadow-md"
          >
            <h3 class="text-xl font-bold">{{ recipe.name }}</h3>
            <img
              :src="recipe.thumbnail_url"
              :alt="recipe.name"
              class="object-cover w-full mt-2 min-h-[200px] max-h-[200px]"
            />
            <ul class="mt-2">
              <li
                v-for="ingredient in recipe.sections[0].components"
                :key="ingredient.raw_text"
                class="flex items-center gap-2"
              >
                <span>{{ ingredient.raw_text }}</span>
              </li>
            </ul>
            <a
              v-if="recipe.original_video_url"
              :href="recipe.original_video_url"
              target="_blank"
              class="block mt-2 text-[#fd9200] hover:text-[#fd9400] transition-colors"
            >
              Ver video
            </a>

            <h3 class="mt-5 font-bold">Instrucciones</h3>
            <div class="overflow-y-auto max-h-[200px] mt-4">
              <!-- Contenedor con scroll -->
              <ol class="pl-6 mt-4 list-decimal">
                <li v-for="instruction in recipe.instructions" :key="instruction.id" class="mt-2">
                  <span>{{ instruction.display_text }}</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section
        class="mt-8 text-center"
        v-if="!loading && recipes.length === 0 && ingredient.trim() !== ''"
      >
        <p class="text-gray-500">No se encontraron recetas. Intenta con otros ingredientes.</p>
      </section>
    </div>
  </AnimatedContainer>
</template>

<style scoped>
.home {
  background-image: linear-gradient(to top, #edf0ef, #e3ece8, #dae7df, #d3e2d5, #ceddca);
}
</style>
