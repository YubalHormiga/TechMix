<script setup>
import 'leaflet/dist/leaflet.css'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'
import useLocationMap from '../../compasables/useLocationMap'
import MooringCard from './display/MooringCard.vue'

const { zoom, getAnchorIcon, getAnchorIconSelected } = useLocationMap()
const route = useRoute()

const moorings = [
  {
    id: 1,
    name: 'Puerto, Cádiz',
    lat: 36.009256,
    lng: -5.6054603,
    price: 120,
    rating: 4.8,
    reviews: 24
  },
  {
    id: 2,
    name: 'Aguadulce, Almería',
    lat: 36.8153426,
    lng: -2.5750896,
    price: 130,
    rating: 4.6,
    reviews: 18
  },
  {
    id: 3,
    name: 'Puerto Banús, Marbella',
    lat: 36.4854,
    lng: -4.9525,
    price: 150,
    rating: 4.9,
    reviews: 35
  }
]

const selectedMooring = ref(moorings[0])
const center = ref([selectedMooring.value.lat, selectedMooring.value.lng])

const selectMooring = (mooring) => {
  selectedMooring.value = mooring
  center.value = [mooring.lat, mooring.lng]
}

const showCard = computed(() => route.name === 'moorings-map')
</script>

<template>
  <section class="max-w-[1366px] mx-auto my-10 px-4">
    <h2 class="text-3xl md:text-4xl font-bold md:font-black px-4 pb-3 pt-5 text-[#121416]">
      Mapa Interactivo
    </h2>

    <div class="relative w-full h-[300px] md:h-[600px] mb-8">
      <LMap :zoom="zoom" :center="center" style="height: 100%; width: 100%">
        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <LMarker
          v-for="mooring in moorings"
          :key="mooring.id"
          :lat-lng="[mooring.lat, mooring.lng]"
          :icon="mooring.id === selectedMooring.id ? getAnchorIconSelected() : getAnchorIcon()"
          @click="selectMooring(mooring)"
        >
          <LPopup>
            <p class="text-base md:text-lg font-bold text-[#121416]">{{ mooring.name }}</p>
            <p class="text-base md:text-lg font-normal text-[#6a7581]">
              Precio: {{ mooring.price }} €
            </p>
          </LPopup>
        </LMarker>
      </LMap>
    </div>

    <div v-if="selectedMooring && showCard" class="px-4">
      <MooringCard :mooring="selectedMooring" />
    </div>
  </section>
</template>
