<script setup lang="ts">
import { markRaw } from 'vue'
import { useDragAndDrop } from '@formkit/drag-and-drop/vue'
import InventoryDashboard from './components/InventoryDashboard.vue'
import LowStockAlert from './components/LowStockAlert.vue'
import ProductForm from './components/ProductForm.vue'
import ProductList from './components/ProductListView.vue'
import ProductDetails from './components/ProductDetails.vue'

// Configuración de Drag-and-Drop sin posiciones fijas para flexibilidad
const [parent, components] = useDragAndDrop([
  { name: 'section_1', component: markRaw(ProductForm) },
  { name: 'section_2', component: markRaw(InventoryDashboard) },
  { name: 'section_3', component: markRaw(LowStockAlert) },
  { name: 'section_4', component: markRaw(ProductList) },
  { name: 'section_5', component: markRaw(ProductDetails) }
])
</script>

<template>
  <header>
    <div class="mt-3">
      <img class="w-full max-h-[40rem]" src="./assets/images/header.webp" alt="header image" />
    </div>
  </header>

  <main>
    <!-- Contenedor de la cuadrícula con auto-flow -->
    <div ref="parent" class="custom-grid-container">
      <div
        v-for="component in components"
        :key="component.name"
        :class="`draggable-item ${component.name}`"
      >
        <component :is="component.component" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.custom-grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;
  gap: 1rem;
}

.draggable-item {
  padding: 1rem;
  margin: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: white;
  cursor: move;
}

/* Ajustes de tamaño específicos para cada componente */
.section_1 {
  grid-column: span 1 / span 1;
  grid-row: span 4;
}
.section_2 {
  grid-column: span 1;
  grid-row: span 2;
}
.section_3 {
  grid-column: span 1;
  grid-row: span 2;
}
.section_4 {
  grid-column: span 1;
  grid-row: span 2;
}
.section_5 {
  grid-column: span 1;
  grid-row: span 2;
}
</style>
