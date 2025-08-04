<script setup>
import { PRICING } from '../../../constants/dictionaries'
import { DEPOSIT } from '../../../constants/dictionaries'

defineProps({
  daily: { type: String },
  weekly: { type: String },
  monthly: { type: String },
  yearly: { type: String },
  deposit: { type: String }
})

defineEmits(['update:daily', 'update:weekly', 'update:monthly', 'update:yearly', 'update:deposit'])
</script>

<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Precios y Condiciones</h2>

    <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
      <div class="grid grid-cols-[20%_1fr] gap-x-6">
        <div
          v-for="(price, key) in PRICING"
          :key="key"
          class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5"
        >
          <label class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal">
            <img :src="price.icon" class="w-6 h-6" :alt="price.name" />
            {{ price.name }}
          </label>
          <div class="flex items-center">
            <span class="mr-2">€</span>
            <input
              @input="$emit(`update:${key}`, $event.target.value)"
              :value="$props[key]"
              type="number"
              step="0.01"
              min="0"
              class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none w-full"
              placeholder="0.00"
              required
            />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-[20%_1fr] gap-x-6 border-t border-t-[#dde0e3] py-5">
        <label class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal">
          <img :src="DEPOSIT.deposit.icon" class="w-6 h-6" :alt="DEPOSIT.deposit.name" />
          {{ DEPOSIT.deposit.name }}
        </label>
        <div class="flex items-center">
          <span class="mr-2"></span>
          <input
            @input="$emit('update:deposit', $event.target.value)"
            maxlength="50"
            :value="deposit"
            type="text"
            class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none w-full"
            placeholder="Indica porcentaje o importe del depósito "
            required
          />
        </div>
      </div>
    </div>
  </div>
</template>
