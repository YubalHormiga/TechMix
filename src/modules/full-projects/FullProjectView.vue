<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import { ref, computed } from 'vue'
import { fullProjects } from '../../data/full-projets/full-project'

const selectedDifficulty = ref('all')

const filteredProjects = computed(() => {
  if (selectedDifficulty.value === 'all') {
    return fullProjects
  }
  return fullProjects.filter((project) => project.difficulty === selectedDifficulty.value)
})

const imageBasePath = '/images/full-projects'
</script>

<template>
  <div class="p-8 mx-auto max-w-screen-2xl">
    <div class="text-gray-700">
      <h2 class="mb-4 font-semibold text-center">¿Cómo se clasifican los proyectos?</h2>
      <p class="mb-4 text-center">
        Los proyectos están organizados por nivel de dificultad según los conocimientos y
        herramientas de
        <strong>Vue.js</strong> que se aplican en cada uno:
      </p>
      <ul>
        <li>
          <span class="font-bold text-green-500">Fácil:</span> Uso básico de Vue (props, directivas
          como <code>v-for</code> y <code>v-if</code>, comunicación entre componentes mediante
          eventos). No requiere gestión de estado avanzada ni manejo de datos asíncrono.
        </li>
        <li>
          <span class="font-bold text-orange-500">Intermedio:</span> Manejo de datos asíncrono,
          gestión de estado con <strong>Pinia</strong>, uso de <strong>composables</strong> para
          reutilizar lógica y modularización de componentes.
        </li>
        <li>
          <span class="font-bold text-red-500">Avanzado:</span> Enrutamiento con
          <strong>Vue Router</strong>, autenticación de usuarios, integración de múltiples fuentes
          de datos, optimización del rendimiento y arquitecturas escalables.
        </li>
      </ul>
    </div>
    <div class="mb-4 text-center">
      <label for="difficulty-select" class="mr-2 font-bold">Filtrar por dificultad:</label>
      <div class="select-wrapper">
        <select id="difficulty-select" v-model="selectedDifficulty" class="select-box">
          <option value="all">Todos</option>
          <option value="easy" class="font-bold text-green-500">Fácil</option>
          <option value="intermidiate" class="font-bold text-orange-500">Intermedio</option>
          <option value="advanced" class="font-bold text-red-500">Avanzado</option>
        </select>
        <span class="font-bold"> {{ filteredProjects.length }} Proyectos encontrados </span>
      </div>
    </div>

    <div class="flex flex-wrap justify-center gap-8 mt-4">
      <div v-for="fullProject in filteredProjects" :key="fullProject.id" class="router-link">
        <ProjectCard :fullProject="fullProject" :imageBasePath="imageBasePath" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.select-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background-color: #f9f9f9;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.1);
}

.select-box {
  padding: 1rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition:
    color 0.3s,
    background-color 0.3s;
  outline: none;
}

.select-box:focus {
  outline: none;
  box-shadow: none;
}

.select-box:hover {
  background-color: #e0e0e0;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .projects-container {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
