<script setup>
import { ref, watch } from 'vue'
import { useAuthStore } from '../../stores/authStore'
import { storeToRefs } from 'pinia'

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  initial: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['select-option'])

const authStore = useAuthStore()
const { displayName } = storeToRefs(authStore)

const selectedOption = ref(props.initial || props.options[0]?.id)

watch(selectedOption, (optionId) => emit('select-option', optionId), { immediate: true })

const selectOption = (optionId) => {
  selectedOption.value = optionId
}
</script>

<template>
  <div class="flex flex-col self-start w-full layout-content-container">
    <div class="flex flex-col justify-between gap-4 p-4 bg-white">
      <header class="flex items-center gap-2 mb-4">
        <svg class="w-7 h-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
            fill="currentColor"
          />
        </svg>
        <h1 class="text-[#121416] text-3xl font-bold">NautiFleet</h1>
      </header>
      <div class="w-full md:w-auto">
        <button
          @click="authStore.logoutUser"
          class="w-full px-4 py-2 text-lg font-bold text-white transition-colors bg-red-600 rounded-sm hover:bg-red-700"
        >
          Cerrar Sesión
        </button>
      </div>

      <div class="flex items-center gap-3">
        <!-- Avatar placeholder, se puede habilitar cuando se tenga la imagen -->
        <!-- <div class="w-10 h-10 bg-center bg-no-repeat bg-cover rounded-full aspect-square" style="background-image: url('https://via.placeholder.com/40')"></div> -->
        <h2 class="text-[#121416] text-lg md:text-xl font-semibold">
          👋 ¡Hola, {{ displayName }}!
        </h2>
      </div>

      <nav class="flex flex-wrap justify-center gap-2 lg:flex-col">
        <li
          v-for="option in options"
          :key="option.id"
          @click="selectOption(option.id)"
          class="list-none flex items-center gap-2 px-3 py-2 cursor-pointer text-[#121416] rounded-sm"
          :class="selectedOption === option.id ? 'bg-[#dce7f3] font-bold' : 'hover:bg-[#f0f4fb]'"
        >
          <img :src="option.icon" alt="icono" class="w-5 h-5" />
          <span class="text-base md:text-lg">{{ option.label }}</span>
        </li>
      </nav>
    </div>
  </div>
</template>

<style scoped>
/* No styles adicionales necesarios por ahora */
</style>
