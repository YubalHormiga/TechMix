<script setup>
import { SPECS } from '../../../constants/dictionaries'

defineProps({
  length: { type: String },
  beam: { type: String },
  draft: { type: String },
  weight: { type: String }
})

defineEmits(['update:length', 'update:beam', 'update:draft', 'update:weight'])
</script>

<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Especificaciones Técnicas</h2>

    <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
      <div class="grid grid-cols-[20%_1fr] gap-x-6">
        <div
          v-for="(spec, key) in SPECS"
          :key="key"
          class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5"
        >
          <label class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal">
            <img :src="spec.icon" class="w-6 h-6" :alt="spec.name" />
            {{ spec.name }}
          </label>
          <div class="flex items-center">
            <input
              @input="$emit(`update:${key}`, $event.target.value)"
              :value="$props[key]"
              type="number"
              step="0.01"
              class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none w-full"
              :placeholder="key === 'weight' ? 'En toneladas' : 'En metros'"
              required
            />
            <span class="ml-2 text-[#6a7581] text-sm">
              {{ key === 'weight' ? 'ton' : 'm' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
