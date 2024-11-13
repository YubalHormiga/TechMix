<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { db } from '../data/products.js'

const categories = ref(db)
onMounted(() => {
  categories
})
const product = reactive({
  sku: '',
  category: '',
  name: '',
  quantity: '',
  purchasePrice: '',
  salePrice: '',
  entryDate: '',
  minStock: '',
  status: 'active'
})

const products = ref([])

const handleCategoryChange = () => {
  product.name = ''
}

const categoryItems = computed(() => {
  const category = categories.value.find((cat) => cat.name === product.category)
  return category ? category.items : []
})

const handleSubmit = () => {
  products.value.push({ ...product })
}
</script>

<template>
  <div class="flex flex-col p-4 text-[#0b2a34]">
    <div class="p-4 text-center font-bold uppercase">
      <h2 class="text-[#527986]">Añade o modifica el Producto</h2>
    </div>

    <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
      <div class="flex flex-col">
        <label class="font-bold" for="sku">SKU (Stock Keeping Unit)</label>
        <input v-model="product.sku" class="p-2" type="text" id="sku" placeholder="SKU" />
      </div>

      <div class="flex flex-col">
        <label class="font-bold" for="category">Categoría del Producto</label>
        <select v-model="product.category" @change="handleCategoryChange" class="p-2" id="category">
          <option value="" disabled>Selecciona una categoría</option>
          <option v-for="cat in categories" :key="cat.name" :value="cat.name">
            {{ cat.name }}
          </option>
        </select>
      </div>

      <div v-if="product.category" class="flex flex-col">
        <label class="font-bold" for="name">Producto</label>
        <select v-model="product.name" class="p-2" id="name">
          <option value="" disabled>Selecciona un producto</option>
          <option v-for="item in categoryItems" :key="item" :value="item">{{ item }}</option>
        </select>
      </div>

      <div class="flex flex-col">
        <label class="font-bold" for="quantity">Cantidad del Producto</label>
        <input
          v-model="product.quantity"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          type="number"
          id="quantity"
          placeholder="Cantidad de Producto"
        />
      </div>

      <div class="flex flex-col">
        <label class="font-bold" for="purchasePrice">Precio de compra</label>
        <input
          v-model="product.purchasePrice"
          class="p-2"
          type="number"
          id="purchasePrice"
          placeholder="Precio de compra del Producto"
        />
      </div>

      <div class="flex flex-col">
        <label class="font-bold" for="salePrice">Precio de Venta</label>
        <input
          v-model="product.salePrice"
          class="p-2"
          type="number"
          id="salePrice"
          placeholder="Precio de venta del Producto"
        />
      </div>

      <div class="flex flex-col">
        <label class="font-bold" for="entryDate">Fecha de Entrada</label>
        <input
          v-model="product.entryDate"
          class="p-2"
          type="date"
          id="entryDate"
          placeholder="Fecha de entrada del Producto"
        />
      </div>

      <div class="flex flex-col">
        <label class="font-bold" for="minStock">Nivel mínimo en Stock</label>
        <input
          v-model="product.minStock"
          class="p-2"
          type="number"
          id="minStock"
          placeholder="Nivel mínimo en stock"
        />
      </div>

      <div class="flex flex-col">
        <label class="font-bold p-2">Estado de disponibilidad</label>
        <div class="flex items-center p-2">
          <input
            type="radio"
            id="status-active"
            value="active"
            v-model="product.status"
            class="mr-2"
          />
          <label for="status-active" class="mr-4">Activo</label>

          <input
            type="radio"
            id="status-inactive"
            value="inactive"
            v-model="product.status"
            class="mr-2"
          />
          <label for="status-inactive">Inactivo</label>
        </div>
      </div>

      <input
        type="submit"
        class="bg-[#42cdc7] rounded-md mt-8 p-2 w-full text-white uppercase font-bold hover:bg-[#42b5af] cursor-pointer transition-colors"
        value="Registrar producto"
      />
    </form>
  </div>
</template>

<style scoped></style>
