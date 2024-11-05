<script setup>
const props = defineProps({
  githubLink: {
    type: String,
    required: true
  },
  vitestLink: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="mt-4 text-[#fafdfe] ">
    <p class="text-lg">
      Puedes ver el código fuente del proyecto en:
      <a :href="props.githubLink" target="_blank" class="text-[#030b0f] underline"> GitHub</a>.
    </p>
    <p class="text-lg">
      Para ver el testing en:
      <a :href="props.vitestLink" target="_blank" class="text-[#030b0f] underline">
        Testing con Vitest</a
      >.
    </p>
  </div>
</template>

<style scoped>
/* Estilos opcionales para el componente */
</style>
