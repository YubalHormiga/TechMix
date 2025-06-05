<!-- components/dashboards/SidebarContainer.vue -->
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

watch(
  selectedOption,
  (optionId) => {
    emit('select-option', optionId)
  },
  { immediate: true }
)

const selectOption = (optionId) => {
  selectedOption.value = optionId
}
</script>

<template>
  <div class="sticky flex flex-col w-full top-10 layout-content-container md:w-80">
    <div class="flex flex-col justify-between h-full p-4 bg-white">
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <div
            class="bg-center bg-no-repeat bg-cover rounded-full aspect-square size-10"
            style="background-image: url('https://via.placeholder.com/40')"
          ></div>
          <h1 class="text-[#121416] text-lg md:text-xl font-semibold">
            👋 ¡Hola, {{ displayName }}!
          </h1>
        </div>

        <div class="flex flex-wrap justify-center gap-2 md:flex-col">
          <li
            v-for="option in options"
            :key="option.id"
            @click="selectOption(option.id)"
            class="list-none flex items-center gap-2 px-3 py-2 cursor-pointer text-[#121416]"
            :class="{
              ' bg-[#dce7f3] font-bold': selectedOption === option.id
            }"
          >
            <img :src="option.icon" alt="icono" class="w-5 h-5" />
            <span class="text-base md:text-lg">{{ option.label }}</span>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
