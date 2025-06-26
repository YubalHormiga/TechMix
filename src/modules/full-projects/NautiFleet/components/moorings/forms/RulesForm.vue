<script setup>
import { RULES } from '../../../constants/dictionaries'

defineProps({
  insurance: { type: String },
  quietHours: { type: String },
  petsAllowed: { type: String },
  barbecues: { type: String }
})

defineEmits(['update:insurance', 'update:quiet-hours', 'update:pets-allowed', 'update:barbecues'])
</script>

<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Reglas y Restricciones</h2>

    <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
      <div class="grid grid-cols-[20%_1fr] gap-x-6">
        <!-- Seguro obligatorio -->
        <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
          <label class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal">
            <img :src="RULES.insurance.icon" class="w-6 h-6" :alt="RULES.insurance.name" />
            {{ RULES.insurance.name }}
          </label>
          <select
            @input="$emit('update:insurance', $event.target.value)"
            :value="insurance"
            class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
            required
          >
            <option value="">Seleccione opción</option>
            <option value="required">Obligatorio</option>
            <option value="not_required">No obligatorio</option>
            <option value="recommended">Recomendado</option>
          </select>
        </div>

        <!-- Horario silencio -->
        <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
          <label class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal">
            <img :src="RULES.quietHours.icon" class="w-6 h-6" :alt="RULES.quietHours.name" />
            {{ RULES.quietHours.name }}
          </label>
          <input
            @input="$emit('update:quiet-hours', $event.target.value)"
            :value="quietHours"
            class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
            placeholder="Ej: 22:00 - 08:00"
            required
          />
        </div>

        <!-- Mascotas -->
        <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
          <label class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal">
            <img :src="RULES.petsAllowed.icon" class="w-6 h-6" :alt="RULES.petsAllowed.name" />
            {{ RULES.petsAllowed.name }}
          </label>
          <select
            @input="$emit('update:pets-allowed', $event.target.value)"
            :value="petsAllowed"
            class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
            required
          >
            <option value="">Seleccione opción</option>
            <option value="allowed">Permitidas</option>
            <option value="not_allowed">No permitidas</option>
            <option value="with_restrictions">Con restricciones</option>
          </select>
        </div>

        <!-- Barbacoas -->
        <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
          <label class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal">
            <img :src="RULES.barbecues.icon" class="w-6 h-6" :alt="RULES.barbecues.name" />
            {{ RULES.barbecues.name }}
          </label>
          <select
            @input="$emit('update:barbecues', $event.target.value)"
            :value="barbecues"
            class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
            required
          >
            <option value="">Seleccione opción</option>
            <option value="allowed">Permitidas</option>
            <option value="not_allowed">No permitidas</option>
            <option value="designated_area">Solo en área designada</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
