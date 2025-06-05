<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/authStore'
import { authSchema } from '../../../../../../validation/authSchema'

const authStore = useAuthStore()
const { register } = authStore

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref({})

const handleSubmit = async () => {
  const emailError = authSchema.email(email.value)
  const passwordError = authSchema.password(password.value)

  if (!emailError) {
    error.value.email = emailError
  }

  if (!passwordError) {
    error.value.password = passwordError
  }

  if (Object.keys(error.value).length > 0) {
    return
  }
  const displayName = `${firstName.value} ${lastName.value}`
  await register(email.value, password.value, displayName)
}
</script>

<template>
  <div class="flex justify-center flex-1 px-40 py-5">
    <form @submit.prevent="handleSubmit" class="flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
      <h2 class="pt-5 pb-3 text-3xl font-bold text-center md:text-4xl md:font-black text-[#121416]">
        Crea tu cuenta
      </h2>

      <div class="flex flex-wrap gap-4 px-4 py-3">
        <label class="flex flex-col flex-1">
          <p class="pb-2 text-base font-normal md:text-lg">Nombre</p>
          <input
            v-model.trim="firstName"
            placeholder="Introduce tu nombre"
            class="w-full p-4 text-base font-normal bg-white border border-gray-300 form-input rounded-xl h-14 focus:outline-none focus:border-gray-400"
          />
        </label>
        <label class="flex flex-col flex-1">
          <p class="pb-2 text-base font-normal md:text-lg">Apellidos</p>
          <input
            v-model.trim="lastName"
            placeholder="Introduce tus apellidos"
            class="w-full p-4 text-base font-normal bg-white border border-gray-300 form-input rounded-xl h-14 focus:outline-none focus:border-gray-400"
          />
        </label>
      </div>

      <div class="flex flex-wrap px-4 py-3">
        <label class="flex flex-col flex-1">
          <p class="pb-2 text-base font-normal md:text-lg">Correo electrónico</p>
          <input
            v-model.trim="email"
            placeholder="Introduce tu correo electrónico"
            class="w-full p-4 text-base font-normal bg-white border border-gray-300 form-input rounded-xl h-14 focus:outline-none focus:border-gray-400"
          />
        </label>
      </div>

      <div class="flex flex-wrap px-4 py-3">
        <label class="flex flex-col flex-1">
          <p class="pb-2 text-base font-normal md:text-lg">Contraseña</p>
          <input
            v-model.trim="password"
            placeholder="Introduce tu contraseña"
            type="password"
            class="w-full p-4 text-base font-normal bg-white border border-gray-300 form-input rounded-xl h-14 focus:outline-none focus:border-gray-400"
          />
        </label>
      </div>

      <div class="flex flex-wrap px-4 py-3">
        <label class="flex flex-col flex-1">
          <p class="pb-2 text-base font-normal md:text-lg">Confirmar contraseña</p>
          <input
            v-model.trim="confirmPassword"
            placeholder="Confirma tu contraseña"
            type="password"
            class="w-full p-4 text-base font-normal bg-white border border-gray-300 form-input rounded-xl h-14 focus:outline-none focus:border-gray-400"
          />
        </label>
      </div>

      <div class="flex px-4 py-3">
        <button
          type="submit"
          class="w-full rounded-sm h-10 px-2 bg-[#dce7f3] text-[#121416] text-lg font-bold"
        >
          Registrarse
        </button>
      </div>

      <RouterLink
        :to="{ name: 'login-nautifleet' }"
        class="px-4 pt-1 text-base font-normal text-center text-blue-600 underline transition-colors cursor-pointer hover:text-blue-800 md:text-lg"
      >
        ¿Ya tienes una cuenta? Inicia sesión
      </RouterLink>
    </form>
  </div>
</template>
