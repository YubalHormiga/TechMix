<script setup>
import MooringHeader from '../../components/moorings/display/MooringHeader.vue'
import IncludedServices from '../../components/moorings/display/IncludedServices.vue'
import MooringCharacteristics from '../../components/moorings/display/MooringCharacteristics.vue'
import TechnicalSpecifications from '../../components/moorings/display/TechnicalSpecifications.vue'
import PriceAndRules from '../../components/moorings/display/PriceAndRules.vue'
import RulesAndRestrictions from '../../components/moorings/display/RulesAndRestrictions.vue'
import AvailabilityCalendar from '../../components/moorings/display/AvailabilityCalendar.vue'
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-4 p-6 max-w-[1366px] mx-auto my-10 px-4">
    <!-- Contenido principal -->
    <main class="flex flex-col flex-1 gap-4 lg:w-2/3">
      <div class="flex justify-center flex-1 gap-1 px-6">
        <div class="layout-content-container flex flex-col max-w-[920px] flex-1">
          <!-- Imagen principal -->
          <MooringHeader />
          <!-- Sección de servicios -->
          <IncludedServices />
          <!-- Características del amarre -->
          <MooringCharacteristics />
          <!-- Especificaciones técnicas -->
          <TechnicalSpecifications />
          <!-- Precios y condiciones -->
          <PriceAndRules />
          <!-- Reglas y restricciones -->
          <RulesAndRestrictions />
        </div>
      </div>
    </main>
    <!-- Sidebar -->
    <AvailabilityCalendar />
  </div>
</template>
