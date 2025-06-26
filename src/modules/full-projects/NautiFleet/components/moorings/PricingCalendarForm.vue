<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: Array // Array de {date, price}
})

const emit = defineEmits(['update:modelValue'])

const selectedDate = ref(null)
const priceInput = ref('')

// Agregar/modificar precio
const addPrice = () => {
  if (!selectedDate.value || !priceInput.value) return

  const newPrices = [...props.modelValue]
  const existingIndex = newPrices.findIndex(
    (item) => item.date.toDateString() === selectedDate.value.toDateString()
  )

  if (existingIndex >= 0) {
    newPrices[existingIndex].price = parseFloat(priceInput.value)
  } else {
    newPrices.push({
      date: new Date(selectedDate.value),
      price: parseFloat(priceInput.value)
    })
  }

  emit('update:modelValue', newPrices)
  priceInput.value = ''
}

// Eliminar precio
const removePrice = (date) => {
  const newPrices = props.modelValue.filter(
    (item) => item.date.toDateString() !== date.toDateString()
  )
  emit('update:modelValue', newPrices)
}
</script>

<template>
  <div class="pricing-calendar-form">
    <h3 class="mb-4 text-xl font-bold">Configurar Precios por Día</h3>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <!-- Calendario para selección -->
      <div>
        <vc-calendar v-model="selectedDate" :attributes="attributes" color="blue" is-double-paned />
      </div>

      <!-- Formulario de precios -->
      <div class="price-editor">
        <div v-if="selectedDate" class="mb-4">
          <h4 class="font-semibold">Precio para {{ selectedDate.toLocaleDateString() }}</h4>

          <div class="flex gap-2 mt-2">
            <input
              v-model="priceInput"
              type="number"
              min="0"
              step="0.01"
              placeholder="Precio por día"
              class="flex-1 p-2 border rounded"
            />
            <button
              @click="addPrice"
              class="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Guardar
            </button>
          </div>
        </div>

        <!-- Lista de precios configurados -->
        <div class="mt-6 price-list">
          <h4 class="mb-2 font-semibold">Precios configurados</h4>
          <ul class="space-y-2">
            <li
              v-for="(item, index) in modelValue"
              :key="index"
              class="flex items-center justify-between p-2 bg-gray-100 rounded"
            >
              <span>{{ item.date.toLocaleDateString() }}: ${{ item.price }}</span>
              <button @click="removePrice(item.date)" class="text-red-600 hover:text-red-800">
                ✕
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
