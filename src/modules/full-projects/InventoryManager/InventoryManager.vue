<script setup>
import { markRaw, ref, reactive } from 'vue'
import { useDragAndDrop } from '@formkit/drag-and-drop/vue'
import InventoryDashboard from './components/InventoryDashboard.vue'
import ProductForm from './components/ProductForm.vue'
import ProductListView from './components/ProductListView.vue'
import ProductDetails from './components/ProductDetails.vue'
import { db } from './data/products'

const products = ref([])
const productState = reactive({})
const submitProduct = (product) => {
  const exist = products.value.findIndex((item) => item.id === product.id)
  const selectedCategory = db.find((cat) => cat.name === product.category)
  const selectedItem = selectedCategory?.items.find((item) => item.name === product.name)
  if (exist >= 0) {
    products.value[exist].quantity++
  } else {
    products.value.push({
      ...product,
      description: selectedItem ? selectedItem.description : 'Descripción no encontrada',
      image: selectedItem ? selectedItem.image : 'Iamgen no encontrada',
      id: crypto.randomUUID()
    })
  }
}

const selectedProduct = (id) => {
  const product = products.value.find((item) => item.id === id) || {}
  Object.assign(productState, product)
}
console.log('Producto seleccionado:', productState)
const [parent, components] = useDragAndDrop([
  {
    name: 'section_1',
    component: markRaw(ProductForm),
    props: {},
    emit: { submitProduct }
  },
  {
    name: 'section_2',
    component: markRaw(ProductListView),
    props: { products: products.value },
    emit: { selectedProduct }
  },
  {
    name: 'section_3',
    component: markRaw(InventoryDashboard),
    props: { products: products.value }
  },
  {
    name: 'section_4',
    component: markRaw(ProductDetails),
    props: { product: productState }
  }
])
</script>

<template>
  <header>
    <div class="mt-3">
      <img class="w-full max-h-[40rem]" src="./assets/images/header.webp" alt="header image" />
    </div>
  </header>

  <main class="p-4">
    <div ref="parent" class="custom-grid-container">
      <div
        v-for="component in components"
        :key="component.name"
        :class="` ${component.name}`"
        class="rounded-lg border border-[#d8dfdf] shadow-lg cursor-move"
      >
        <component :is="component.component" v-bind="component.props" v-on="component.emit || {}" />
      </div>
    </div>
  </main>
</template>

<style scoped>
@media (min-width: 720px) {
  .custom-grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: dense;
    gap: 1rem;
  }
}

.section_1 {
  grid-column: span 1 / span 1;
  grid-row: span 4;
  max-height: 75rem;
  overflow-y: auto;
}
.section_2 {
  grid-column: span 1;
  grid-row: span 4;
  max-height: 75rem;
  overflow-y: auto;
}
.section_3 {
  grid-column: span 1;
  grid-row: span 2;
  height: 37rem;
}
.section_4 {
  grid-column: span 1;
  grid-row: span 2;
  height: 37rem;
}
</style>
