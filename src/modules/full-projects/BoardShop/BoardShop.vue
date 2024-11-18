<!-- App.vue -->
<script setup>
import { computed, onMounted, ref, watch, inject } from 'vue'
import { db } from './data/skates.js'
import ShoppingCart from './components/ShoppingCart.vue'
import ProductCard from './components/ProductCard.vue'
import AutoCarrousel from './components/AutoCarrousel.vue'

const toast = inject('toast')
const tables = ref([])
const cart = ref([])
const cartVisible = ref(false)

onMounted(() => {
  const cartStorage = localStorage.getItem('cart')
  if (cartStorage) {
    cart.value = JSON.parse(cartStorage)
  }
  tables.value = db
})

const saveCartToLocalStorage = () => {
  localStorage.setItem('cart', JSON.stringify(cart.value))
}

watch(
  cart,
  () => {
    saveCartToLocalStorage()
  },
  {
    deep: true
  }
)

const toggleCart = () => {
  cartVisible.value = !cartVisible.value
}

const addCart = (table) => {
  const tableExist = cart.value.findIndex((product) => product.id === table.id)
  if (tableExist >= 0) {
    cart.value[tableExist].amount++
    toast.open({
      message: 'Cantidad del artículo incrementada en el carrito',
      type: 'success'
    })
  } else {
    cart.value.push({ ...table, amount: 1 })
    toast.open({
      message: 'Artículo añadido al carrito',
      type: 'success'
    })
  }
}

const incrementAmount = (table) => {
  const tableExists = cart.value.findIndex((product) => product.id === table.id)
  if (cart.value[tableExists].amount >= 5) return
  cart.value[tableExists].amount++
}

const decrementAmount = (table) => {
  const tableExists = cart.value.findIndex((product) => product.id === table.id)
  if (cart.value[tableExists].amount <= 1) return
  cart.value[tableExists].amount--
}

const deleteTable = (id) => {
  cart.value = cart.value.filter((product) => product.id !== id)
}

const totalCart = computed(() =>
  cart.value.reduce((acc, product) => acc + product.amount * product.price, 0)
)

const totalItemsInCart = computed(() => cart.value.reduce((acc, item) => acc + item.amount, 0))
</script>

<template>
  <header class="w-full relative overflow-hidden">
    <div class="flex gap-10">
      <h1 class="font-black text-5xl p-5 text-fuchsia-600">
        Board<span class="text-pink-500">Shop</span>
      </h1>
      <div @click="toggleCart" class="cursor-pointer h-20 w-20 relative">
        <img src="../BoardShop/assets/icons/cart.webp" alt="carrito" />
        <span
          v-if="totalItemsInCart > 0"
          class="absolute top-0 right-4 bg-red-500 text-white text-base opacity-90 rounded-full w-10 h-10 flex items-center justify-center"
        >
          {{ totalItemsInCart }}
        </span>
      </div>
    </div>
  </header>

  <section class="flex relative w-full">
    <div
      :class="{ 'w-2/3': cartVisible, 'w-full': !cartVisible }"
      class="transition-all duration-500 ease-in-out flex-grow"
    >
      <AutoCarrousel />
      <div class="flex flex-wrap justify-center items-center gap-3 mt-4">
        <div v-for="table in tables" :key="table.id">
          <ProductCard :table="table" @add-cart="addCart" />
        </div>
      </div>
    </div>

    <div
      v-if="cartVisible"
      class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    >
      <div class="bg-white rounded-lg shadow-lg p-4 w-11/12 max-w-xl max-h-[90%] overflow-y-auto">
        <div class="flex justify-center flex-col items-center">
          <template v-if="cart.length === 0">
            <p class="text-center text-lg font-semibold mb-4">¡Tu carrito está vacío!</p>
            <p class="text-center mb-4">Explora nuestros productos y añade algo al carrito.</p>
            <button
              @click="toggleCart"
              type="button"
              class="bg-indigo-600 text-white font-medium px-4 py-2 rounded hover:bg-indigo-700"
            >
              Continuar Comprando
            </button>
          </template>
          <template v-else>
            <ShoppingCart
              :cart="cart"
              :totalCart="totalCart"
              @toggle-cart="toggleCart"
              @increment-amount="incrementAmount"
              @decrement-amount="decrementAmount"
              @delete-table="deleteTable"
            />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
