<script setup>
import AnimatedContainer from '@/components/AnimatedContainer.vue'
import { helpers } from '../../data/helpers/index'
import { inject } from 'vue'

const toast = inject('toast')
// Función para copiar el código al portapapeles
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
    <div class="max-w-7xl mx-auto px-4 py-8">
      <!-- Título y Descripción Introductoria -->
      <section class="mb-6">
        <h1 class="text-3xl font-bold text-center mb-4">Funciones Utilitarias (Helpers)</h1>
        <p class="text-gray-700">
          En esta sección encontrarás una colección de funciones utilitarias diseñadas para
          facilitar tareas comunes en el desarrollo de aplicaciones. Cada función está acompañada de
          su descripción, ejemplo de código y un botón para copiar el código al portapapeles. Estas
          herramientas son reutilizables y se irán ampliando a medida que se agreguen más funciones
          útiles.
        </p>
      </section>

      <!-- Iteración de los helpers -->
      <div v-for="(helper, index) in helpers" :key="index" class="mb-6">
        <div class="rounded-md shadow-lg p-5">
          <h2 class="text-xl font-semibold">{{ helper.name }}</h2>
          <p class="text-gray-600">{{ helper.description }}</p>
          <pre class="bg-gray-100 p-1 rounded-lg overflow-x-auto">
            <code>{{ helper.code }}</code>
          </pre>
          <button
            @click="copyToClipboard(helper.code)"
            class="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
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
  white-space: pre-wrap; /* Asegura que el código largo no se corte */
  word-break: break-word;
}
</style>
