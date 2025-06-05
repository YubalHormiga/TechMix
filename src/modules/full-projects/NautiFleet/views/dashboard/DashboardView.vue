<!-- views/dashboard/DashboardView.vue -->
<script setup>
import { ref } from 'vue'
import SidebarContainer from '../../components/dashboards/SidebarContainer.vue'
import EditProfile from '../../components/dashboards/ProfileForm.vue'
import FavoritesList from '../../components/dashboards/FavoritesList.vue'
import BoatList from '../../components/dashboards/BoatList.vue'

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
import Logout from '../../assets/icons/logout.svg'

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
  { id: 'help', label: 'Ayuda', icon: Help },
  { id: 'logout', label: 'Cerrar sesión', icon: Logout }
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
  <div class="container grid grid-cols-1 gap-10 px-4 py-10 lg:grid-cols-5 lg:gap-8">
    <SidebarContainer
      :options="userOptions"
      :initial="selectedSection"
      @select-option="selectOption"
    />
    <div class="rounded lg:col-span-4">
      <component :is="sections[selectedSection]" />
    </div>
  </div>
</template>

<style scoped></style>
