// PaginationComponent.vue
<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  totalItems: { type: Number, required: true },
  itemsPerPage: { type: Number, default: 10 },
  currentPage: { type: Number, default: 1 }
})

const emit = defineEmits(['update:currentPage'])

const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage))

const prevPage = () => {
  if (props.currentPage > 1) {
    emit('update:currentPage', props.currentPage - 1)
  }
}

const nextPage = () => {
  if (props.currentPage < totalPages.value) {
    emit('update:currentPage', props.currentPage + 1)
  }
}
</script>
<template>
  <div class="flex items-center justify-center gap-6 mt-4 space-x-2">
    <button
      @click="prevPage"
      :disabled="currentPage === 1"
      class="px-4 py-2 border rounded bg-[#231557] text-white"
    >
      Anterior
    </button>
    <span>Página {{ currentPage }} de {{ totalPages }}</span>
    <button
      @click="nextPage"
      :disabled="currentPage === totalPages"
      class="px-4 py-2 border rounded bg-[#231557] text-white"
    >
      Siguiente
    </button>
  </div>
</template>
