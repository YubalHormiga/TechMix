<script setup>
defineProps({
  title: String,
  description: String,
  maxChars: Number,
  remainingChars: Number
})

defineEmits(['update:title', 'update:description'])
</script>

<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Información General</h2>

    <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
      <div class="grid grid-cols-[20%_1fr] gap-x-6">
        <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
          <label class="text-[#6a7581] text-base md:text-lg font-normal">Título</label>
          <input
            @input="$emit('update:title', $event.target.value)"
            :value="title"
            type="text"
            class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
            placeholder="Nombre del amarre"
            required
          />
        </div>

        <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
          <label class="text-[#6a7581] text-base md:text-lg font-normal">Descripción</label>
          <textarea
            @input="$emit('update:description', $event.target.value)"
            :value="description"
            class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none h-32 w-full p-3 border border-[#dde0e3] rounded-lg"
            placeholder="Descripción detallada del amarre"
            required
          ></textarea>
        </div>
      </div>
      <div class="flex justify-end text-sm text-[#6a7581] bg-white px-2 rounded">
        {{ remainingChars }} / {{ maxChars }} caracteres restantes
      </div>
    </div>
  </div>
</template>
<style scoped></style>
