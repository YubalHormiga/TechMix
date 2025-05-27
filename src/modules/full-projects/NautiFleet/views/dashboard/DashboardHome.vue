<script setup>
import { useAuthStore } from '../../stores/authStore'

const authStore = useAuthStore()
const { logoutUser } = authStore
</script>

<template>
  <header class="flex items-center justify-between p-4 mb-6 bg-[#47535a]">
    <h1 class="font-bold text-white">NautiFleet</h1>

    <div class="flex items-center gap-4">
      <span class="text-gray-600 dark:text-gray-300">Hola, {{ authStore.displayName }} 👋</span>
      <button @click="logoutUser" class="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">
        Cerrar sesión
      </button>
    </div>
  </header>
</template>
<style scoped></style>
