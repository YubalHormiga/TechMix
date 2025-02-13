<script setup>
import { markRaw } from 'vue'
import { useDragAndDrop } from '@formkit/drag-and-drop/vue'
import InventoryDashboard from './components/InventoryDashboard.vue'
import ProductForm from './components/ProductForm.vue'
import ProductListView from './components/ProductListView.vue'
import ProductDetails from './components/ProductDetails.vue'
import AnimatedContainer from '@/components/AnimatedContainer.vue'
import { useProductManagement } from './composables/useProductManagement.js'

const {
  products,
  selectedProductState,
  productState,
  submitProduct,
  selectedProduct,
  editProduct,
  deleteProduct
} = useProductManagement()

const [parent, components] = useDragAndDrop([
  {
    name: 'section_1',
    component: markRaw(ProductForm),
    props: { productState: productState },
    emit: { submitProduct }
  },
  {
    name: 'section_2',
    component: markRaw(ProductListView),
    props: { products },
    emit: { selectedProduct, editProduct, deleteProduct }
  },
  {
    name: 'section_3',
    component: markRaw(InventoryDashboard),
    props: { products }
  },
  {
    name: 'section_4',
    component: markRaw(ProductDetails),
    props: { selectedProductState }
  }
])
</script>

<template>
  <AnimatedContainer>
    <main>
      <header>
        <div class="mt-3">
          <img class="w-full max-h-[40rem]" src="./assets/images/header.webp" alt="header image" />
        </div>
      </header>

      <main class="container p-4">
        <div ref="parent" class="custom-grid-container">
          <div
            v-for="component in components"
            :key="component.name"
            :class="`${component.name}`"
            class="rounded-lg border border-[#d8dfdf] shadow-lg cursor-move"
          >
            <component
              :is="component.component"
              v-bind="component.props"
              v-on="component.emit || {}"
            />
          </div>
        </div>
      </main>
    </main>
  </AnimatedContainer>
</template>

<style scoped>
.custom-grid-container {
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 2rem;
  gap: 1rem;
}

@media (min-width: 640px) {
  .custom-grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1280px) {
  .custom-grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

.section_1 {
  grid-column: span 1 / span 1;
  grid-row: span 4;
  height: 82rem;
  overflow-y: auto;
}
.section_2 {
  grid-column: span 1;
  grid-row: span 4;
  max-height: 82rem;
  overflow-y: auto;
}
.section_3 {
  max-width: 100%;
  overflow: hidden;
  height: 40.5rem;
}
.section_4 {
  max-width: 100%;
  overflow: hidden;
  height: 40.5rem;
}
</style>
