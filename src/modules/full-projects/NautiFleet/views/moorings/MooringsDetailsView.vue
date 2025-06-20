<script setup>
import MooringHeader from '../../components/moorings/MooringHeader.vue'
import IncludedServices from '../../components/moorings/IncludedServices.vue'
import MooringCharacteristics from '../../components/moorings/MooringCharacteristics.vue'
import TechnicalSpecifications from '../../components/moorings/TechnicalSpecifications.vue'
import PriceAndRules from '../../components/moorings/PriceAndRules.vue'
import RulesAndRestrictions from '../../components/moorings/RulesAndRestrictions.vue'
import BookingSidebar from '../../components/moorings/BookingSidebar.vue'
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
    <BookingSidebar />
  </div>
</template>
