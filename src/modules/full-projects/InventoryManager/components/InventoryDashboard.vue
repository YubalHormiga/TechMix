<script setup>
import { computed } from 'vue'
import { ref } from 'vue'
import { watch } from 'vue'

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})

const chartData = ref(props.products)
const totalQuantity = computed(() => {
  return props.products.reduce((sum, product) => sum + product.quantity, 0)
})

// Crear los datos del gráfico con porcentajes
const updateChartData = computed(() => {
  return props.products.map((product) => [
    product.category,
    totalQuantity.value > 0
      ? ((product.quantity / totalQuantity.value) * 100).toFixed(2) // Calcular el porcentaje
      : 0
  ])
})
watch(chartData, () => {
  updateChartData()
})
</script>

<template>
  <pie-chart :data="updateChartData" suffix="%" :donut="true"></pie-chart>
</template>

<style scoped></style>
