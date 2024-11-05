<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import { fullProjects } from '../../data/full-projets/full-project'

const imageBasePath = '/images/full-projects'
</script>

<template>
  <div class="flex gap-3 flex-wrap justify-center mt-3">
    <div v-for="fullProject in fullProjects" :key="fullProject.id" class="router-link">
      <ProjectCard :fullProject="fullProject" :imageBasePath="imageBasePath" />
    </div>
  </div>
</template>
