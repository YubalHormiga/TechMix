<script setup>
defineProps({
  environment: {
    type: Object,
    required: true
  }
})

defineEmits(['update:environment'])
</script>

<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Environmental Conditions</h2>

    <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
      <!-- 1. Currents (Corrientes) -->
      <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
        <label class="text-[#6a7581] text-base md:text-lg font-normal">
          ¿Corrientes o mareas significativas? *
        </label>
        <div class="flex items-center gap-4" required>
          <!-- Grupo requerido -->
          <label class="flex items-center gap-2">
            <input
              type="radio"
              name="currents"
              :checked="environment.currents === 'Yes'"
              @change="$emit('update:environment', { ...environment, currents: 'Yes' })"
              class="radio accent-blue-600"
              required
            />
            <span class="text-[#121416] text-base md:text-lg font-normal">Si</span>
          </label>
          <label class="flex items-center gap-2">
            <input
              type="radio"
              name="currents"
              :checked="environment.currents === 'No'"
              @change="$emit('update:environment', { ...environment, currents: 'No' })"
              class="radio accent-blue-600"
            />
            <span class="text-[#121416] text-base md:text-lg font-normal">No</span>
          </label>
        </div>
      </div>

      <!-- 2. Seabed (Fondo marino) -->
      <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
        <label class="text-[#6a7581] text-base md:text-lg font-normal">
          Tipo de fondo marino *
        </label>
        <div class="grid grid-cols-3 gap-2" required>
          <label class="flex items-center gap-2">
            <input
              type="radio"
              name="seabed"
              :checked="environment.seabed === 'Sand'"
              @change="$emit('update:environment', { ...environment, seabed: 'Sand' })"
              class="radio accent-blue-600"
              required
            />
            <span class="text-[#121416] text-base md:text-lg font-normal">Arena</span>
          </label>
          <label class="flex items-center gap-2">
            <input
              type="radio"
              name="seabed"
              :checked="environment.seabed === 'Rocks'"
              @change="$emit('update:environment', { ...environment, seabed: 'Rocks' })"
              class="radio accent-blue-600"
            />
            <span class="text-[#121416] text-base md:text-lg font-normal">Rocas</span>
          </label>
          <label class="flex items-center gap-2">
            <input
              type="radio"
              name="seabed"
              :checked="environment.seabed === 'Mud'"
              @change="$emit('update:environment', { ...environment, seabed: 'Mud' })"
              class="radio accent-blue-600"
            />
            <span class="text-[#121416] text-base md:text-lg font-normal">Fango</span>
          </label>
        </div>
      </div>

      <!-- 3. Access (Acceso) -->
      <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
        <label class="text-[#6a7581] text-base md:text-lg font-normal"> Tipo de acceso * </label>
        <div class="grid grid-cols-3 gap-2" required>
          <label class="flex items-center gap-2">
            <input
              type="radio"
              name="access"
              :checked="environment.access === 'Protected'"
              @change="$emit('update:environment', { ...environment, access: 'Protected' })"
              class="radio accent-blue-600"
              required
            />
            <span class="text-[#121416] text-base md:text-lg font-normal">Protegido</span>
          </label>
          <label class="flex items-center gap-2">
            <input
              type="radio"
              name="access"
              :checked="environment.access === 'Exposed'"
              @change="$emit('update:environment', { ...environment, access: 'Exposed' })"
              class="radio accent-blue-600"
            />
            <span class="text-[#121416] text-base md:text-lg font-normal">Expuesto</span>
          </label>
          <label class="flex items-center gap-2">
            <input
              type="radio"
              name="access"
              :checked="environment.access === 'EasyAccess'"
              @change="$emit('update:environment', { ...environment, access: 'EasyAccess' })"
              class="radio accent-blue-600"
            />
            <span class="text-[#121416] text-base md:text-lg font-normal">Fácil Acceso</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
