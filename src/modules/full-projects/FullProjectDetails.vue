<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BoardShop from './BoardShop/BoardShop.vue'
import InventoryManager from './InventoryManager/InventoryManager.vue'
import Saborify from './Saborify/SaborifyApp.vue'

const utilitiesComponent = {
  1: BoardShop,
  2: InventoryManager,
  3: Saborify
}

const route = useRoute()
const projectId = computed(() => parseInt(route.params.id))

const CurrentFullProjectComponent = computed(() => utilitiesComponent[projectId.value] || null)
</script>

<template>
  <div>
    <component :is="CurrentFullProjectComponent" />
  </div>
</template>

<style scoped></style>
