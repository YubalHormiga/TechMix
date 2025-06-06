<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/authStore'
import { authSchema } from '../../../../../../validation/authSchema'

const authStore = useAuthStore()
const { updateUserProfile } = authStore

const firstName = ref('')
const lastName = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref({})

const handleSubmit = async () => {
  const passwordError = authSchema.email(password.value)

  if (!passwordError) {
    error.value.password = passwordError
  }

  if (Object.keys(error.value).length > 0) {
    return
  }
  const displayName = `${firstName.value} ${lastName.value}`
  await updateUserProfile(displayName, password.value)
}
</script>

<template>
  <div class="flex justify-center px-2 py-0 md:px-40">
    <form @submit.prevent="handleSubmit" class="flex flex-col w-full max-w-[512px] space-y-4">
      <h2 class="text-3xl font-bold text-center md:text-4xl md:font-black text-[#121416]">
        Administra tu información personal
      </h2>
      <p class="text-base font-normal text-center md:text-lg text-[#6a7581]">
        Actualiza tu nombre, apellido y contraseña. Deja la contraseña vacía si no deseas cambiarla.
      </p>
      <div class="flex flex-wrap gap-4">
        <label class="flex flex-col w-full">
          <p class="pb-2 text-base font-normal md:text-lg">Nombre</p>

          <input
            v-model.trim="firstName"
            placeholder="Introduce tu nombre"
            class="w-full p-4 text-base border border-gray-300 rounded-xl h-14 focus:outline-none focus:border-gray-400"
          />
        </label>
        <label class="flex flex-col w-full">
          <p class="pb-2 text-base font-normal md:text-lg">Apellidos</p>
          <input
            v-model.trim="lastName"
            placeholder="Introduce tus apellidos"
            class="w-full p-4 text-base border border-gray-300 rounded-xl h-14 focus:outline-none focus:border-gray-400"
          />
        </label>
      </div>

      <label class="flex flex-col">
        <p class="pb-2 text-base font-normal md:text-lg">Contraseña</p>
        <input
          v-model.trim="password"
          placeholder="Introduce tu contraseña"
          type="password"
          class="w-full p-4 text-base border border-gray-300 rounded-xl h-14 focus:outline-none focus:border-gray-400"
        />
      </label>

      <label class="flex flex-col">
        <p class="pb-2 text-base font-normal md:text-lg">Confirmar contraseña</p>
        <input
          v-model.trim="confirmPassword"
          placeholder="Confirma tu contraseña"
          type="password"
          class="w-full p-4 text-base border border-gray-300 rounded-xl h-14 focus:outline-none focus:border-gray-400"
        />
      </label>

      <button
        type="submit"
        class="w-full rounded-sm h-10 bg-[#dce7f3] text-[#121416] text-lg font-bold"
      >
        Actualizar Datos
      </button>
    </form>
  </div>
</template>
