<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

function getImageUrl(imageName) {
  return new URL(`../assets/images/${imageName}.png`, import.meta.url).href
}
</script>

<template>
  <div class="h-[37rem] p-10">
    <div v-if="product.name" class="flex flex-col items-center">
      <div class="">
        <img
          :src="getImageUrl(product.image)"
          :alt="product.name"
          class="w-60 h-60 object-cover bg-no-repeat"
        />
      </div>

      <div class="w p-4">
        <div class="flex flex-col">
          <p class="text-lg text-gray-700 opacity-75">
            <span class="font-bold">ID:</span> {{ product.id }}
          </p>
          <p class="text-lg text-gray-700 opacity-75">
            <span class="font-bold">Producto:</span> {{ product.name }}
          </p>
        </div>
        <p class="text-lg text-gray-700 opacity-75">
          <span class="font-bold">Cantidad:</span> {{ product.quantity }} unidades
        </p>
        <p class="text-lg text-gray-700 opacity-75">
          <span class="font-bold">Precio de Compra: </span>{{ product.purchasePrice }} EUR
        </p>
        <p class="text-lg text-gray-700 opacity-75">
          <span class="font-bold">Precio de Venta:</span>{{ product.salePrice }} EUR
        </p>
        <p class="text-lg text-gray-700 opacity-75">
          <span class="font-bold">Nivel Mínimo Stock:</span>{{ product.minStock }}
        </p>
        <p class="text-lg text-gray-700 opacity-75">
          <span class="font-bold">Estado:</span> {{ product.status }}
        </p>
        <p class="text-lg text-gray-700 opacity-75">
          <span class="font-bold">Descripción:</span> {{ product.description }}
        </p>
      </div>
      <!-- Mostrar mensaje si no hay producto seleccionado -->
    </div>
    <div v-else class="text-center">
      <p class="">No se ha seleccionado un producto</p>
    </div>
  </div>
</template>
