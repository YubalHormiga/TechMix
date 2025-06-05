<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

import NavigationHeader from './components/landing/NavigationHeader .vue'
import InteractiveMap from './components/landing/InteractiveMap.vue'
import BenefitsContainer from './views/landing/BenefitsContainerView.vue'
import OurServices from './views/landing/OurServicesView.vue'
import FooterLanding from './components/landing/FooterLanding.vue'
import HeroSection from './views/landing/HeroSectionView.vue'
import HowItWorks from './views/landing/HowItWorksView.vue'
import SellersTransporter from './views/landing/SellersTransporterView.vue'

const route = useRoute()

const showLanding = computed(
  () => route.name === 'NautiFleet' || route.fullPath === '/projects/NautiFleet'
)
</script>

<template>
  <div class="relative flex flex-col min-h-screen overflow-x-hidden bg-white">
    <div class="sticky top-0 z-50 bg-white shadow-sm">
      <NavigationHeader />
    </div>

    <div v-if="showLanding" class="flex flex-1 layout-container">
      <div class="flex flex-col h-full layout-container grow">
        <HeroSection />
        <div class="container flex justify-center flex-1 py-5">
          <div class="flex flex-col flex-1 layout-content-container max-w-[1024px]">
            <OurServices />
            <HowItWorks />
            <BenefitsContainer />
            <InteractiveMap />
            <SellersTransporter />
            <FooterLanding />
          </div>
        </div>
      </div>
    </div>

    <div v-else class="flex flex-1 layout-container">
      <RouterView />
    </div>
  </div>
</template>
