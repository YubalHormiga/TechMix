<script setup>
defineProps({
  latitude: { type: Number },
  longitude: { type: Number },
  address: { type: String },
  dockNumber: { type: String }
})

defineEmits(['update:latitude', 'update:longitude', 'update:address', 'update:dock-number'])
</script>

<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Ubicación</h2>

    <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
          <label class="text-[#6a7581] text-base md:text-lg font-normal">Latitud</label>
          <input
            type="text"
            inputmode="decimal"
            pattern="-?\d*\.?\d+"
            @input="$emit('update:latitude', parseFloat($event.target.value) || 0)"
            :value="latitude"
            class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
            placeholder="Ej: 41.385063"
            required
          />
        </div>

        <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
          <label class="text-[#6a7581] text-base md:text-lg font-normal">Longitud</label>
          <input
            type="text"
            inputmode="decimal"
            pattern="-?\d*\.?\d+"
            @input="$emit('update:longitude', parseFloat($event.target.value) || 0)"
            :value="longitude"
            class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
            placeholder="Ej: 2.173404"
            required
          />
        </div>

        <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
          <label class="text-[#6a7581] text-base md:text-lg font-normal">Dirección o Puerto</label>
          <input
            type="text"
            @input="$emit('update:address', $event.target.value)"
            :value="address"
            class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
            placeholder="Nombre del puerto o dirección"
            required
          />
        </div>

        <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
          <label class="text-[#6a7581] text-base md:text-lg font-normal"
            >Muelle / Número de Amarre</label
          >
          <input
            type="text"
            @input="$emit('update:dock-number', $event.target.value)"
            :value="dockNumber"
            class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
            placeholder="Número o identificador"
            required
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
