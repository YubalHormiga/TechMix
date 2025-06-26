// 📦 IMPORTACIÓN DE ICONOS

// Servicios incluidos
import Lightning from '../assets/icons/services/lightning.svg'
import Water from '../assets/icons/services/water.svg'
import Wifi from '../assets/icons/services/wifi.svg'
import Shower from '../assets/icons/services/shower.svg'
import ShieldCheck from '../assets/icons/services/shield-check.svg'
import Warehouse from '../assets/icons/services/warehouse.svg'
import GasPump from '../assets/icons/services/gas-pump.svg'
import Crane from '../assets/icons/services/crane.svg'
import Utensils from '../assets/icons/services/utensils.svg'
import Broom from '../assets/icons/services/broom.svg'
import Parking from '../assets/icons/services/parking.svg'
import Tools from '../assets/icons/services/tools.svg'
import WashingMachine from '../assets/icons/services/washing-machine.svg'
import Picnic from '../assets/icons/services/picnic.svg'
import Camera from '../assets/icons/services/camera.svg'
import Wheelchair from '../assets/icons/services/wheelchair.svg'
import SupplyStore from '../assets/icons/services/supply-store.svg'
import Package from '../assets/icons/services/package.svg'
import Cocktail from '../assets/icons/services/cocktail.svg'
import Pool from '../assets/icons/services/pool.svg'

// Características del amarre
import Mooring from '../assets/icons/mooring/mooring.svg'
import Steel from '../assets/icons/mooring/steel.svg'
import Compass from '../assets/icons/mooring/compass.svg'
import Waves from '../assets/icons/mooring/waves.svg'
import Umbrella from '../assets/icons/mooring/umbrella.svg'

// Reglas
import FileContract from '../assets/icons/rules/file-contract.svg'
import QuietTime from '../assets/icons/rules/quiet-time.svg'
import Paw from '../assets/icons/rules/paw.svg'
import Grill from '../assets/icons/rules/grill.svg'

// Especificaciones técnicas
import Ruler from '../assets/icons/specs/ruler.svg'
import Width from '../assets/icons/specs/width.svg'
import Depth from '../assets/icons/specs/depth.svg'
import Weight from '../assets/icons/specs/weight.svg'

// Precios
import Sun from '../assets/icons/pricing/sun.svg'
import CalendarWeek from '../assets/icons/pricing/calendar-week.svg'
import CalendarMonth from '../assets/icons/pricing/calendar-month.svg'
import CalendarYear from '../assets/icons/pricing/calendar-year.svg'
import ShieldDollar from '../assets/icons/pricing/shield-dollar.svg'

// Servicios disponibles
export const SERVICES = {
  electricity: { name: 'Electricidad', icon: Lightning },
  water: { name: 'Agua Potable', icon: Water },
  wifi: { name: 'WiFi', icon: Wifi },
  shower: { name: 'Duchas', icon: Shower },
  security: { name: 'Seguridad 24/7', icon: ShieldCheck },
  storage: { name: 'Almacenamiento', icon: Warehouse },
  fuel: { name: 'Gasolinera', icon: GasPump },
  crane: { name: 'Grúa', icon: Crane },
  restaurant: { name: 'Restaurante', icon: Utensils },
  cleaning: { name: 'Limpieza', icon: Broom },
  parking: { name: 'Parking', icon: Parking },
  workshop: { name: 'Taller Náutico', icon: Tools },
  laundry: { name: 'Lavandería', icon: WashingMachine },
  picnic: { name: 'Área de picnic', icon: Picnic },
  cctv: { name: 'CCTV', icon: Camera },
  accessible: { name: 'Acceso discapacitados', icon: Wheelchair },
  supplyStore: { name: 'Venta de suministros', icon: SupplyStore },
  loadingArea: { name: 'Área de carga', icon: Package },
  beachBar: { name: 'Chiringuito', icon: Cocktail },
  pool: { name: 'Piscina', icon: Pool }
}

// Características del amarre
export const FEATURES = {
  type: { name: 'Tipo', icon: Mooring }, // valor: 'Fijo', 'Flotante', etc.
  material: { name: 'Material', icon: Steel }, // valor: 'Acero', 'Madera'...
  orientation: { name: 'Orientación', icon: Compass }, // valor: 'Norte-Sur'...
  waveProtection: { name: 'Protección oleaje', icon: Waves }, // valor: 'Alta'...
  naturalShade: { name: 'Sombra natural', icon: Umbrella } // valor: 'Sí', 'No'
}

// Reglas
export const RULES = {
  insurance: { name: 'Seguro obligatorio', icon: FileContract }, // Sí / No
  quietHours: { name: 'Horario silencio', icon: QuietTime }, // texto
  petsAllowed: { name: 'Mascotas', icon: Paw }, // Sí / No
  barbecues: { name: 'Barbacoas', icon: Grill } // 'Permitidas', 'Prohibidas'
}

// Especificaciones técnicas
export const SPECS = {
  length: { name: 'Longitud máxima', icon: Ruler }, // en ft o m
  beam: { name: 'Manga máxima', icon: Width },
  draft: { name: 'Calado máximo', icon: Depth },
  weight: { name: 'Peso máximo', icon: Weight } // en toneladas
}

// Precios
export const PRICING = {
  daily: { name: 'Diario', icon: Sun },
  weekly: { name: 'Semanal', icon: CalendarWeek },
  monthly: { name: 'Mensual', icon: CalendarMonth },
  yearly: { name: 'Anual', icon: CalendarYear },
  deposit: { name: 'Depósito', icon: ShieldDollar }
}

// Tipo de Embarcación Aceptada
export const BOAT_TYPES = {
  motor: 'Motora',
  sail: 'Vela',
  catamaran: 'Catamarán',
  trimaran: 'Trimarán',
  jetski: 'Jetski',
  houseboat: 'Casa flotante'
}

// Servicios Adicionales
export const ADDITIONAL_SERVICES = {
  maintenance: 'Mantenimiento',
  wasteDisposal: 'Retirada de residuos',
  boatCleaning: 'Limpieza de embarcación',
  iceDelivery: 'Entrega de hielo',
  pickup: 'Servicio de recogida',
  divingService: 'Servicio de buceo'
}

// Documentación Requerida
export const REQUIRED_DOCS = {
  boatInsurance: 'Seguro del barco',
  captainLicense: 'Titulación del patrón',
  idDocument: 'DNI o pasaporte',
  navigationPermit: 'Permiso de navegación'
}
// Política de Cancelación

export const CANCELLATION_POLICIES = {
  flexible: {
    name: 'Flexible',
    description: 'Reembolso completo hasta 24 horas antes'
  },
  moderate: {
    name: 'Moderada',
    description: 'Reembolso del 50% hasta 48 horas antes'
  },
  strict: {
    name: 'Estricta',
    description: 'No se realizan reembolsos por cancelación'
  }
}
