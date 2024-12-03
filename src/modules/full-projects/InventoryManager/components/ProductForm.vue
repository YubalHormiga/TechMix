<script setup>
import { onMounted, ref, reactive, computed, watch } from 'vue'
import { db } from '../data/products.js'

const props = defineProps({
  productState: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['submitProduct'])
const categories = ref(db)
onMounted(() => {
  categories
})

watch(props.productState, (newProductState) => {
  if (newProductState && Object.keys(newProductState).length > 0) {
    Object.assign(product, newProductState)
  }
})
const product = reactive({
  category: '',
  name: '',
  quantity: 0,
  purchasePrice: 0,
  profitMargin: 0,
  salePrice: 0,
  entryDate: new Date().toISOString().split('T')[0],
  minStock: 10,
  status: 'active',
  id: null
})

const handleSubmit = () => {
  emit('submitProduct', { ...product })
  Object.assign(product, {
    category: '',
    name: '',
    quantity: 0,
    purchasePrice: 0,
    profitMargin: 0,
    salePrice: 0,
    entryDate: new Date().toISOString().split('T')[0],
    minStock: 10,
    status: 'active',
    id: null
  })
}
const handleCategoryChange = () => {
  product.name = ''
}

const categoryItems = computed(() => {
  const category = categories.value.find((cat) => cat.name === product.category)
  return category ? category.items.map((item) => item.name) : []
})

const updateSalePrice = () => {
  const purchasePrice = product.purchasePrice
  const profitMargin = product.profitMargin

  if (purchasePrice && profitMargin >= 0) {
    product.salePrice = (purchasePrice * (1 + profitMargin / 100)).toFixed(2)
  } else {
    product.salePrice = '0.00'
  }
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
        <input
          v-model="product.sku"
          class="p-2"
          type="text"
          id="sku"
          :placeholder="
            productState.lotId
              ? productState.lotId
              : 'El SKU estará disponible al editar este producto'
          "
        />
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

      <div class="flex flex-col">
        <label class="font-bold" for="name">Producto</label>
        <select v-model="product.name" class="p-2" id="name" :disabled="!product.category">
          <option value="" disabled>
            {{ product.category ? 'Selecciona un producto' : 'Selecciona una categoría primero' }}
          </option>
          <option v-for="item in categoryItems" :key="item" :value="item">{{ item }}</option>
        </select>
      </div>

      <div class="flex flex-col">
        <label class="font-bold" for="quantity">Cantidad del Producto</label>
        <input
          v-model.number="product.quantity"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          type="number"
          id="quantity"
          placeholder="Cantidad de Producto"
        />
      </div>

      <div class="flex flex-col">
        <label class="font-bold" for="purchasePrice">Precio de Compra</label>
        <input
          v-model.number="product.purchasePrice"
          class="p-2"
          type="number"
          id="purchasePrice"
          placeholder="Precio de compra del Producto"
        />
      </div>

      <div class="flex flex-col">
        <label class="font-bold" for="salePrice">Ganancia en %</label>
        <input
          v-model.number="product.profitMargin"
          @input="updateSalePrice"
          class="p-2"
          type="number"
          id="salePrice"
          placeholder="Porcentaje de ganancia"
        />
      </div>

      <div class="flex flex-col">
        <label class="font-bold" for="calculatedSalePrice">Precio de Venta Calculado</label>
        <input
          v-model="product.salePrice"
          class="p-2"
          type="number"
          id="calculatedSalePrice"
          placeholder="Precio de venta calculado"
          disabled
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
        :value="productState.lotId ? 'Guardar cambios' : 'Registrar producto'"
      />
    </form>
  </div>
</template>

<style scoped></style>
