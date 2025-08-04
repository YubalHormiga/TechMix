<script setup>
import { computed } from 'vue'
import { FEATURES } from '../../../constants/dictionaries'
const props = defineProps({
  mooring: {
    type: Object,
    required: true
  }
})
const displayedFeatures = computed(() => {
  return Object.entries(FEATURES)
    .map(([key, feature]) => {
      const value = props.mooring?.[key]
      if (value === undefined || value === null || value === '') {
        return null
      }

      return {
        key,
        ...feature,
        value
      }
    })
    .filter(Boolean)
})
</script>
<template>
  <div class="flex flex-col gap-4 mt-6">
    <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Características del amarre</h2>

    <div class="flex flex-col gap-3 p-4">
      <div class="grid grid-cols-[20%_1fr] gap-x-6">
        <div
          v-for="(feature, index) in displayedFeatures"
          :key="index"
          class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5"
        >
          <div class="flex items-center gap-2">
            <img :src="feature.icon" :alt="feature.name" class="w-6 h-6" />
            <p class="text-[#6a7581] text-base md:text-lg font-normal">
              {{ feature.name }}
            </p>
          </div>
          <p class="text-[#121416] text-base md:text-lg font-normal">
            {{ feature.value }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
