<script setup>
import { SPECS } from '../../constants/dictionaries'
</script>

<template>
  <div class="flex flex-col gap-4 mt-6">
    <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Technical Specifications</h2>

    <div class="flex flex-col gap-3 p-4">
      <div class="grid grid-cols-[20%_1fr] gap-x-6">
        <div
          v-for="(spec, index) in SPECS"
          :key="index"
          class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5"
        >
          <div class="flex items-center gap-3">
            <img :src="spec.icon" :alt="spec.name" class="w-6 h-6" />
            <p class="text-[#6a7581] text-base md:text-lg font-normal">{{ spec.name }}</p>
          </div>
          <div class="flex items-center">
            <p class="text-[#121416] text-base md:text-lg font-normal">
              {{ spec.value || '0' }}
            </p>
            <span class="text-[#6a7581] text-base md:text-lg font-normal ml-1">
              {{ spec.unit || '' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
