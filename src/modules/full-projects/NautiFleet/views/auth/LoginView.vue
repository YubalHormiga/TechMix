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
  <section class="max-w-[512px] w-full mx-auto p-5">
    <h2 class="text-3xl md:text-4xl font-black text-center text-[#121416] py-5">
      Bienvenido de nuevo
    </h2>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Email -->
      <div>
        <label class="block text-[#121416] text-base md:text-lg mb-2" for="email"
          >Correo electrónico</label
        >
        <input
          id="email"
          v-model.trim="email"
          type="email"
          placeholder="Introduce tu correo"
          class="w-full px-4 text-base bg-white border border-gray-300 h-14 rounded-xl focus:outline-none focus:border-gray-400"
        />
      </div>

      <!-- Password -->
      <div>
        <label class="block text-[#121416] text-base md:text-lg mb-2">Contraseña</label>
        <input
          v-model.trim="password"
          type="password"
          placeholder="Introduce tu contraseña"
          class="w-full px-4 text-base bg-white border border-gray-300 h-14 rounded-xl focus:outline-none focus:border-gray-400"
        />
      </div>

      <!-- Submit -->
      <div>
        <button
          type="submit"
          class="w-full h-10 bg-[#dce7f3] text-[#121416] text-lg font-bold rounded-sm"
        >
          Iniciar sesión
        </button>
      </div>
    </form>

    <!-- Enlaces -->
    <div class="pt-4 space-y-2 text-base text-center md:text-lg">
      <RouterLink
        :to="{ name: 'reset-password-nautifleet' }"
        class="text-blue-600 underline hover:text-blue-800"
      >
        ¿Has olvidado tu contraseña?
      </RouterLink>
      <br />
      <RouterLink
        :to="{ name: 'register-nautifleet' }"
        class="text-blue-600 underline hover:text-blue-800"
      >
        ¿No tienes cuenta? Regístrate
      </RouterLink>
    </div>
  </section>
</template>
