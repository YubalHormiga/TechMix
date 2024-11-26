<script setup>
import { computed } from 'vue'

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})

const totalQuantity = computed(() => {
  return props.products.reduce((sum, product) => {
    return sum + (product.quantity || 0)
  }, 0)
})

const updateChartData = computed(() => {
  const categoryData = props.products.reduce((acc, product) => {
    const category = product.category || 'Desconocida'
    acc[category] = (acc[category] || 0) + (product.quantity || 0)
    return acc
  }, {})

  return Object.entries(categoryData).map(([category, quantity]) => [
    category,
    totalQuantity.value > 0 ? ((quantity / totalQuantity.value) * 100).toFixed(2) : 0
  ])
})
</script>

<template>
  <div>
    <pie-chart v-if="updateChartData.length" :data="updateChartData" suffix="%" :donut="true" />
    <p v-else>No hay datos para mostrar.</p>
  </div>
</template>

<style scoped></style>
