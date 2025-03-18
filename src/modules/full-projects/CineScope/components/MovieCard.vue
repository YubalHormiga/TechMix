<script setup>
import { ref } from 'vue'

defineProps({
  movie: {
    type: Object,
    required: true
  }
})

const isModalOpen = ref(false)

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value
}
</script>

<template>
  <div class="relative overflow-hidden rounded-lg shadow-lg h-[400px] w-[300px]">
    <div class="absolute inset-0 cover">
      <img
        :src="'https://image.tmdb.org/t/p/original' + movie.poster_path"
        :alt="movie.original_title"
        class="object-cover w-full h-full"
      />
    </div>

    <div
      class="absolute inset-0 flex flex-col justify-end p-6 text-white bg-black bg-opacity-50 card-back"
    >
      <h3 class="text-xl font-bold">{{ movie.title }}</h3>

      <div class="flex items-center mt-2">
        <span class="mr-2">Rating:</span>
        <span class="text-yellow-400">{{ movie.vote_average }}/10</span>
      </div>
      <span class="mt-2 text-sm">Release Date: {{ movie.release_date }}</span>

      <button
        @click="toggleModal"
        class="inline-block px-4 py-2 mt-2 text-black bg-yellow-400 rounded-lg"
      >
        Ver detalles
      </button>
    </div>
  </div>

  <div
    v-if="isModalOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
    @click.self="toggleModal"
  >
    <div class="w-11/12 max-w-lg p-6 bg-white rounded-lg">
      <img
        v-if="movie.poster_path"
        :src="'https://image.tmdb.org/t/p/original' + movie.poster_path"
        alt="Movie Poster"
        class="w-full h-[300px] mb-4 rounded-lg"
      />
      <h2 class="text-2xl font-bold">{{ movie.title }}</h2>
      <p class="mt-4 text-gray-700">{{ movie.overview }}</p>
      <div class="mt-4">
        <span class="font-semibold">Rating: </span>
        <span class="text-yellow-600">{{ movie.vote_average }}/10</span>
      </div>
      <div class="mt-2">
        <span class="font-semibold">Release Date: </span>
        <span>{{ movie.release_date }}</span>
      </div>
      <button @click="toggleModal" class="px-4 py-2 mt-4 text-white bg-red-500 rounded-lg">
        Cerrar
      </button>
    </div>
  </div>
</template>

<style scoped>
.card-back {
  transition: opacity 0.3s ease;
  opacity: 0;
}
.card-back:hover {
  opacity: 1;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
