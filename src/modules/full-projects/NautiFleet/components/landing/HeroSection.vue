<script setup>
import SailBoat from '../../assets/images/sailboatHero.webp'
</script>

<template>
  <header class="relative h-[70vh] w-full overflow-hidden">
    <img
      :src="SailBoat"
      alt="NautiFleet Hero"
      class="absolute inset-0 z-0 object-cover object-center w-full h-full"
    />
    <div class="absolute inset-0 z-10 bg-black/20"></div>
    <div
      class="relative z-20 flex flex-col items-start justify-center h-full max-w-4xl px-8 text-[#f5f1eb]"
    >
      <h1 class="mb-4 font-bold md:text-6xl drop-shadow text-[#FAECD5]">
        NautiFleet: Compra o traslada tu embarcación desde un solo lugar
      </h1>
      <p class="max-w-xl mb-6 text-lg md:text-xl text-[#e8d9c5] drop-shadow">
        Explora embarcaciones de segunda mano o solicita un traslado marítimo personalizado. Rápido,
        fácil y seguro.
      </p>
      <div class="flex flex-col gap-4 sm:flex-row">
        <button
          class="px-6 py-3 font-semibold text-white transition bg-[#30595B] hover:bg-[#63878B] rounded-xl"
        >
          Ver catálogo
        </button>
        <button
          class="px-6 py-3 font-semibold text-white transition bg-[#E7874E] hover:bg-[#ff9456] rounded-xl"
        >
          Solicitar traslado
        </button>
      </div>
    </div>
  </header>
</template>
<style scoped></style>
