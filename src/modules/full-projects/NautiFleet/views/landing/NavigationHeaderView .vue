<script setup>
import { useRoute } from 'vue-router'
import { useAuthStore } from '../../stores/authStore'

const route = useRoute()
const { isAuthenticated } = useAuthStore()

const isActive = (name) =>
  route.name === name || (name === 'login-nautifleet' && route.path === '/projects/NautiFleet')
</script>

<template>
  <header
    v-if="!isAuthenticated"
    class="flex flex-wrap items-center justify-between px-6 py-4 bg-white border-b border-[#e4e4e4]"
  >
    <!-- Logo -->
    <RouterLink
      to="/projects/NautiFleet"
      class="flex items-center gap-3 text-[#121416] font-bold text-xl flex-shrink-0"
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
    <nav class="flex gap-4 md:gap-6">
      <RouterLink
        :to="{ name: 'transfers' }"
        :class="[
          'px-4 py-2 rounded-full text-sm md:text-base font-medium transition duration-200',
          isActive('transfers') ? 'bg-[#dce7f3] font-bold' : 'bg-[#f1f2f4] hover:bg-[#dce7f3]'
        ]"
      >
        Traslados
      </RouterLink>

      <RouterLink
        :to="{ name: 'moorings' }"
        :class="[
          'px-4 py-2 rounded-full text-sm md:text-base font-medium transition duration-200',
          isActive('amarres-nautifleet')
            ? 'bg-[#dce7f3] font-bold'
            : 'bg-[#f1f2f4] hover:bg-[#dce7f3]'
        ]"
      >
        Amarres
      </RouterLink>
    </nav>

    <!-- Botones Auth -->
    <div class="flex flex-wrap justify-center w-full gap-3 mt-4 md:w-auto md:mt-0 md:justify-end">
      <RouterLink
        :to="{ name: 'login-nautifleet' }"
        :class="[
          'h-10 md:h-12 px-4 md:px-5 rounded-full text-sm md:text-base flex items-center justify-center transition hover:bg-[#dce7f3]',
          isActive('login-nautifleet')
            ? 'bg-[#dce7f3] text-[#121416] font-bold'
            : 'bg-[#f1f2f4] text-[#121416] '
        ]"
      >
        Iniciar Sesión
      </RouterLink>

      <RouterLink
        :to="{ name: 'register-nautifleet' }"
        :class="[
          'h-10 md:h-12 px-4 md:px-5 rounded-full  text-sm md:text-base flex items-center justify-center transition hover:bg-[#dce7f3]',
          isActive('register-nautifleet')
            ? 'bg-[#dce7f3] text-[#121416] font-bold'
            : 'bg-[#f1f2f4] text-[#121416] '
        ]"
      >
        Registrarse
      </RouterLink>
    </div>
  </header>
</template>
