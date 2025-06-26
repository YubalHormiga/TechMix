<script setup>
defineProps({
  minDays: { type: Number },
  maxDays: { type: Number }
})

defineEmits(['update:min-days', 'update:max-days'])
</script>

<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Disponibilidad</h2>

    <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
          <label class="text-[#6a7581] text-base md:text-lg font-normal"
            >Estancia mínima (días)</label
          >
          <input
            type="number"
            @input="$emit('update:min-days', Number($event.target.value))"
            :value="minDays"
            min="1"
            class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
            required
          />
        </div>

        <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
          <label class="text-[#6a7581] text-base md:text-lg font-normal"
            >Estancia máxima (días)</label
          >
          <input
            type="number"
            @input="$emit('update:max-days', Number($event.target.value))"
            :value="maxDays"
            max="365"
            class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
            required
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
