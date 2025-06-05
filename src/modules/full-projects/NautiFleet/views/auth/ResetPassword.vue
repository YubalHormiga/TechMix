<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/authStore'

const authStore = useAuthStore()
const { resetPassword } = authStore
const email = ref('')

const handleSubmit = async () => {
  await resetPassword(email.value)
}
</script>

<template>
  <div class="flex justify-center flex-1 px-40 py-5">
    <div class="flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
      <h2 class="pt-5 pb-3 text-3xl font-bold text-center text-[#121416]">
        ¿Olvidaste tu contraseña?
      </h2>
      <p class="px-4 pt-1 pb-3 text-base font-normal text-center text-[#121416]">
        Introduce el correo asociado a tu cuenta y te enviaremos enlace para restablecer tu
        contraseña.
      </p>
      <form @submit.prevent="handleSubmit">
        <div class="flex flex-wrap px-4 py-3">
          <label class="flex flex-col flex-1" for="email">
            <p class="pb-2 text-base font-normal">Correo electrónico</p>
            <input
              placeholder="Introduce tu correo"
              class="w-full p-4 text-base font-normal bg-white border border-gray-300 form-input rounded-xl h-14 focus:outline-none focus:border-gray-400"
              id="email"
              type="email"
            />
          </label>
        </div>
        <div class="flex px-4 py-3">
          <button
            type="submit"
            class="w-full rounded-sm h-10 px-2 bg-[#dce7f3] text-[#121416] text-lg font-bold"
          >
            Enviar enlace
          </button>
        </div>
      </form>
      <RouterLink
        :to="{ name: 'login-nautifleet' }"
        class="px-4 pt-1 text-base font-normal text-center text-blue-600 underline transition-colors cursor-pointer hover:text-blue-800"
      >
        ¿Recordaste tu contraseña? Inicia sesión
      </RouterLink>
    </div>
  </div>
</template>
