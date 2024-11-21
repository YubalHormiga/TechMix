<script setup>
import { ref, computed, onMounted, inject, watch } from 'vue'
import { db } from '../data/products.js'

onMounted(() => {
  categories
})

const toast = inject('toast')

const categories = ref(db)
const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})
defineEmits(['selectedProduct', 'editProduct'])
const categorySelected = ref('')
const productSelected = ref('')

const categoryItems = computed(() => {
  const category = categories.value.find((cat) => cat.name === categorySelected.value)
  return category ? category.items.map((item) => item.name) : []
})

const productsToDisplay = computed(() => {
  let filteredProducts = props.products

  if (categorySelected.value) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === categorySelected.value
    )
  }

  if (productSelected.value) {
    filteredProducts = filteredProducts.filter((product) => product.name === productSelected.value)
  }

  return filteredProducts
})

const handleCategoryChange = () => {
  productSelected.value = ''
}

watch(productsToDisplay, (newValue) => {
  if (newValue.length === 0) {
    toast.open({
      message: 'No se encontraron productos.',
      type: 'info'
    })
  }
})
</script>

<template>
  <div class="p-2">
    <div class="flex flex-col">
      <label class="font-bold" for="category">Categoría del Producto</label>
      <select v-model="categorySelected" @change="handleCategoryChange" class="p-2" id="category">
        <option value="" disabled>Selecciona una categoría</option>
        <option v-for="cat in categories" :key="cat.name" :value="cat.name">
          {{ cat.name }}
        </option>
      </select>
    </div>

    <div class="flex flex-col">
      <label class="font-bold" for="name">Producto</label>
      <select v-model="productSelected" class="p-2" id="name">
        <option value="" disabled>Selecciona un producto</option>
        <option v-for="item in categoryItems" :key="item" :value="item">{{ item }}</option>
      </select>
    </div>

    <div v-if="productsToDisplay.length > 0">
      <div v-for="product in productsToDisplay" :key="product.id">
        <div
          class="flex items-center justify-between gap-4 p-4 mb-4 rounded-lg border border-[#d8dfdf] shadow-lg"
        >
          <div class="flex flex-col justify-between">
            <!-- <div class="flex items-center gap-3"> -->
            <button class="flex justify-center my-2" @click="$emit('selectedProduct', product.id)">
              <img src="../assets//icons/info-svgrepo-com.svg" alt="inf" class="h-8" />
            </button>
            <p class="font-bold">{{ product.name }}</p>
            <!-- </div> -->
            <p><span class="font-semibold">Cantidad:</span>{{ product.quantity }}</p>
          </div>

          <div class="flex flex-col justify-between text-center">
            <p><span class="font-semibold">PreComp:</span>{{ product.purchasePrice }}</p>
            <p><span class="font-semibold">PreVenta:</span>{{ product.salePrice }}</p>
            <p><span class="font-semibold">MinStock:</span>{{ product.minStock }}</p>
          </div>

          <div class="flex flex-col justify-between text-center">
            <p><span class="font-bold">Estado:</span> {{ product.status }}</p>
          </div>

          <div class="flex flex-col gap-2 justify-center">
            <button
              @click="$emit('editProduct', product.id)"
              type="button"
              class="p-2 bg-blue-500 text-white rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                width="16"
                height="16"
                stroke-width="2"
              >
                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                <path
                  d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"
                ></path>
                <path d="M16 5l3 3"></path>
              </svg>
            </button>
            <button type="button" class="p-2 bg-red-500 text-white rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                width="16"
                height="16"
                stroke-width="2"
              >
                <path d="M4 7l16 0"></path>
                <path d="M10 11l0 6"></path>
                <path d="M14 11l0 6"></path>
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
