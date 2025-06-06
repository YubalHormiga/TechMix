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

  if (!emailError) error.value.email = emailError
  if (!passwordError) error.value.password = passwordError

  if (Object.keys(error.value).length > 0) return

  const displayName = `${firstName.value} ${lastName.value}`
  await register(email.value, password.value, displayName)
}
</script>

<template>
  <section class="max-w-[512px] w-full mx-auto p-5">
    <h2 class="text-3xl md:text-4xl font-black text-center text-[#121416] py-5">Crea tu cuenta</h2>

    <form @submit.prevent="handleSubmit" class="space-y-5">
      <!-- Nombre y Apellidos -->
      <div class="flex flex-col gap-4 md:flex-row">
        <label class="flex flex-col flex-1">
          <span class="mb-2 text-base md:text-lg text-[#121416]">Nombre</span>
          <input
            v-model.trim="firstName"
            type="text"
            placeholder="Introduce tu nombre"
            class="px-4 bg-white border border-gray-300 h-14 rounded-xl focus:outline-none focus:border-gray-400"
          />
        </label>

        <label class="flex flex-col flex-1">
          <span class="mb-2 text-base md:text-lg text-[#121416]">Apellidos</span>
          <input
            v-model.trim="lastName"
            type="text"
            placeholder="Introduce tus apellidos"
            class="px-4 bg-white border border-gray-300 h-14 rounded-xl focus:outline-none focus:border-gray-400"
          />
        </label>
      </div>

      <!-- Email -->
      <label class="flex flex-col">
        <span class="mb-2 text-base md:text-lg text-[#121416]">Correo electrónico</span>
        <input
          v-model.trim="email"
          type="email"
          placeholder="Introduce tu correo"
          class="px-4 bg-white border border-gray-300 h-14 rounded-xl focus:outline-none focus:border-gray-400"
        />
      </label>

      <!-- Password -->
      <label class="flex flex-col">
        <span class="mb-2 text-base md:text-lg text-[#121416]">Contraseña</span>
        <input
          v-model.trim="password"
          type="password"
          placeholder="Introduce tu contraseña"
          class="px-4 bg-white border border-gray-300 h-14 rounded-xl focus:outline-none focus:border-gray-400"
        />
      </label>

      <!-- Confirm Password -->
      <label class="flex flex-col">
        <span class="mb-2 text-base md:text-lg text-[#121416]">Confirmar contraseña</span>
        <input
          v-model.trim="confirmPassword"
          type="password"
          placeholder="Confirma tu contraseña"
          class="px-4 bg-white border border-gray-300 h-14 rounded-xl focus:outline-none focus:border-gray-400"
        />
      </label>

      <!-- Botón -->
      <button
        type="submit"
        class="w-full h-10 bg-[#dce7f3] text-[#121416] text-lg font-bold rounded-sm"
      >
        Registrarse
      </button>
    </form>

    <!-- Enlace a login -->
    <div class="pt-4 text-center">
      <RouterLink
        :to="{ name: 'login-nautifleet' }"
        class="text-base text-blue-600 underline hover:text-blue-800 md:text-lg"
      >
        ¿Ya tienes una cuenta? Inicia sesión
      </RouterLink>
    </div>
  </section>
</template>
