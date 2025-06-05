<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (name) => route.name === name
</script>

<template>
  <header
    class="flex flex-wrap items-center justify-between px-10 py-3 lg:flex-nowrap whitespace-nowrap"
  >
    <RouterLink
      to="/projects/NautiFleet"
      class="flex items-center gap-4 text-[#121416] cursor-pointer"
    >
      <div class="size-4">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <h1 class="text-[#121416] text-xl font-bold">NautiFleet</h1>
    </RouterLink>

    <div class="flex justify-between flex-1 gap-4 md:justify-end md:gap-10">
      <div class="flex items-center gap-4">
        <RouterLink
          :to="{ name: 'transfers' }"
          :class="[
            'text-lg font-medium',
            isActive('traslados-nautifleet') ? 'bg-[#dce7f3] font-bold' : 'bg-[#f1f2f4] '
          ]"
        >
          Traslados
        </RouterLink>
        <RouterLink
          :to="{ name: 'moorings' }"
          :class="[
            'text-lg font-medium',
            isActive('amarres-nautifleet') ? 'bg-[#dce7f3] font-bold' : 'bg-[#f1f2f4] '
          ]"
        >
          Amarres
        </RouterLink>
        <RouterLink
          :to="{ name: 'boats' }"
          :class="[
            'text-lg font-medium',
            isActive('about-nautifleet') ? 'bg-[#dce7f3] font-bold' : 'bg-[#f1f2f4] '
          ]"
        >
          Embarcaciones
        </RouterLink>
      </div>

      <div class="flex items-center gap-2">
        <RouterLink
          :to="{ name: 'login-nautifleet' }"
          :class="[
            'flex items-center justify-center rounded-sm h-10 px-2 text-lg   ',
            isActive('login-nautifleet') ? 'bg-[#dce7f3] font-bold' : 'bg-[#f1f2f4] '
          ]"
        >
          Iniciar Sesión
        </RouterLink>

        <RouterLink
          :to="{ name: 'register-nautifleet' }"
          :class="[
            'flex items-center justify-center rounded-sm h-10 px-2 text-lg',
            isActive('register-nautifleet') ? 'bg-[#dce7f3] font-bold' : 'bg-[#f1f2f4] '
          ]"
        >
          Registrarse
        </RouterLink>
      </div>
    </div>
  </header>
</template>
