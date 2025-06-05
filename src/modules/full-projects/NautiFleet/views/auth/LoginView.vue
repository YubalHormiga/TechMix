<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/authStore'

const email = ref('yubalhh@yahoo.es')
const password = ref('Iraya2902.')

const authStore = useAuthStore()
const { login } = authStore

const handleSubmit = async () => {
  await login(email.value, password.value)
}
</script>

<template>
  <div class="flex justify-center flex-1 px-40 py-5">
    <div class="flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
      <h2 class="pt-5 pb-3 text-3xl font-bold text-center md:text-4xl md:font-black text-[#121416]">
        Bienvenido de nuevo
      </h2>
      <form @submit.prevent="handleSubmit">
        <div class="flex flex-wrap px-4 py-3 text-[#121416]">
          <label class="flex flex-col flex-1" for="email">
            <p class="pb-2 text-base font-normal md:text-lg">
              Nombre de usuario o correo electrónico
            </p>
            <input
              v-model.trim="email"
              placeholder="Introduce tu usuario o correo"
              class="w-full p-4 text-base font-normal bg-white border border-gray-300 form-input rounded-xl h-14 focus:outline-none focus:border-gray-400"
              id="email"
            />
          </label>
        </div>
        <div class="flex flex-wrap px-4 py-3">
          <label class="flex flex-col flex-1">
            <p class="pb-2 text-base font-normal md:text-lg">Contraseña</p>
            <input
              v-model.trim="password"
              placeholder="Introduce tu contraseña"
              class="w-full p-4 text-base font-normal bg-white border border-gray-300 form-input rounded-xl h-14 focus:outline-none focus:border-gray-400"
              type="password"
            />
          </label>
        </div>
        <div class="flex px-4 py-3">
          <button
            type="submit"
            class="w-full rounded-sm h-10 px-2 bg-[#dce7f3] text-[#121416] text-lg font-bold"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
      <RouterLink
        :to="{ name: 'reset-password-nautifleet' }"
        class="px-4 pt-1 pb-3 text-base font-normal text-center text-blue-600 underline transition-colors cursor-pointer hover:text-blue-800 md:text-lg"
      >
        ¿Has olvidado tu contraseña?
      </RouterLink>
      <RouterLink
        :to="{ name: 'register-nautifleet' }"
        class="px-4 pt-1 text-base font-normal text-center text-blue-600 underline transition-colors cursor-pointer hover:text-blue-800 md:text-lg"
      >
        ¿No tienes cuenta? Regístrate
      </RouterLink>
    </div>
  </div>
</template>
