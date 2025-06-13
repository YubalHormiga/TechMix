<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from './stores/authStore'

import NavigationHeader from './views/landing/NavigationHeaderView .vue'
import InteractiveMap from './components/moorings/InteractiveMap.vue'
import BenefitsContainer from './views/landing/BenefitsContainerView.vue'
import OurServices from './views/landing/OurServicesView.vue'
import FooterLanding from './views/landing/FooterLandingView.vue'
import HeroSection from './views/landing/HeroLandingView.vue'
import HowItWorks from './views/landing/HowItWorksView.vue'
import SellersTransporter from './views/landing/SellersTransporterView.vue'

const route = useRoute()
const authStore = useAuthStore()
const showLanding = computed(
  () => route.name === 'NautiFleet' || route.fullPath === '/projects/NautiFleet'
)
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <NavigationHeader v-if="!authStore.isAuthenticated" />
    <div v-if="showLanding" class="flex-1">
      <HeroSection />
      <div class="max-w-[1366px] mx-auto px-4">
        <OurServices />
        <HowItWorks />
        <BenefitsContainer />
        <InteractiveMap />
        <SellersTransporter />
        <FooterLanding />
      </div>
    </div>

    <div v-else class="flex-1">
      <RouterView />
    </div>
  </div>
</template>
