<script setup>
import { markRaw, ref, reactive } from 'vue'
import { db } from './data/products'
import { useDragAndDrop } from '@formkit/drag-and-drop/vue'
import InventoryDashboard from './components/InventoryDashboard.vue'
import ProductForm from './components/ProductForm.vue'
import ProductListView from './components/ProductListView.vue'
import ProductDetails from './components/ProductDetails.vue'
import AnimatedContainer from '@/components/AnimatedContainer.vue'

const products = ref([])
const selectedProductState = reactive({})
const productState = reactive({})

const submitProduct = (product) => {
  const existProduct = products.value.findIndex((item) => item.name === product.name)
  const selectedCategory = db.find((cat) => cat.name === product.category)
  const selectedItem = selectedCategory?.items.find((item) => item.name === product.name)

  if (existProduct >= 0) {
    const existingProduct = products.value[existProduct]

    const newLot = {
      ...product,
      description: selectedItem ? selectedItem.description : 'Descripción no encontrada',
      image: selectedItem ? selectedItem.image : 'Imagen no encontrada',
      lotId: crypto.randomUUID(),
      createdAt: new Date().toISOString()
    }

    existingProduct.lots.push(newLot) // Agregar el nuevo lote al producto

    const totalQuantity = existingProduct.lots.reduce((sum, lot) => sum + lot.quantity, 0)
    const totalCost = existingProduct.lots.reduce(
      (sum, lot) => sum + lot.purchasePrice * lot.quantity,
      0
    )
    existingProduct.purchasePrice = parseFloat((totalCost / totalQuantity).toFixed(2))

    existingProduct.salePrice = parseFloat(
      (existingProduct.purchasePrice * (1 + product.profitMargin / 100)).toFixed(2)
    )
  } else {
    const newProduct = {
      ...product,
      description: selectedItem ? selectedItem.description : 'Descripción no encontrada',
      image: selectedItem ? selectedItem.image : 'Imagen no encontrada',
      id: crypto.randomUUID(),
      lots: [
        {
          ...product,
          lotId: crypto.randomUUID(),
          createdAt: new Date().toISOString()
        }
      ]
    }
    products.value.push(newProduct)
  }
}

const selectedProduct = (id) => {
  const product = products.value.find((item) => item.id === id) || {}
  Object.assign(selectedProductState, product)
}

const editProduct = (id) => {
  const productToEdit = products.value.find((item) => item.id === id)
  if (productToEdit) {
    // Obtener el último lote de este producto
    const lastLot = productToEdit.lots[productToEdit.lots.length - 1] || {}
    Object.assign(productState, lastLot) // Cargar los datos del último lote en el formulario
  }
}

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
    props: { products: products.value },
    emit: { selectedProduct, editProduct }
  },
  {
    name: 'section_3',
    component: markRaw(InventoryDashboard),
    props: { products: products.value }
  },
  {
    name: 'section_4',
    component: markRaw(ProductDetails),
    props: { selectedProductState: selectedProductState }
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

      <main class="p-4 container">
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
  grid-template-columns: 1fr; /* Base: 1 columna */
  gap: 1rem;
}

@media (min-width: 640px) {
  .custom-grid-container {
    grid-template-columns: repeat(2, 1fr); /* 2 columnas para móviles grandes y tablets pequeñas */
  }
}

@media (min-width: 1280px) {
  .custom-grid-container {
    grid-template-columns: repeat(3, 1fr); /* 4 columnas para pantallas grandes (opcional) */
  }
}

.section_1 {
  grid-column: span 1 / span 1;
  grid-row: span 4;
  max-height: 90rem;
  overflow-y: auto;
}
.section_2 {
  grid-column: span 1;
  grid-row: span 4;
  max-height: 90rem;
  overflow-y: auto;
}
.section_3 {
  max-width: 100%;
  overflow: hidden;
  height: 44.5rem;
}
.section_4 {
  max-width: 100%;
  overflow: hidden;
  height: 44.5rem;
}
</style>
