<script setup>
import { SERVICES } from '../../../constants/dictionaries'

defineProps({
  services: {
    type: Object
  }
})

defineEmits(['update:services'])
</script>

<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Servicios Incluidos</h2>

    <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        <div
          v-for="(service, key) in SERVICES"
          :key="key"
          class="grid col-span-1 grid-cols-subgrid"
        >
          <label
            class="flex items-center gap-2 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer border border-[#dde0e3]"
          >
            <input
              type="checkbox"
              :checked="services[key]"
              @change="$emit('update:services', { ...services, [key]: $event.target.checked })"
              class="w-5 h-5 checkbox accent-blue-600"
            />
            <img :src="service.icon" class="w-6 h-6" :alt="service.name" />
            <span class="text-[#121416] text-base md:text-lg font-normal">
              {{ service.name }}
            </span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.checkbox {
  @apply rounded border-[#dde0e3] focus:ring-blue-500;
}
</style>
