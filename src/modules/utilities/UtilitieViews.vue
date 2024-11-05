<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import { technicalTests } from '@/data/utilities/Utilities.js'

// Define la ruta base de las imágenes
const imageBasePath = '/images/utilities'
</script>

<template>
  <div class="flex gap-3 flex-wrap justify-center mt-3">
    <div v-for="fullProject in technicalTests" :key="fullProject.id" class="router-link">
      <ProjectCard :fullProject="fullProject" :imageBasePath="imageBasePath" />
    </div>
  </div>
</template>
