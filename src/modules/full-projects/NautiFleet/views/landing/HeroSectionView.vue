<script setup>
import BoatHeader from '../../assets/images/landing/boatHeader.webp'
</script>

<template>
  <div class="">
    <div
      class="flex min-h-[480px] lg:min-h-[680px] flex-col gap-10 bg-cover bg-center bg-no-repeat md:gap-20 items-center justify-center p-4"
      :style="{
        backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%),
            url('${BoatHeader}')
          `
      }"
    >
      <div class="flex flex-col gap-10 text-center">
        <h1 class="text-4xl font-black text-white md:text-5xl md:font-black">
          Traslados de Embarcaciones y Amarres Sin Complicaciones
        </h1>
        <h2 class="text-sm text-white md:text-lg">
          Conéctate con transportistas confiables y encuentra el amarre perfecto para tu
          embarcación. Ya seas propietario, vendedor o transportista, NautiFleet ofrece una
          experiencia simplificada.
        </h2>
      </div>
      <div class="flex flex-wrap justify-center gap-3">
        <button
          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 md:h-12 md:px-5 bg-[#dce7f3] text-[#121416] text-sm font-bold md:text-base md:font-bold"
        >
          <span class="truncate">Buscar Traslado</span>
        </button>
        <button
          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 md:h-12 md:px-5 bg-[#f1f2f4] text-[#121416] text-sm font-bold md:text-base md:font-bold"
        >
          <span class="truncate">Buscar Amarre</span>
        </button>
      </div>
    </div>
  </div>
</template>
