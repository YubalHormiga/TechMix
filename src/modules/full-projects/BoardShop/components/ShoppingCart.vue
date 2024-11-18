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
</script>

<template>
  <div class="relative">
    <button
      type="button"
      @click="$emit('toggle-cart')"
      class="absolute -top-3 -right-3 p-3 text-gray-400 hover:text-gray-500"
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
    <div class="table_component rounded-lg">
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
                :src="`/src/modules/full-projects/BoardShop/assets/images/${table.image}.jpg`"
                alt="imagen"
                class="table-image"
              />
            </td>
            <td>{{ table.name }}</td>
            <td>{{ table.price }} EUR</td>
            <td class="f my-auto">
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
              <button @click="$emit('delete-table', table.id)" class="h-10 w-10">
                <img class="" src="../assets/vectors/delete.svg" alt="trash can" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
    <div class="flex justify-between text-base font-medium text-gray-900">
      <p>Total</p>
      <p>{{ totalCart }} EUR</p>
    </div>
    <p class="mt-0.5 text-sm text-gray-500">Envío e impuestos calculados al finalizar la compra.</p>
    <div class="mt-6">
      <a
        href="#"
        class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >Finalizar compra</a
      >
    </div>
    <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
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
  overflow-x: hidden; /* Evita scroll horizontal */
  width: 100%; /* Usa el 100% del ancho */
  font-size: small;
}

.table_component table {
  width: 100%; /* Asegura que la tabla use todo el ancho disponible */
  border-collapse: collapse;
  text-align: center;
}

.table_component th,
.table_component td {
  padding: 10px;
}
</style>
