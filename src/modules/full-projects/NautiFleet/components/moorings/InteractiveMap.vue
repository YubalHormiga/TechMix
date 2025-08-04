<script setup>
import 'leaflet/dist/leaflet.css'
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'
import useLocationMap from '../../compasables/useLocationMap'
import MooringCard from './display/MooringCard.vue'
import { useMooringsStore } from '../../stores/moorings'

const mooringsStore = useMooringsStore()
const { zoom, getAnchorIcon, getAnchorIconSelected } = useLocationMap()
const route = useRoute()

const moorings = mooringsStore.moorinsCollection

const selectedMooring = ref(null)

const center = ref(null)

watch(
  moorings,
  (newVal) => {
    if (newVal?.length && !selectedMooring.value) {
      selectedMooring.value = newVal[0]
      center.value = [newVal[0].location.latitude, newVal[0].location.longitude]
    }
  },
  { immediate: true }
)

const selectMooring = (mooring) => {
  selectedMooring.value = mooring
  center.value = [mooring.location.latitude, mooring.location.longitude]
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
          :lat-lng="[mooring.location.latitude, mooring.location.longitude]"
          :icon="mooring.id === selectedMooring?.id ? getAnchorIconSelected() : getAnchorIcon()"
          @click="selectMooring(mooring)"
        >
          <LPopup>
            <p class="text-base md:text-lg font-bold text-[#121416]">
              {{ mooring.location.address }}
            </p>

            <router-link
              :to="{ name: 'mooring-detail', params: { id: mooring.id } }"
              class="h-10 md:h-12 px-4 mt-5 md:px-5 rounded-sm text-sm md:text-base flex items-center justify-center bg-[#dce7f3] hover:bg-[#c8d8eb] transition-colors duration-200 font-bold"
            >
              Ver Detalles
            </router-link>
          </LPopup>
        </LMarker>
      </LMap>
    </div>

    <div v-if="selectedMooring && showCard" class="px-4">
      <MooringCard :mooring="selectedMooring" />
    </div>
  </section>
</template>
