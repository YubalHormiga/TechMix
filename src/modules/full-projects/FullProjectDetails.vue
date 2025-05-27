<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { fullProjects } from '@/data/full-projets/full-project'

import BoardShop from './BoardShop/BoardShop.vue'
import InventoryManager from './InventoryManager/InventoryManager.vue'
import Saborify from './Saborify/SaborifyApp.vue'
import CineScope from './CineScope/CineScope.vue'
import NautiFleet from './NautiFleet/NautiFleet.vue'

const route = useRoute()
const projectName = computed(() => route.params.name)

const projectComponents = {
  BoardShop,
  InventoryManager,
  Saborify,
  CineScope,
  NautiFleet
}

const currentProjectComponent = computed(() => {
  const project = fullProjects.find(
    (project) => project.name.toLowerCase() === projectName.value.toLowerCase()
  )
  return project ? (projectComponents[project.name] ?? null) : null
})
const currentProject = computed(() => {
  return fullProjects.find(
    (project) => project.name.toLowerCase() === projectName.value.toLowerCase()
  )
})
const isSubRoute = computed(() => {
  return route.matched.length > 1
})
</script>
<template>
  <div>
    <component :is="currentProjectComponent" v-if="currentProjectComponent && !isSubRoute" />
    <div v-if="currentProjectComponent && currentProject?.routes">
      <RouterLink
        v-for="route in currentProject.routes"
        :key="route.name"
        :to="`/projects/${projectName}/${route.path}`"
      >
      </RouterLink>

      <RouterView />
    </div>
  </div>
</template>
