<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/authStore'
import Login from '../../assets/images/login.webp'

const email = ref('yubalhh@yahoo.es')
const password = ref('Iraya2902.')

const authStore = useAuthStore()
const { login } = authStore

const handleSubmit = async () => {
  await login(email.value, password.value)
}
</script>

<template>
  <div class="flex justify-center px-6 my-12">
    <div class="flex w-full xl:w-2/4 lg:w-11/12">
      <div
        class="hidden w-full h-auto bg-cover rounded-l-lg in-h-screen lg:block lg:w-7/12"
        :style="{
          'background-image': `url(${Login})`,
          'background-position': 'center',
          'background-repeat': 'no-repeat',
          'background-size': 'cover'
        }"
      ></div>
      <div class="w-full p-5 bg-white rounded-lg lg:w-5/12 lg:rounded-l-none">
        <form @click="handleSubmit" class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
          <div class="mb-4">
            <label class="block mb-2 text-sm font-bold text-gray-700" for="email"> Email </label>
            <input
              class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              v-model.trim="email"
              autocomplete="email"
            />
          </div>
          <div class="mb-4">
            <div class="mb-4 md:mr-2 md:mb-0">
              <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                Password
              </label>
              <input
                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                v-model.trim="password"
                autocomplete="new-password"
              />
            </div>
          </div>
          <div class="mb-6 text-center">
            <button
              class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-sm hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Iniciar sesión
            </button>
          </div>
          <hr class="mb-6 border-t" />
          <div class="text-center">
            <a
              class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div class="text-center">
            <RouterLink
              class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
              :to="{ name: 'register' }"
            >
              > ¿No tienes una cuenta? ¡Regístrate!
            </RouterLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
