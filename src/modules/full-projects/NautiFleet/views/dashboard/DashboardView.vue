<!-- views/dashboard/DashboardView.vue -->
<script setup>
import { ref } from 'vue'
import SidebarContainer from '../../components/dashboards/SidebarContainer.vue'
import EditProfile from '../../components/dashboards/ProfileForm.vue'
import FavoritesList from '../../components/dashboards/FavoritesList.vue'

// Icons
import DashBoard from '../../assets/icons/dashBoard/dashBoard.svg'
import Transfers from '../../assets/icons/dashBoard/transfers.svg'
import Moorings from '../../assets/icons/dashBoard/moorings.svg'
import Favorites from '../../assets/icons/dashBoard/favorites.svg'
import Listings from '../../assets/icons/dashBoard/listings.svg'
import BookingHistory from '../../assets/icons/dashBoard/bookingHistory.svg'
import Profile from '../../assets/icons/dashBoard/profile.svg'
import Help from '../../assets/icons/dashBoard/help.svg'

const selectedSection = ref('dashboard')

const userOptions = [
  { id: 'dashboard', label: 'Panel', icon: DashBoard },
  { id: 'transfers', label: 'Traslados', icon: Transfers },
  { id: 'moorings', label: 'Amarres', icon: Moorings },
  { id: 'favorites', label: 'Favoritos', icon: Favorites },
  { id: 'history', label: 'Historial', icon: BookingHistory },
  { id: 'listings', label: 'Listado', icon: Listings },
  { id: 'profile', label: 'Perfil', icon: Profile },
  { id: 'help', label: 'Ayuda', icon: Help }
]

const sections = {
  dashboard: EditProfile,
  transfers: EditProfile,
  moorings: EditProfile,
  listings: EditProfile,
  profile: EditProfile,
  help: FavoritesList
}

const selectOption = (optionId) => {
  selectedSection.value = optionId
}
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden mx-auto max-w-[1366px] px-4">
    <div class="grid lg:grid-cols-[minmax(100px,200px)_1fr] h-full">
      <!-- Sidebar -->
      <div class="w-full">
        <SidebarContainer
          :options="userOptions"
          :initial="selectedSection"
          @select-option="selectOption"
          class="h-full"
        />
      </div>

      <!-- Contenido principal -->
      <div class="w-full p-4 lg:p-6">
        <component :is="sections[selectedSection]" class="h-full rounded-lg" />
      </div>
    </div>
  </div>
</template>
