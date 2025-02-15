<script setup>
const props = defineProps({
  cart: {
    type: Object,
    required: true
  },
  totalCart: {
    type: Number,
    required: true
  }
})
defineEmits(['increment-amount', 'decrement-amount', 'delete-table', 'toggle-cart'])
function getImageUrl(imageName) {
  return new URL(`../assets/images/${imageName}.jpg`, import.meta.url).href
}
</script>

<template>
  <div class="relative">
    <button
      type="button"
      @click="$emit('toggle-cart')"
      class="absolute p-3 text-gray-400 -top-3 -right-3 hover:text-gray-500"
    >
      <svg
        class="h-9 w-9"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
  <div class="flex flex-col mt-2">
    <div class="rounded-lg table_component">
      <table>
        <thead class="text-center">
          <tr>
            <th>Producto</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="table in props.cart" :key="table.id">
            <td>
              <img
                :src="getImageUrl(table.image)"
                alt="card-image"
                class="object-cover w-full h-full"
              />
            </td>
            <td>{{ table.name }}</td>
            <td>{{ table.price }} EUR</td>
            <td class="my-auto f">
              <button
                class="cursor-pointer"
                @click="$emit('increment-amount', table)"
                type="button"
              >
                <img src="../assets//icons/add.svg" alt="" />
              </button>
              <p>{{ table.amount }}</p>
              <button
                class="cursor-pointer"
                @click="$emit('decrement-amount', table)"
                type="button"
              >
                <img src="../assets//icons/subtract.svg" alt="" />
              </button>
            </td>
            <td>
              <button @click="$emit('delete-table', table.id)" class="w-10 h-10">
                <img class="" src="../assets/vectors/delete.svg" alt="trash can" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="px-4 py-6 border-t border-gray-200 sm:px-6">
    <div class="flex justify-between text-base font-medium text-gray-900">
      <p>Total</p>
      <p>{{ totalCart }} EUR</p>
    </div>
    <p class="mt-0.5 text-sm text-gray-500">Envío e impuestos calculados al finalizar la compra.</p>
    <div class="mt-6">
      <a
        href="#"
        class="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
        >Finalizar compra</a
      >
    </div>
    <div class="flex justify-center mt-6 text-sm text-center text-gray-500">
      <p>
        o
        <button
          @click="$emit('toggle-cart')"
          type="button"
          class="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Continue Comprando
          <span aria-hidden="true"> &rarr;</span>
        </button>
      </p>
    </div>
  </div>
</template>

<style scoped>
.table_component {
  overflow-x: hidden;
  width: 100%;
  font-size: small;
}

.table_component table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

.table_component th,
.table_component td {
  padding: 10px;
}
</style>
