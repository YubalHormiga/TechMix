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
  <div class="container">
    <div class="select-container">
      <label for="difficulty-select" class="select-label">Filtrar por dificultad:</label>
      <div class="select-wrapper">
        <select id="difficulty-select" v-model="selectedDifficulty" class="select-box">
          <option value="all">Todos</option>
          <option value="easy">Fácil</option>
          <option value="intermidiate">Intermedio</option>
          <option value="advanced">Avanzado</option>
        </select>
        <span class="project-count"> {{ filteredProjects.length }} Proyectos encontrados </span>
      </div>
    </div>

    <div class="projects-container">
      <div v-for="fullProject in filteredProjects" :key="fullProject.id" class="router-link">
        <ProjectCard :fullProject="fullProject" :imageBasePath="imageBasePath" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.select-container {
  text-align: center;
  margin-bottom: 2rem;
}

.select-label {
  font-weight: bold;
  font-size: 1.8rem;
  margin-right: 1rem;
  color: #333;
}

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
  font-size: 1.4rem;
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

.project-count {
  font-size: 1.4rem;
  font-weight: bold;
  color: #555;
}

.projects-container {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .projects-container {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
