<script setup>
import { CANCELLATION_POLICIES } from '../../constants/dictionaries'

defineProps({
  cancellationPolicy: {
    // Nombre consistente con el v-model
    type: String,
    required: true
  }
})

defineEmits(['update:cancellation-policy']) // Nombre consistente
</script>

<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Política de Cancelación</h2>

    <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
      <div class="grid grid-cols-1 gap-4">
        <label
          v-for="(policy, key) in CANCELLATION_POLICIES"
          :key="key"
          class="flex items-center gap-2 p-3 transition-colors rounded-lg cursor-pointer hover:bg-blue-50"
        >
          <input
            type="radio"
            :checked="cancellationPolicy === key"
            @change="$emit('update:cancellation-policy', key)"
            :value="key"
            class="w-5 h-5 radio accent-blue-600"
            name="cancellationPolicy"
          />
          <div>
            <span class="text-[#121416] text-base md:text-lg font-normal">
              {{ policy.name }}
            </span>
            <p class="text-[#6a7581] text-sm">
              {{ policy.description }}
            </p>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>
