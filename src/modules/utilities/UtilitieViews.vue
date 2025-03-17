<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import { utilities } from '@/data/utilities/utilities'
const imageBasePath = '/images/utilities'
</script>

<template>
  <div class="flex flex-wrap justify-center gap-3 mt-3">
    <div v-for="fullProject in utilities" :key="fullProject.id" class="router-link">
      <ProjectCard :fullProject="fullProject" :imageBasePath="imageBasePath" />
    </div>
  </div>
</template>
