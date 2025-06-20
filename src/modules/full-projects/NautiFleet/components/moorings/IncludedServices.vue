<script setup>
import { SERVICES } from '../../constants/dictionaries'
</script>

<template>
  <div class="flex flex-col gap-4 mt-6">
    <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Included Services</h2>

    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      <div
        v-for="(service, index) in SERVICES"
        :key="index"
        class="flex flex-1 gap-3 rounded-lg border border-[#dde0e3] bg-white p-4 items-center hover:bg-blue-50 transition-colors"
      >
        <img :src="service.icon" :alt="service.name" class="w-6 h-6" />
        <span class="text-[#121416] text-base md:text-lg font-normal">
          {{ service.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
