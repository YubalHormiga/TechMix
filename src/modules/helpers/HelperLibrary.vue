<script setup>
import AnimatedContainer from '@/components/AnimatedContainer.vue'
import { helpers } from '../../data/helpers/index'
import { inject, ref } from 'vue'

const toast = inject('toast')

const copied = ref(null)

const copyToClipboard = (code, index) => {
  navigator.clipboard.writeText(code).then(() => {
    toast.open({
      message: '¡Código copiado al portapapeles!',
      type: 'info'
    })
    copied.value = index
    setTimeout(() => (copied.value = null), 2000)
  })
}
</script>

<template>
  <AnimatedContainer>
    <div class="p-8 mx-auto max-w-screen-2xl">
      <section class="mb-6">
        <h1 class="mb-4 text-3xl font-bold text-center">Funciones Utilitarias (Helpers)</h1>
        <p class="text-gray-700">
          En esta sección encontrarás una colección de funciones utilitarias diseñadas para
          facilitar tareas comunes en el desarrollo de aplicaciones...
        </p>
      </section>

      <div v-for="(helper, index) in helpers" :key="index" class="mb-6">
        <div class="p-5 rounded-md shadow-lg">
          <h2 class="text-xl font-semibold">{{ helper.name }}</h2>
          <p class="text-gray-600">{{ helper.description }}</p>

          <pre class="p-2 overflow-x-auto bg-gray-100 rounded-lg">
            <code>{{ helper.code }}</code>
          </pre>

          <button
            @click="copyToClipboard(helper.code, index)"
            class="px-4 py-2 mt-2 text-white transition-all duration-300 rounded-lg"
            :class="[
              copied === index ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-700'
            ]"
          >
            {{ copied === index ? '¡Copiado!' : 'Copiar' }}
          </button>
        </div>
      </div>
    </div>
  </AnimatedContainer>
</template>
