<script setup>
import TransfersHero from '../../assets/images/landing/transfersHero.webp'
</script>

<template>
  <section
    class="flex min-h-[480px] lg:min-h-[680px] flex-col items-center justify-center gap-10 p-4 text-center bg-cover bg-center bg-no-repeat"
    :style="{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('${TransfersHero}')`
    }"
  >
    <div class="max-w-3xl">
      <h1 class="text-4xl font-black text-white md:text-5xl">
        Traslados de Embarcaciones Profesionales
      </h1>
      <h2 class="mt-4 text-sm text-white md:text-lg">
        Mueve tu embarcación a su próximo destino con nuestra red confiable de capitanes y empresas
        de transporte profesionales.
      </h2>
    </div>

    <div class="flex justify-center">
      <button
        class="h-10 md:h-12 px-4 md:px-5 rounded-full bg-[#dce7f3] text-[#121416] text-sm md:text-base font-bold"
      >
        Solicitar Presupuesto
      </button>
    </div>
  </section>
</template>
