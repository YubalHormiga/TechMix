<script setup>
import AnimatedContainer from '@/components/AnimatedContainer.vue'
import { helpers } from '../../data/helpers/index'
import { inject } from 'vue'

const toast = inject('toast')
const copyToClipboard = (code) => {
  navigator.clipboard.writeText(code).then(() => {
    toast.open({
      message: '¡Código copiado al portapapeles!',
      type: 'info'
    })
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
          facilitar tareas comunes en el desarrollo de aplicaciones. Cada función está acompañada de
          su descripción, ejemplo de código y un botón para copiar el código al portapapeles. Estas
          herramientas son reutilizables y se irán ampliando a medida que se agreguen más funciones
          útiles.
        </p>
      </section>

      <div v-for="(helper, index) in helpers" :key="index" class="mb-6">
        <div class="p-5 rounded-md shadow-lg">
          <h2 class="text-xl font-semibold">{{ helper.name }}</h2>
          <p class="text-gray-600">{{ helper.description }}</p>
          <pre class="p-1 overflow-x-auto bg-gray-100 rounded-lg">
            <code>{{ helper.code }}</code>
          </pre>
          <button
            @click="copyToClipboard(helper.code)"
            class="px-4 py-2 mt-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700"
          >
            Copiar
          </button>
        </div>
      </div>
    </div>
  </AnimatedContainer>
</template>

<style scoped>
pre {
  font-family: 'Courier New', Courier, monospace;
  white-space: pre-wrap;
  word-break: break-word;
}
</style>
