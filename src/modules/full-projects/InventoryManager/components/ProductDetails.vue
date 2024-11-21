<script setup>
defineProps({
  selectedProductState: {
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
    <div v-if="selectedProductState.name" class="flex flex-col items-center">
      <div class="">
        <img
          :src="getImageUrl(selectedProductState.image)"
          :alt="selectedProductState.name"
          class="w-60 h-60 object-cover bg-no-repeat"
        />
      </div>

      <div class="w p-4">
        <div class="flex flex-col">
          <p class="text-lg font-bold text-[#237078]">
            <span class="text-gray-700">SKU:</span> {{ selectedProductState.id }}
          </p>
          <p class="text-lg font-bold text-[#237078]">
            <span class="text-gray-700">Producto:</span>
            {{ selectedProductState.name }}
          </p>
        </div>
        <p class="text-lg font-bold text-[#237078]">
          <span class="text-gray-700">Cantidad:</span> {{ selectedProductState.quantity }} unidades
        </p>
        <p class="text-lg font-bold text-[#237078]">
          <span class="text-gray-700">Precio de Compra: </span
          >{{ selectedProductState.purchasePrice }} EUR
        </p>
        <p class="text-lg font-bold text-[#237078]">
          <span class="text-gray-700">Precio de Venta: </span
          >{{ selectedProductState.salePrice }} EUR
        </p>
        <p class="text-lg font-bold text-[#237078]">
          <span class="text-gray-700">Nivel Mínimo Stock: </span>{{ selectedProductState.minStock }}
        </p>
        <p class="text-lg font-bold text-[#237078]">
          <span class="text-gray-700">Estado:</span> {{ selectedProductState.status }}
        </p>
        <p class="text-lg font-bold text-[#237078]">
          <span class="text-gray-700">Descripción: </span> {{ selectedProductState.description }}
        </p>
      </div>
      <!-- Mostrar mensaje si no hay selectedProductStateo seleccionado -->
    </div>
    <div v-else class="text-center">
      <p class="">No se ha seleccionado un selectedProductStateo</p>
    </div>
  </div>
</template>
