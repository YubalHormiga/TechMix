<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const navItems = [
  { text: 'Inicio', to: '/' },
  { text: 'Proyectos Completos', to: { name: 'full-projects' } },
  { text: 'Utilidades', to: { name: 'utilities' } },
  { text: 'Pruebas Técnicas', to: { name: 'technical-tests' } },
  { text: 'Ejercicios de Lógica', to: { name: 'logic-exercises' } }
]

const showContent = ref(false)
const route = useRoute()

const isActive = (item) => {
  return item.to.name === route.name || (route.path === '/' && item.text === 'Inicio')
}
</script>

<template>
  <nav class="flex items-center justify-between flex-wrap p-2 bg-[#f8f8fa]">
    <h1 class="animate-charcter">TechMix</h1>

    <!-- Botón hamburguesa solo se muestra en pantallas pequeñas -->
    <div class="block lg:hidden">
      <button
        :class="['hamburger', 'hamburger--spring', { 'is-active': showContent }]"
        @click="showContent = !showContent"
        type="button"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>

    <!-- Contenedor de enlaces -->
    <div :class="['w-full lg:flex lg:justify-evenly lg:items-center', { hidden: !showContent }]">
      <RouterLink
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.to"
        :class="{ 'active-link': isActive(item) }"
        class="flex mt-4 lg:inline-block font-semibold lg:mt-0 text-[#44107a] hover:text-[#ff1361] mr-4"
      >
        {{ item.text }}
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Poppins:wght@400;700&display=swap');

nav a {
  transition: color 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.active-link {
  font-weight: bold;
  color: #ff1361;
}

.animate-charcter {
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  background-image: linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%);
  background-size: 200% auto;
  color: #fff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 5s linear infinite;
  display: inline-block;
  font-size: 5.5rem;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
</style>
