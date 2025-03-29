<script setup>
import { inject } from 'vue'
import { useIAStore } from '../stores/iaStore'
import AnimatedContainer from '@/components/AnimatedContainer.vue'
import SpinnerUtility from '@/components/SpinnerUtility.vue'

const iaStore = useIAStore()
const toast = inject('toast')

const handleSubmit = () => {
  if (iaStore.prompt.trim() === '') {
    toast.open({
      message: 'Por favor, introduce un ingredientes válidos (solo letras y espacios).',
      type: 'info'
    })
    return
  }
  iaStore.generateRecipe()
}
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
            :to="{ name: 'favorites' }"
            class="font-semibold text-[#2b4d12] hover:text-[#fd9200] transition-all hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-[#fd9200]"
          >
            Favoritos
          </RouterLink>
        </nav>
      </header>
      <h2 class="mb-4 text-5xl font-bold text-center text-[#64453d]">Generar Receta con IA</h2>

      <div class="max-w-4xl mx-auto">
        <form @submit.prevent="handleSubmit" class="flex flex-col py-10 space-y-3">
          <div class="relative">
            <input
              v-model="iaStore.prompt"
              name="prompt"
              id="prompt"
              class="w-full p-4 bg-white border rounded-lg border-slate-800"
              placeholder="Genera una receta con ingredientes. Ej. Pollo con cebolla"
            />
            <button
              type="submit"
              aria-label="Enviar"
              class="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 right-5"
              :class="{ 'cursor-not-allowed': iaStore.isLoading }"
              :disabled="iaStore.isLoading"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <SpinnerUtility v-if="iaStore.isLoading" />
      <div
        v-else
        class="w-[95%] mx-auto max-w-[var(--max-width)]py-10 whitespace-pre-wrap text-[#64453d]"
      >
        {{ iaStore.iaResponse }}
      </div>
    </div>
  </AnimatedContainer>
</template>
<style scoped>
.background {
  background-image: linear-gradient(to top, #edf0ef, #e3ece8, #dae7df, #d3e2d5, #ceddca);
}
</style>
