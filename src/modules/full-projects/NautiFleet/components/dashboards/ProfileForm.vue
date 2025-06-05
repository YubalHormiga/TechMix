<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/authStore'
import { authSchema } from '../../../../../../validation/authSchema'
import EditProfile from '../../assets/images/editProfile.webp'

const authStore = useAuthStore()
const { updateUserProfile } = authStore

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
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
  await updateUserProfile(displayName, password.value)
}
</script>

<template>
  <div class="mx-auto my-auto">
    <div class="flex items-center justify-center px-6">
      <div class="flex w-full xl:w-3/4 lg:w-11/12">
        <div
          class="hidden w-full h-[400px] bg-cover rounded-l-lg lg:block lg:w-5/12"
          :style="{
            'background-image': `url(${EditProfile})`,
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'background-size': 'cover'
          }"
        ></div>
        <div class="flex items-center w-full lg:w-7/12 lg:rounded-l-none">
          <form @submit.prevent="handleSubmit" class="px-8">
            <div class="mb-6 rounded-lg bg-blue-50">
              <p class="text-lg text-[#4f87a5] font-semibold">
                Actualiza tu nombre y contraseña aquí. La contraseña debe tener al menos 8
                caracteres, incluir una mayúscula , una minúscula, un número y un símbolo
              </p>
            </div>
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
                class="w-full bg-[#284352] hover:bg-[#4f87a5] text-white font-medium py-3 px-4 rounded-md transition duration-300 transform hover:scale-[1.01]"
                type="submit"
              >
                Actualizar Datos
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
