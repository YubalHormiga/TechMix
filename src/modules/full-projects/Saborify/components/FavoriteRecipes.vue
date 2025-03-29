<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useFavoriteStore } from '../stores/favoriteRecipesStore'
import { useModalStore } from '../stores/modalStore'

import AnimatedContainer from '@/components/AnimatedContainer.vue'
import RecipeCard from './RecipeCard.vue'
import ModalRecipe from './ModalRecipe.vue'

const favoriteStore = useFavoriteStore()
const modalStore = useModalStore()

const { modal } = storeToRefs(modalStore)
const { favoriteRecipes } = storeToRefs(favoriteStore)
</script>

<template>
  <AnimatedContainer class="py-8 background">
    <div class="w-[95%] mx-auto max-w-[var(--max-width)]">
      <header
        class="flex flex-col items-center justify-center py-6 mb-6 gap-7 md:flex-row md:justify-between md:items-center"
      >
        <h1 class="text-[#7fa961] text-6xl font-bold uppercase text-center md:text-left">
          <RouterLink to="/projects/Saborify"> Saborify </RouterLink>
        </h1>
        <nav class="flex justify-around w-full md:w-auto md:gap-10">
          <RouterLink
            to="/projects/Saborify"
            class="font-semibold text-[#2b4d12] hover:text-[#fd9200] transition-all hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-[#fd9200]"
          >
            Inicio
          </RouterLink>
          <RouterLink
            :to="{ name: 'recipeia' }"
            class="font-semibold text-[#2b4d12] hover:text-[#fd9200] transition-all hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-[#fd9200]"
          >
            RecetaIA
          </RouterLink>
        </nav>
      </header>

      <section class="mt-8" v-if="favoriteStore.hasFavoriteRecipes">
        <h2 class="text-3xl font-bold text-center text-[#21160f] mb-6">Tus recetas favoritas</h2>
        <RecipeCard :recipes="favoriteRecipes" />
      </section>
      <section v-else class="flex flex-col items-center justify-center mt-8">
        <p class="text-[#64453d]">Aún no has añadido ninguna receta a favoritos</p>
      </section>

      <ModalRecipe v-if="modal" />
    </div>
  </AnimatedContainer>
</template>

<style scoped>
.background {
  background-image: linear-gradient(to top, #edf0ef, #e3ece8, #dae7df, #d3e2d5, #ceddca);
}
</style>
