<script setup>
import { useRoute } from 'vue-router'
import { useAuthStore } from '../../stores/authStore'

const route = useRoute()
const { isAuthenticated } = useAuthStore()

const isActive = (name) => route.name === name
</script>

<template>
  <header
    v-if="!isAuthenticated"
    class="flex flex-wrap items-center justify-around md:justify-between px-6 py-4 bg-white border-b border-[#e4e4e4]"
  >
    <!-- Logo -->
    <RouterLink
      to="/projects/NautiFleet"
      class="flex items-center gap-3 text-[#121416] font-bold text-xl"
    >
      <svg
        viewBox="0 0 48 48"
        class="w-6 h-6"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
        />
      </svg>
      <span>NautiFleet</span>
    </RouterLink>

    <!-- Navegación principal -->
    <nav class="flex flex-wrap items-center gap-4 md:gap-6">
      <RouterLink
        :to="{ name: 'transfers' }"
        :class="[
          'px-3 py-1 rounded text-base font-medium transition',
          isActive('traslados-nautifleet') ? 'bg-[#dce7f3] font-bold' : 'bg-[#f1f2f4]'
        ]"
      >
        Traslados
      </RouterLink>

      <RouterLink
        :to="{ name: 'moorings' }"
        :class="[
          'px-3 py-1 rounded text-base font-medium transition',
          isActive('amarres-nautifleet') ? 'bg-[#dce7f3] font-bold' : 'bg-[#f1f2f4]'
        ]"
      >
        Amarres
      </RouterLink>

      <RouterLink
        :to="{ name: 'boats' }"
        :class="[
          'px-3 py-1 rounded text-base font-medium transition',
          isActive('about-nautifleet') ? 'bg-[#dce7f3] font-bold' : 'bg-[#f1f2f4]'
        ]"
      >
        Embarcaciones
      </RouterLink>
    </nav>

    <!-- Botones Auth -->
    <div class="flex items-center gap-2">
      <RouterLink
        :to="{ name: 'login-nautifleet' }"
        :class="[
          'h-10 px-4 rounded text-base font-medium flex items-center justify-center transition',
          isActive('login-nautifleet') ? 'bg-[#dce7f3] font-bold' : 'bg-[#f1f2f4]'
        ]"
      >
        Iniciar Sesión
      </RouterLink>

      <RouterLink
        :to="{ name: 'register-nautifleet' }"
        :class="[
          'h-10 px-4 rounded text-base font-medium flex items-center justify-center transition',
          isActive('register-nautifleet') ? 'bg-[#dce7f3] font-bold' : 'bg-[#f1f2f4]'
        ]"
      >
        Registrarse
      </RouterLink>
    </div>
  </header>
</template>
