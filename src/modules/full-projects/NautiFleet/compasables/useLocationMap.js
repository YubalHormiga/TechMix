import { ref } from 'vue'
import L from 'leaflet'
import Anchor from '../assets/icons/anchor.svg'

export default function useLocationMap() {
  const zoom = ref(5)
  const center = ref([36.009256, -5.6054603])
  const userLocation = ref(null)

  const pin = (e) => {
    const { lat, lng } = e.target.getLatLng()
    center.value = [lat, lng]
  }

  const updateLocation = (position) => {
    userLocation.value = [position.coords.latitude, position.coords.longitude]
    center.value = userLocation.value
  }

  const handleError = (error) => {
    console.error('Error al obtener la ubicación:', error.message)
  }

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(updateLocation, handleError)
    } else {
      console.error('Tu navegador no soporta geolocalización.')
    }
  }

  const getAnchorIcon = () => {
    return L.icon({
      iconUrl: Anchor,
      iconSize: [30, 30],
      iconAnchor: [10, 30],
      popupAnchor: [0, -40]
    })
  }
  const getAnchorIconSelected = () => {
    return L.icon({
      iconUrl: Anchor,
      iconSize: [40, 40],
      iconAnchor: [10, 30],
      popupAnchor: [0, -45]
    })
  }

  return {
    zoom,
    center,
    pin,
    getUserLocation,
    getAnchorIcon,
    getAnchorIconSelected
  }
}
