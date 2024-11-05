<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BoardShop from './BoardShop/BoardShop.vue'

const utilitiesComponent = {
  1: BoardShop
}

const route = useRoute()
const projectId = computed(() => parseInt(route.params.id))

const CurrentFullProjectComponent = computed(() => utilitiesComponent[projectId.value] || null)
</script>

<template>
  <div>
    <!-- Pasar la descripción al componente dinámico -->
    <component :is="CurrentFullProjectComponent" />
  </div>
</template>

<style scoped></style>
