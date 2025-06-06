<!-- views/dashboard/DashboardView.vue -->
<script setup>
import { ref } from 'vue'
import SidebarContainer from '../../components/dashboards/SidebarContainer.vue'
import EditProfile from '../../components/dashboards/ProfileForm.vue'
import FavoritesList from '../../components/dashboards/FavoritesList.vue'
import BoatList from '../../components/commom/BoatList.vue'

// Icons
import DashBoard from '../../assets/icons/dashBoard.svg'
import BrowseBoats from '../../assets/icons/browseBoats.svg'
import Transfers from '../../assets/icons/transfers.svg'
import Moorings from '../../assets/icons/moorings.svg'
import Favorites from '../../assets/icons/favorites.svg'
import Listings from '../../assets/icons/listings.svg'
import BookingHistory from '../../assets/icons/bookingHistory.svg'
import Profile from '../../assets/icons/profile.svg'
import Help from '../../assets/icons/help.svg'
// import Logout from '../../assets/icons/logout.svg'

const selectedSection = ref('dashboard')

const userOptions = [
  { id: 'dashboard', label: 'Panel', icon: DashBoard },
  { id: 'browseBoats', label: 'Explorar Embarciones', icon: BrowseBoats },
  { id: 'transfers', label: 'Traslados', icon: Transfers },
  { id: 'moorings', label: 'Amarres', icon: Moorings },
  { id: 'favorites', label: 'Favoritos', icon: Favorites },
  { id: 'history', label: 'Historial', icon: BookingHistory },
  { id: 'listings', label: 'Listado', icon: Listings },
  { id: 'profile', label: 'Perfil', icon: Profile },
  { id: 'help', label: 'Ayuda', icon: Help }
  // { id: 'logout', label: 'Cerrar sesión', icon: Logout }
]

const sections = {
  dashboard: BoatList,
  transfers: BoatList,
  moorings: BoatList,
  listings: BoatList,
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
