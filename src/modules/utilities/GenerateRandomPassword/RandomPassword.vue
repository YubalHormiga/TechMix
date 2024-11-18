<script setup>
import { ref, inject } from 'vue'

const passwordBox = ref('')
const toast = inject('toast')
const createPassword = () => {
  passwordBox.value = crypto.randomUUID()
}

const copyPassword = async () => {
  try {
    await navigator.clipboard.writeText(passwordBox.value)

    toast.open({
      message: 'Contraseña copiada al portapapeles',
      type: 'info'
    })
  } catch (err) {
    console.error('Error al copiar la contraseña: ', err)
  }
}
</script>

<template>
  <div class="flex flex-col justify-center items-center mt-10">
    <div
      class="flex flex-col items-center justify-center w-[50rem] h-60 rounded-xl text-[#1b933b] bg-[#060a07]"
    >
      <div class="mb-3">
        <h2 class="text-4xl text-[#eff1ef]">Crear Contraseña Aleatoria</h2>
      </div>
      <div class="flex justify-center gap-3 items-center w-full h-15">
        <div>
          <input type="text" :value="passwordBox" class="p-1 w-[33rem] text-center" readonly />
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            @click="copyPassword"
            class="cursor-pointer"
          >
            <g
              fill="none"
              stroke="#eab308"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M16 3H4v13" />
              <path d="M8 7h12v12a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z" />
            </g>
          </svg>
        </div>
      </div>
      <button @click="createPassword" class="p-3 mt-3 text-[#1e2733] bg-[#95daa7] rounded-lg">
        Generar Contraseña
      </button>
    </div>
  </div>
</template>

<style scoped></style>
