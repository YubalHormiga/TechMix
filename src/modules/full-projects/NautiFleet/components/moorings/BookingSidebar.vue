<script setup>
import { ref } from 'vue'

const selectedDates = ref([])

// Simulamos fechas ocupadas y precios
const busyDates = [
  { start: new Date(2025, 6, 5), end: new Date(2025, 6, 10), price: 150 },
  { start: new Date(2025, 6, 15), end: new Date(2025, 6, 18), price: 200 }
]

const attributes = busyDates.map((item) => ({
  key: `${item.start}-${item.end}`,
  highlight: true,
  dates: { start: item.start, end: item.end },
  customData: { price: item.price },
  popover: {
    label: `Precio: $${item.price}/día`,
    visibility: 'hover'
  },
  contentClass: 'bg-red-200 text-black font-bold'
}))
</script>

<template>
  <aside class="flex flex-col w-full gap-6 lg:w-1/3 max-w-[400px] mx-auto lg:mx-0">
    <!-- Contenedor principal con estilos actualizados -->
    <div class="bg-white rounded-lg border border-[#dde0e3] p-4 flex flex-col w-full">
      <!-- Título con estilos consistentes -->
      <h2 class="text-3xl md:text-4xl font-bold text-[#121416] text-center mb-4">Disponibilidad</h2>

      <!-- Calendario (manteniendo estructura pero con fondo blanco) -->
      <div class="w-full bg-white rounded-lg">
        <vc-calendar
          expanded
          is-range
          v-model="selectedDates"
          :attributes="attributes"
          color="blue"
          class="w-full"
        />
      </div>
    </div>

    <!-- Botón con estilos consistentes -->
    <button
      class="w-full px-4 py-3 font-medium text-white transition bg-blue-600 rounded hover:bg-blue-700"
    >
      Reservar
    </button>
  </aside>
</template>
