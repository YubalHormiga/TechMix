<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const navItems = [
  { text: 'Inicio', to: '/' },
  //{ text: 'Ruta de Aprendizaje', to: { name: 'learning-path' } },
  { text: 'Proyectos Completos', to: { name: 'full-projects' } },
  //{ text: 'Utilidades', to: { name: 'utilities' } },
  { text: 'Ejercicios de Lógica', to: { name: 'logic-exercises' } },
  { text: 'Pruebas Técnicas', to: { name: 'technical-tests' } },
  { text: 'Helpers', to: { name: 'helpers' } }
]

const showContent = ref(false)
const route = useRoute()

const isActive = (item) => {
  return item.to.name === route.name || (route.path === '/' && item.text === 'Inicio')
}

const toggleMenu = () => {
  showContent.value = !showContent.value

  if (showContent.value) {
    setTimeout(() => {
      showContent.value = false
    }, 4000)
  }
}
</script>

<template>
  <nav class="flex items-center justify-between lg:flex-col flex-wrap p-2 bg-[#fff] mb-10">
    <RouterLink :to="{ name: 'home' }">
      <h1 class="animate-charcter">TechMix</h1>
    </RouterLink>

    <div class="block lg:hidden">
      <button
        :class="['hamburger', 'hamburger--spring', { 'is-active': showContent }]"
        @click="toggleMenu"
        type="button"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>

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
