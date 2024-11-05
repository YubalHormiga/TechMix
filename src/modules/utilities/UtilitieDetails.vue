<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import RandomPassword from './GenerateRandomPassword/RandomPassword.vue'

const utilitiesComponent = {
  1: RandomPassword
}

const route = useRoute()
const projectId = computed(() => parseInt(route.params.id))

const CurrentUtilitiesComponent = computed(() => utilitiesComponent[projectId.value] || null)
</script>

<template>
  <div>
    <!-- Pasar la descripción al componente dinámico -->
    <component :is="CurrentUtilitiesComponent" :utilitieDescription="utilitieDescription" />
  </div>
</template>

<style scoped></style>
