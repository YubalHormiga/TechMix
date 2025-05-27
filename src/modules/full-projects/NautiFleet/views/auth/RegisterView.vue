<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/authStore'
import { authSchema } from '../../../../../../validation/authSchema'

import Register from '../../assets/images/register.webp'
const authStore = useAuthStore()
const { register } = authStore

const firstName = ref('Yubal')
const lastName = ref('Hormiga')
const email = ref('yubalhh@yahoo.es')
const password = ref('Iraya2902.')
const confirmPassword = ref('Iraya2902.')
const error = ref({})

const handleSubmit = async () => {
  const emailError = authSchema.email(email.value)
  const passwordError = authSchema.email(password.value)

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
  <div class="mx-auto my-auto">
    <div class="flex items-center justify-center px-6 my-12">
      <div class="flex w-full xl:w-3/4 lg:w-11/12">
        <div
          class="hidden w-full h-auto bg-cover rounded-l-lg lg:block lg:w-7/12"
          :style="{
            'background-image': `url(${Register})`,
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'background-size': 'cover'
          }"
        ></div>
        <div class="w-full p-5 bg-white rounded-lg lg:w-5/12 lg:rounded-l-none">
          <form @submit.prevent="handleSubmit" class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
            <div class="mb-4 md:flex md:justify-between">
              <div class="mb-4 md:mr-2 md:mb-0">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                  Nombre
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="Nombre"
                  v-model.trim="firstName"
                  autocomplete="firstName"
                />
              </div>
              <div class="md:ml-2">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                  Apellido
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Apellido"
                  v-model.trim="lastName"
                  autocomplete="lastName"
                />
              </div>
            </div>
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
            <div class="mb-4 md:flex md:justify-between">
              <div class="mb-4 md:mr-2 md:mb-0">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                  Password
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 shadow appearance-none borderrounded focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  v-model.trim="password"
                  autocomplete="new-password"
                />
              </div>
              <div class="md:ml-2">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                  Confirma Password
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="c_password"
                  type="password"
                  placeholder="******************"
                  v-model.trim="confirmPassword"
                  autocomplete="new-password"
                />
              </div>
            </div>
            <div class="mb-6 text-center">
              <button
                class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-sm hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Crear cuenta
              </button>
            </div>
            <hr class="mb-6 border-t" />
            <div class="text-center">
              <RouterLink
                class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                :to="{ name: 'login' }"
              >
                > ¿Ya tienes una cuenta? ¡Inicia sesión!
              </RouterLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
