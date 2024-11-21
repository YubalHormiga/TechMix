<script setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(false);
onMounted(() => {
  isVisible.value = true;
});
</script>

<template>
  <Transition name="slide-fade">
    <div v-if="isVisible">
      <slot></slot>
    </div>
  </Transition>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>

