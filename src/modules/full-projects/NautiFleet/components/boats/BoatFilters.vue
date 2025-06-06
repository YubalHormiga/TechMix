<template>
  <div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:col-span-5">
    <div>
      <label for="type" class="block text-xl font-semibold text-[#284352] mb-1"
        >Tipo de embarcación</label
      >
      <select
        id="type"
        class="w-full border rounded px-3 py-2 text-xl focus:outline-none focus:ring-2 focus:ring-[#4f87a5]"
      >
        <option value="">Todos</option>
        <option value="velero">Velero</option>
        <option value="yate">Yate</option>
        <option value="lancha">Lancha</option>
        <option value="catamaran">Catamarán</option>
      </select>
    </div>

    <div>
      <label for="price" class="block text-xl font-semibold text-[#284352] mb-1"
        >Precio máximo (€)</label
      >
      <input
        id="price"
        type="number"
        min="0"
        class="w-full border rounded px-3 py-2 text-xl focus:outline-none focus:ring-2 focus:ring-[#4f87a5]"
        placeholder="Ej. 500"
      />
    </div>
  </div>
</template>
<style scoped></style>
