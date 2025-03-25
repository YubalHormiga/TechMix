<script setup>
import { ref, inject, computed } from 'vue'
import { logicExercises } from '@/data/logic-exercises/logic-exercises'
import AnimatedContainer from '@/components/AnimatedContainer.vue'

import PaginationComponent from '@/components/PaginationComponent.vue'
const toast = inject('toast')

const selectedDifficulty = ref('all')
const currentPage = ref(1)
const itemsPerPage = ref(5)
const exerciseToShow = ref(null)

const copied = ref(null)

const filteredExercises = computed(() => {
  if (selectedDifficulty.value === 'all') {
    return logicExercises
  }
  return logicExercises.filter((exercise) => exercise.difficulty === selectedDifficulty.value)
})

const paginatedExercises = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredExercises.value.slice(start, end)
})

const updatePage = (page) => (currentPage.value = page)

function ShowCode(id) {
  exerciseToShow.value = exerciseToShow.value === id ? null : id
}

function copyToClipboard(code, id) {
  navigator.clipboard.writeText(code).then(() => {
    toast.open({
      message: '¡Código copiado al portapapeles!',
      type: 'info'
    })
    copied.value = id
    setTimeout(() => (copied.value = null), 2000)
  })
}
</script>

<template>
  <AnimatedContainer>
    <div class="p-8 mx-auto max-w-screen-2xl">
      <section class="mb-6">
        <h2 class="mb-4 font-bold text-center">
          Ejercicios de Lógica en JavaScript <span class="text-red-500">"En construcción"</span>
        </h2>
        <p class="text-center text-gray-700">
          Desarrolla tu pensamiento lógico y mejora tus habilidades en <strong>JavaScript</strong>
          con estos ejercicios progresivos. Desde lo más básico hasta lo más avanzado:
        </p>
      </section>

      <div class="text-gray-700">
        <ul>
          <li>
            <span class="font-bold text-green-500">Básico:</span> Operaciones simples, manipulación
            de strings y arrays, condicionales y bucles.
          </li>
          <li>
            <span class="font-bold text-orange-500">Intermedio:</span> Funciones avanzadas,
            manipulación de objetos, recursión y promesas.
          </li>
          <li>
            <span class="font-bold text-red-500">Avanzado:</span> Algoritmos complejos, programación
            funcional, asincronía avanzada y optimización.
          </li>
        </ul>
      </div>

      <div class="mb-4 text-center">
        <label for="difficulty-select" class="mr-2 font-bold">Filtrar por dificultad:</label>
        <div class="select-wrapper">
          <select id="difficulty-select" v-model="selectedDifficulty" class="select-box">
            <option value="all">Todos</option>
            <option value="easy" class="font-bold text-green-500">Básico</option>
            <option value="intermediate" class="font-bold text-orange-500">Intermedio</option>
            <option value="advanced" class="font-bold text-red-500">Avanzado</option>
          </select>
          <span class="font-bold"> {{ filteredExercises.length }} Ejercicios encontrados </span>
        </div>
      </div>

      <div class="mb-4 text-center">
        <label for="items-per-page" class="mr-2 font-bold"
          >¿Cuántos ejercicios quieres ver por página?</label
        >
        <input
          id="items-per-page"
          type="number"
          v-model="itemsPerPage"
          min="1"
          max="100"
          class="select-box"
        />
      </div>

      <div>
        <div
          v-for="(logicExercise, index) in paginatedExercises"
          :key="index"
          class="p-5 rounded-md shadow-lg"
        >
          <h2 class="text-xl font-semibold">{{ logicExercise.title }}</h2>
          <p class="mb-4 text-gray-600">{{ logicExercise.description }}</p>

          <button
            @click="ShowCode(logicExercise.id)"
            class="px-4 py-2 text-white transition-all duration-300 rounded-lg"
            :class="[
              exerciseToShow === logicExercise.id
                ? 'bg-red-500 hover:bg-red-700'
                : 'bg-blue-500 hover:bg-blue-700'
            ]"
          >
            {{ exerciseToShow === logicExercise.id ? 'Ocultar código' : 'Ver código' }}
          </button>

          <div v-if="exerciseToShow === logicExercise.id" class="mt-2">
            <pre class="p-2 overflow-x-auto bg-gray-100 rounded-lg">
              <code>{{ logicExercise.code }}</code>
            </pre>
            <button
              @click="copyToClipboard(logicExercise.code, logicExercise.id)"
              class="px-4 py-2 text-white transition-all duration-300 rounded-lg"
              :class="[
                copied === logicExercise.id
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-blue-500 hover:bg-blue-700'
              ]"
            >
              {{ copied === logicExercise.id ? '¡Copiado!' : 'Copiar' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <PaginationComponent
      v-if="filteredExercises.length && filteredExercises.length > itemsPerPage"
      :total-items="filteredExercises.length"
      :items-per-page="itemsPerPage"
      :current-page="currentPage"
      @update:current-page="updatePage"
    />
  </AnimatedContainer>
</template>

<style scoped>
.select-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background-color: #f9f9f9;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.1);
}

.select-box {
  padding: 1rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition:
    color 0.3s,
    background-color 0.3s;
  outline: none;
}

.select-box:focus {
  outline: none;
  box-shadow: none;
}

.select-box:hover {
  background-color: #e0e0e0;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .projects-container {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
