<script setup>
import { FEATURES } from '../../../constants/dictionaries'
defineProps({
  type: { type: String },
  material: { type: String },
  orientation: { type: String },
  waveProtection: { type: String },
  naturalShade: { type: String }
})

defineEmits([
  'update:type',
  'update:material',
  'update:orientation',
  'update:wave-protection',
  'update:natural-shade'
])
</script>

<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Características del Amarre</h2>

    <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
      <div class="grid grid-cols-[20%_1fr] gap-x-6">
        <!-- Tipo de amarre -->
        <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
          <label class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal">
            <img :src="FEATURES.type.icon" class="w-6 h-6" :alt="FEATURES.type.name" />
            {{ FEATURES.type.name }}
          </label>
          <select
            @input="$emit('update:type', $event.target.value)"
            class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
            :value="type"
            required
          >
            <option value="">Seleccione tipo</option>
            <option value="fixed">Fijo</option>
            <option value="floating">Flotante</option>
          </select>
        </div>

        <!-- Material -->
        <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
          <label class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal">
            <img :src="FEATURES.material.icon" class="w-6 h-6" :alt="FEATURES.material.name" />
            {{ FEATURES.material.name }}
          </label>
          <select
            @input="$emit('update:material', $event.target.value)"
            :value="material"
            class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
            required
          >
            <option value="">Seleccione material</option>
            <option value="steel">Acero</option>
            <option value="concrete">Hormigón</option>
            <option value="wood">Madera</option>
            <option value="composite">Compuesto</option>
            <option value="mixed">Mixto</option>
          </select>
        </div>

        <!-- Orientación -->
        <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
          <label class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal">
            <img
              :src="FEATURES.orientation.icon"
              class="w-6 h-6"
              :alt="FEATURES.orientation.name"
            />
            {{ FEATURES.orientation.name }}
          </label>
          <select
            @input="$emit('update:orientation', $event.target.value)"
            :value="orientation"
            class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
            required
          >
            <option value="">Seleccione orientación</option>
            <option value="north">Norte</option>
            <option value="south">Sur</option>
            <option value="east">Este</option>
            <option value="west">Oeste</option>
            <option value="northeast">Noreste</option>
            <option value="northwest">Noroeste</option>
            <option value="southeast">Sureste</option>
            <option value="southwest">Suroeste</option>
          </select>
        </div>

        <!-- Protección oleaje -->
        <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
          <label class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal">
            <img
              :src="FEATURES.waveProtection.icon"
              class="w-6 h-6"
              :alt="FEATURES.waveProtection.name"
            />
            {{ FEATURES.waveProtection.name }}
          </label>
          <select
            @input="$emit('update:wave-protection', $event.target.value)"
            :value="waveProtection"
            class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
            required
          >
            <option value="">Seleccione nivel de protección</option>
            <option value="high">Alta protección</option>
            <option value="medium">Protección media</option>
            <option value="low">Baja protección</option>
            <option value="none">Sin protección</option>
          </select>
        </div>

        <!-- Sombra natural -->
        <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
          <label class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal">
            <img
              :src="FEATURES.naturalShade.icon"
              class="w-6 h-6"
              :alt="FEATURES.naturalShade.name"
            />
            {{ FEATURES.naturalShade.name }}
          </label>
          <select
            @input="$emit('update:natural-shade', $event.target.value)"
            :value="naturalShade"
            class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
            required
          >
            <option value="">Seleccione opción</option>
            <option value="yes">Sí</option>
            <option value="no">No</option>
            <option value="partial">Parcial</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
