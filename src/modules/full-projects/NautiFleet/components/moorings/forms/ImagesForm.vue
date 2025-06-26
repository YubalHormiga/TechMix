<script setup>
import { ref } from 'vue'

defineProps({
  image: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:image'])

const fileInput = ref(null)

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    emit('update:image', e.target.result)
  }
  reader.readAsDataURL(file)

  // Reset input para permitir cargar la misma imagen otra vez si es necesario
  event.target.value = ''
}

const removeImage = () => {
  emit('update:image', '')
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Imagen del Amarre</h2>

    <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
      <!-- Área de carga -->
      <div
        class="flex flex-col items-center justify-center p-8 border-2 border-dashed border-[#dde0e3] rounded-lg cursor-pointer"
        @click="fileInput.click()"
      >
        <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p class="mt-2 text-sm text-[#6a7581] text-center">Haz clic para seleccionar una imagen</p>
        <input
          ref="fileInput"
          type="file"
          accept="image/*"
          class="hidden"
          @change="handleImageUpload"
        />
      </div>

      <!-- Vista previa de la imagen -->
      <div class="flex justify-center mt-4" v-if="image">
        <div class="relative max-w-md">
          <img
            :src="image"
            class="object-contain h-64 mx-auto rounded-lg"
            alt="Imagen del amarre"
          />
          <button
            @click.stop="removeImage"
            class="absolute p-1 text-white transition-opacity bg-red-500 rounded-full opacity-75 hover:opacity-100 top-1 right-1"
            aria-label="Eliminar imagen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
