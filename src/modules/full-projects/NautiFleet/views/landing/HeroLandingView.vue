<script setup>
import LandingHeader from '../../assets/images/landing/landingHeader.webp'
</script>

<template>
  <section
    class="flex min-h-[480px] lg:min-h-[680px] flex-col items-center justify-center gap-10 p-4 text-center bg-cover bg-center bg-no-repeat"
    :style="{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('${LandingHeader}')`
    }"
  >
    <div class="max-w-3xl">
      <h1 class="text-4xl font-black text-white md:text-5xl">
        Traslados de Embarcaciones y Amarres Sin Complicaciones
      </h1>
      <h2 class="mt-4 text-sm text-white md:text-lg">
        Conéctate con transportistas confiables y encuentra el amarre perfecto para tu embarcación.
        Ya seas propietario o transportista, NautiFleet simplifica la experiencia.
      </h2>
    </div>

    <div class="flex flex-wrap justify-center gap-3">
      <button
        class="h-10 md:h-12 px-4 md:px-5 rounded-full bg-[#dce7f3] text-[#121416] text-sm md:text-base font-bold"
      >
        Buscar Traslado
      </button>
      <button
        class="h-10 md:h-12 px-4 md:px-5 rounded-full bg-[#f1f2f4] text-[#121416] text-sm md:text-base font-bold"
      >
        Buscar Amarre
      </button>
    </div>
  </section>
</template>
