<script setup>
const props = defineProps({
  table: {
    type: Object,
    required: true
  }
})

defineEmits(['add-cart'])

// Función para obtener la URL de la imagen en tiempo de ejecución
function getImageUrl(imageName) {
  return new URL(`../assets/images/${imageName}.jpg`, import.meta.url).href
}
</script>

<template>
  <div class="max-w-[720px] mx-auto">
    <!-- Centering wrapper -->
    <div
      class="relative flex flex-col text-gray-900 bg-white shadow-md bg-clip-border rounded-xl w-96"
    >
      <div
        class="relative mx-4 mt-4 overflow-hidden text-gray-900 bg-white bg-clip-border rounded-xl h-96"
      >
        <img
          :src="getImageUrl(props.table.image)"
          alt="card-image"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="p-6">
        <div class="flex items-center justify-between mb-2">
          <p
            class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900"
          >
            {{ props.table.name }}
          </p>
          <p
            class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900"
          >
            {{ props.table.price }} EUR
          </p>
        </div>
        <p
          class="block font-sans text-sm antialiased font-normal leading-normal text-gray-900 opacity-75"
        >
          {{ props.table.description }}
        </p>
      </div>
      <div class="p-6 pt-0">
        <button
          @click="$emit('add-cart', props.table)"
          class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-lg py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
