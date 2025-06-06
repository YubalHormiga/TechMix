<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/authStore'

const email = ref('')
const { resetPassword } = useAuthStore()

const handleSubmit = async () => {
  await resetPassword(email.value)
}
</script>

<template>
  <section class="max-w-[512px] w-full mx-auto p-5">
    <h2 class="text-3xl font-black text-center text-[#121416] py-5">¿Olvidaste tu contraseña?</h2>
    <p class="text-base md:text-lg text-center text-[#121416] px-4 pb-5">
      Introduce el correo asociado a tu cuenta y te enviaremos un enlace para restablecer tu
      contraseña.
    </p>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <label class="flex flex-col">
        <span class="mb-2 text-base md:text-lg text-[#121416]">Correo electrónico</span>
        <input
          v-model.trim="email"
          type="email"
          placeholder="Introduce tu correo"
          class="px-4 bg-white border border-gray-300 h-14 rounded-xl focus:outline-none focus:border-gray-400"
        />
      </label>

      <button
        type="submit"
        class="w-full h-10 bg-[#dce7f3] text-[#121416] text-lg font-bold rounded-sm"
      >
        Enviar enlace
      </button>
    </form>

    <div class="pt-4 text-center">
      <RouterLink
        :to="{ name: 'login-nautifleet' }"
        class="text-base text-blue-600 underline hover:text-blue-800"
      >
        ¿Recordaste tu contraseña? Inicia sesión
      </RouterLink>
    </div>
  </section>
</template>
