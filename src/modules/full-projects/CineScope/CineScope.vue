<script setup>
import { ref, onMounted, watch, inject, computed } from 'vue'

import AnimatedContainer from '@/components/AnimatedContainer.vue'
import AutoCarrousel from '@/components/AutoCarrousel.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'

import MovieCard from './components/MovieCard.vue'
import NoMovies from './assets/images/image_01.webp'
import TryAnother from './assets/images/image_02.webp'

const toast = inject('toast')

const currentPage = ref(1)
const itemsPerPage = ref(4)

const fullMoviesList = ref([])
const searchMovie = ref('')
const genres = ref([])
const selectedGenre = ref('')
const selectedLanguage = ref('')

const defaultCarouselImages = [NoMovies, TryAnother]

const carouselImages = computed(() => {
  if (fullMoviesList.value.length > 0) {
    const validMovies = fullMoviesList.value.filter((movie) => movie.backdrop_path !== null)
    return validMovies.length > 0
      ? validMovies.map((movie) => `https://image.tmdb.org/t/p/original${movie.backdrop_path}`)
      : defaultCarouselImages
  } else {
    return defaultCarouselImages
  }
})

const allMovies = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  return fullMoviesList.value.slice(start, start + itemsPerPage.value)
})

const fetchData = async () => {
  try {
    const key = import.meta.env.VITE_TMDB_API_KEY
    let URL = `https://api.themoviedb.org/3/discover/movie?api_key=${key}`

    if (selectedGenre.value) URL += `&with_genres=${selectedGenre.value}`
    if (selectedLanguage.value) URL += `&language=${selectedLanguage.value}`

    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)

    if (!response.ok) throw new Error('Error al obtener datos de películas')

    let filteredMovies = data.results || []

    if (searchMovie.value.trim()) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.original_title.toLowerCase().includes(searchMovie.value.toLowerCase())
      )
    }

    fullMoviesList.value = filteredMovies

    if (!filteredMovies.length) {
      toast.open({
        message: 'No se encontraron películas',
        type: 'error'
      })
    }
  } catch {
    toast.open({
      message: 'Error al cargar películas',
      type: 'error'
    })
  }
}

const fetchGenres = async () => {
  try {
    const key = import.meta.env.VITE_TMDB_API_KEY
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`)
    const data = await response.json()

    if (!response.ok) throw new Error('Error al obtener géneros')

    genres.value = data.genres
  } catch (error) {
    console.error(error)
  }
}

onMounted(async () => {
  await fetchData()
  await fetchGenres()
})

watch([searchMovie, selectedGenre, selectedLanguage], fetchData, { deep: true })
</script>

<template>
  <AnimatedContainer class="home">
    <header class="relative mb-5">
      <h1
        class="absolute top-0 left-0 z-20 w-full py-4 text-4xl font-bold text-center text-white bg-black/50"
      >
        CineScope
      </h1>
      <AutoCarrousel class="relative" :images="carouselImages" />
    </header>

    <div class="flex flex-col items-center mb-5 md:flex-row md:justify-center md:gap-8">
      <label class="px-4 py-2" for="title">Busca película por título:</label>
      <input
        id="title"
        type="text"
        v-model.trim="searchMovie"
        placeholder="Título de la película"
        class="px-4 py-2 border rounded-lg"
      />
    </div>

    <div class="flex flex-col items-center md:flex-row md:justify-center md:gap-8">
      <div class="flex justify-center mb-5">
        <select class="text-center" v-model="selectedGenre">
          <option value="">-- Todos los géneros --</option>
          <option v-for="genre in genres" :value="genre.id" :key="genre.id">
            {{ genre.name }}
          </option>
        </select>
      </div>

      <div class="flex justify-center mb-5">
        <select class="text-center" v-model="selectedLanguage">
          <option value="">-- Todos los idiomas --</option>
          <option value="es">Español</option>
          <option value="en">Inglés</option>
        </select>
      </div>
    </div>

    <div v-if="allMovies.length" class="container flex flex-wrap justify-center gap-4">
      <main v-for="movie in allMovies" :key="movie.id">
        <MovieCard :movie="movie" />
      </main>
    </div>

    <div v-else class="py-10 text-center text-gray-500">No hay películas disponibles.</div>

    <PaginationComponent
      :totalItems="fullMoviesList.length"
      :itemsPerPage="itemsPerPage"
      v-model:currentPage="currentPage"
    />
  </AnimatedContainer>
</template>
