<script setup>
import MooringsHero from '../../assets/images/landing/mooringsHero.webp'
</script>

<template>
  <section
    class="flex min-h-[480px] lg:min-h-[680px] flex-col items-center justify-center gap-10 p-4 text-center bg-cover bg-center bg-no-repeat"
    :style="{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('${MooringsHero}')`
    }"
  >
    <div class="max-w-3xl">
      <h1 class="text-4xl font-black text-white md:text-5xl">Encuentra tu Amarre Perfecto</h1>
      <h2 class="mt-4 text-sm text-white md:text-lg">
        Descubre una amplia selección de amarres en ubicaciones increíbles. Ya sea que necesites una
        estancia corta o una solución a largo plazo, tenemos el lugar ideal para tu embarcación.
      </h2>
    </div>

    <div class="flex justify-center">
      <router-link
        :to="{ name: 'moorings-map' }"
        class="h-10 md:h-12 px-4 md:px-5 rounded-full bg-[#dce7f3] hover:bg-[#c8d8eb] transition-colors duration-200 text-[#121416] text-sm md:text-base font-bold flex items-center justify-center"
      >
        Explora Amarres
      </router-link>
    </div>
  </section>
</template>
