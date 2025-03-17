<script setup>
import { utilities } from '../../data/utilities/utilitie'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import RandomPassword from './GenerateRandomPassword/RandomPassword.vue'

const route = useRoute()
const projectName = computed(() => route.params.name)

const utilitiesComponent = {
  RandomPassword
}

const CurrentUtilitiesComponent = computed(() => {
  const project = utilities.find(
    (utilities) => utilities.name.toLowerCase() === projectName.value.toLowerCase()
  )
  return project ? utilitiesComponent[project.name] : null
})
</script>

<template>
  <div>
    <component :is="CurrentUtilitiesComponent" v-if="CurrentUtilitiesComponent" />
  </div>
</template>

<style scoped></style>
