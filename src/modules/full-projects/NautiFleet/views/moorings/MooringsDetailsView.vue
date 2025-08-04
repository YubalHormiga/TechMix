<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useMooringsStore } from '../../stores/moorings'

import MooringHeader from '../../components/moorings/display/MooringHeader.vue'
import IncludedServices from '../../components/moorings/display/IncludedServices.vue'
import MooringCharacteristics from '../../components/moorings/display/MooringCharacteristics.vue'
import TechnicalSpecifications from '../../components/moorings/display/TechnicalSpecifications.vue'
import PriceAndRules from '../../components/moorings/display/PriceAndRules.vue'
import RulesAndRestrictions from '../../components/moorings/display/RulesAndRestrictions.vue'
import AvailabilityCalendar from '../../components/moorings/display/AvailabilityCalendar.vue'

const route = useRoute()
const store = useMooringsStore()

const mooringId = route.params.id

const mooring = computed(() => {
  return store.moorinsCollection.find((m) => m.id === mooringId)
})
</script>

<template>
  <div v-if="mooring" class="flex flex-col lg:flex-row gap-4 p-6 max-w-[1366px] mx-auto my-10 px-4">
    <!-- Contenido principal -->
    <main class="flex flex-col flex-1 gap-4 lg:w-2/3">
      <div class="flex justify-center flex-1 gap-1 px-6">
        <div class="layout-content-container flex flex-col max-w-[920px] flex-1">
          <button
            @click="$router.push({ name: 'moorings-map' })"
            class="h-10 bg-[#dce7f3] hover:bg-[#c8d8eb] transition-colors duration-200 text-[#121416] text-lg font-bold rounded-full px-6"
          >
            ← Volver al mapa
          </button>
          <!-- Imagen principal -->
          <MooringHeader :mooring="mooring" />
          <!-- Sección de servicios -->
          <IncludedServices :mooring="mooring" />
          <!-- Características del amarre -->
          <MooringCharacteristics :mooring="mooring" />
          <!-- Especificaciones técnicas -->
          <TechnicalSpecifications :mooring="mooring" />
          <!-- Precios y condiciones -->
          <PriceAndRules :mooring="mooring" />
          <!-- Reglas y restricciones -->
          <RulesAndRestrictions :mooring="mooring" />
        </div>
      </div>
    </main>
    <!-- Sidebar -->
    <AvailabilityCalendar :mooring="mooring" />
  </div>
</template>
