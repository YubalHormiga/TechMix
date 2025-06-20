<script setup>
import { reactive, computed } from 'vue'
import { SERVICES, FEATURES, RULES, SPECS, PRICING } from '../../constants/dictionaries'

const maxChars = 500 // Máximo de caracteres para la descripción

const form = reactive({
  // Información básica
  title: '',
  description: '',
  images: [],

  // Características del amarre
  type: '',
  material: '',
  orientation: '',
  waveProtection: '',
  naturalShade: '',

  // Especificaciones técnicas
  specs: {
    length: '',
    beam: '',
    draft: '',
    weight: ''
  },

  // Precios
  pricing: {
    daily: '',
    weekly: '',
    monthly: '',
    yearly: '',
    deposit: ''
  },

  // Reglas
  rules: {
    insurance: '',
    quietHours: '',
    petsAllowed: '',
    barbecues: ''
  },

  // Servicios
  services: {},

  // Ubicación
  location: {
    latitude: null,
    longitude: null,
    address: '',
    dockNumber: ''
  },

  // Disponibilidad
  availability: {
    minDays: 1,
    maxDays: 30
  },

  // Tipos de embarcación
  boatTypes: [],

  // Entorno
  environment: {
    currents: '',
    seabed: '',
    draft: '',
    access: ''
  },

  // Restricciones
  restrictions: {
    schedule: '',
    residentsOnly: '',
    requiredDocs: ''
  },

  // Documentación requerida
  requiredDocs: [],

  // Políticas
  cancellationPolicy: '',

  // Servicios adicionales
  additionalServices: {
    electricity: false,
    water: false,
    maintenance: {
      enabled: false,
      description: '',
      price: 0
    },
    fuel: false,
    pickup: false
  }
})

// Contador de caracteres restantes
const remainingChars = computed(() => {
  return maxChars - form.description.length
})

// Manejo de imágenes
const handleImageUpload = (event) => {
  const files = event.target.files
  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader()
    reader.onload = (e) => {
      form.images.push(e.target.result)
    }
    reader.readAsDataURL(files[i])
  }
}

// Envío del formulario
const submitForm = async () => {
  try {
    console.log('Formulario enviado:', form)
    // Aquí iría la lógica para enviar a tu backend
    // await api.post('/moorings', form)
    alert('Amarre guardado correctamente!')
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    alert('Hubo un error al guardar el amarre')
  }
}
</script>

<template>
  <section class="max-w-[1366px] mx-auto my-10 px-4">
    <form @submit.prevent="submitForm" class="flex flex-col gap-10 py-10">
      <!-- INFORMACIÓN GENERAL -->
      <div class="flex flex-col gap-4">
        <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Información General</h2>

        <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
          <div class="grid grid-cols-[20%_1fr] gap-x-6">
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label class="text-[#6a7581] text-base md:text-lg font-normal">Título</label>
              <input
                v-model="form.title"
                type="text"
                class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
                placeholder="Nombre del amarre"
                required
              />
            </div>

            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label class="text-[#6a7581] text-base md:text-lg font-normal">Descripción</label>
              <textarea
                v-model="form.description"
                @input="form.description = form.description.slice(0, maxChars)"
                class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none h-32 w-full p-3 border border-[#dde0e3] rounded-lg"
                placeholder="Descripción detallada del amarre"
                required
              ></textarea>
            </div>
          </div>
          <div class="flex justify-end text-sm text-[#6a7581] bg-white px-2 rounded">
            {{ remainingChars }} / {{ maxChars }} caracteres restantes
          </div>
        </div>
      </div>

      <!-- IMÁGENES -->
      <div class="flex flex-col gap-4">
        <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Imágenes</h2>

        <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
          <div
            class="flex flex-col items-center justify-center p-8 border-2 border-dashed border-[#dde0e3] rounded-lg cursor-pointer"
            @click="$refs.fileInput.click()"
          >
            <svg
              class="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <p class="mt-2 text-sm text-[#6a7581]">
              Arrastra y suelta imágenes aquí o haz clic para seleccionar
            </p>
            <input
              ref="fileInput"
              type="file"
              multiple
              accept="image/*"
              class="hidden"
              @change="handleImageUpload"
            />
          </div>
          <div class="grid grid-cols-3 gap-2 mt-4" v-if="form.images.length > 0">
            <div v-for="(image, index) in form.images" :key="index" class="relative group">
              <img
                :src="image"
                class="object-cover w-full h-32 rounded-lg"
                alt="Imagen de amarre"
              />
              <button
                @click.stop="form.images.splice(index, 1)"
                class="absolute p-1 text-white transition-opacity bg-red-500 rounded-full opacity-0 top-1 right-1 group-hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- CARACTERÍSTICAS DEL AMARRE -->
      <div class="flex flex-col gap-4">
        <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Características del Amarre</h2>

        <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
          <div class="grid grid-cols-[20%_1fr] gap-x-6">
            <!-- Tipo de amarre -->
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label
                class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal"
              >
                <img :src="FEATURES.type.icon" class="w-6 h-6" :alt="FEATURES.type.name" />
                {{ FEATURES.type.name }}
              </label>
              <select
                v-model="form.type"
                class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
                required
              >
                <option value="">Seleccione tipo</option>
                <option value="fixed">Fijo</option>
                <option value="floating">Flotante</option>
                <option value="catamaran">Catamarán</option>
                <option value="sailboat">Velero</option>
                <option value="megayacht">Megayate</option>
                <option value="fishing">Pesquero</option>
              </select>
            </div>

            <!-- Material -->
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label
                class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal"
              >
                <img :src="FEATURES.material.icon" class="w-6 h-6" :alt="FEATURES.material.name" />
                {{ FEATURES.material.name }}
              </label>
              <select
                v-model="form.material"
                class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
                required
              >
                <option value="">Seleccione material</option>
                <option value="steel">Acero</option>
                <option value="concrete">Hormigón</option>
                <option value="wood">Madera</option>
                <option value="composite">Compuesto</option>
                <option value="mixed">Mixto</option>
              </select>
            </div>

            <!-- Orientación -->
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label
                class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal"
              >
                <img
                  :src="FEATURES.orientation.icon"
                  class="w-6 h-6"
                  :alt="FEATURES.orientation.name"
                />
                {{ FEATURES.orientation.name }}
              </label>
              <select
                v-model="form.orientation"
                class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
                required
              >
                <option value="">Seleccione orientación</option>
                <option value="north">Norte</option>
                <option value="south">Sur</option>
                <option value="east">Este</option>
                <option value="west">Oeste</option>
                <option value="northeast">Noreste</option>
                <option value="northwest">Noroeste</option>
                <option value="southeast">Sureste</option>
                <option value="southwest">Suroeste</option>
              </select>
            </div>

            <!-- Protección oleaje -->
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label
                class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal"
              >
                <img
                  :src="FEATURES.waveProtection.icon"
                  class="w-6 h-6"
                  :alt="FEATURES.waveProtection.name"
                />
                {{ FEATURES.waveProtection.name }}
              </label>
              <select
                v-model="form.waveProtection"
                class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
                required
              >
                <option value="">Seleccione nivel de protección</option>
                <option value="high">Alta protección</option>
                <option value="medium">Protección media</option>
                <option value="low">Baja protección</option>
                <option value="none">Sin protección</option>
              </select>
            </div>

            <!-- Sombra natural -->
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label
                class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal"
              >
                <img
                  :src="FEATURES.naturalShade.icon"
                  class="w-6 h-6"
                  :alt="FEATURES.naturalShade.name"
                />
                {{ FEATURES.naturalShade.name }}
              </label>
              <select
                v-model="form.naturalShade"
                class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
                required
              >
                <option value="">Seleccione opción</option>
                <option value="yes">Sí</option>
                <option value="no">No</option>
                <option value="partial">Parcial</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- ESPECIFICACIONES TÉCNICAS -->
      <div class="flex flex-col gap-4">
        <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Especificaciones Técnicas</h2>

        <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
          <div class="grid grid-cols-[20%_1fr] gap-x-6">
            <div
              v-for="(spec, key) in SPECS"
              :key="key"
              class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5"
            >
              <label
                class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal"
              >
                <img :src="spec.icon" class="w-6 h-6" :alt="spec.name" />
                {{ spec.name }}
              </label>
              <div class="flex items-center">
                <input
                  v-model="form.specs[key]"
                  type="number"
                  step="0.01"
                  class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none w-full"
                  :placeholder="key === 'weight' ? 'En toneladas' : 'En metros'"
                  required
                />
                <span class="ml-2 text-[#6a7581] text-sm">
                  {{ key === 'weight' ? 'ton' : 'm' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PRECIOS -->
      <div class="flex flex-col gap-4">
        <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Precios y Condiciones</h2>

        <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
          <div class="grid grid-cols-[20%_1fr] gap-x-6">
            <div
              v-for="(price, key) in PRICING"
              :key="key"
              class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5"
            >
              <label
                class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal"
              >
                <img :src="price.icon" class="w-6 h-6" :alt="price.name" />
                {{ price.name }}
              </label>
              <div class="flex items-center">
                <span class="mr-2">€</span>
                <input
                  v-model="form.pricing[key]"
                  type="number"
                  step="0.01"
                  min="0"
                  class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none w-full"
                  placeholder="0.00"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SERVICIOS INCLUIDOS -->
      <div class="flex flex-col gap-4">
        <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Servicios Incluidos</h2>

        <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            <label
              v-for="(service, key) in SERVICES"
              :key="key"
              class="flex items-center gap-2 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer border border-[#dde0e3]"
            >
              <input
                type="checkbox"
                v-model="form.services[key]"
                class="w-5 h-5 checkbox accent-blue-600"
              />
              <img :src="service.icon" class="w-6 h-6" :alt="service.name" />
              <span class="text-[#121416] text-base md:text-lg font-normal">
                {{ service.name }}
              </span>
            </label>
          </div>
        </div>
      </div>

      <!-- REGLAS -->
      <div class="flex flex-col gap-4">
        <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Reglas y Restricciones</h2>

        <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
          <div class="grid grid-cols-[20%_1fr] gap-x-6">
            <!-- Seguro obligatorio -->
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label
                class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal"
              >
                <img :src="RULES.insurance.icon" class="w-6 h-6" :alt="RULES.insurance.name" />
                {{ RULES.insurance.name }}
              </label>
              <select
                v-model="form.rules.insurance"
                class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
                required
              >
                <option value="">Seleccione opción</option>
                <option value="required">Obligatorio</option>
                <option value="not_required">No obligatorio</option>
                <option value="recommended">Recomendado</option>
              </select>
            </div>

            <!-- Horario silencio -->
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label
                class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal"
              >
                <img :src="RULES.quietHours.icon" class="w-6 h-6" :alt="RULES.quietHours.name" />
                {{ RULES.quietHours.name }}
              </label>
              <input
                v-model="form.rules.quietHours"
                type="text"
                class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
                placeholder="Ej: 22:00 - 08:00"
                required
              />
            </div>

            <!-- Mascotas -->
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label
                class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal"
              >
                <img :src="RULES.petsAllowed.icon" class="w-6 h-6" :alt="RULES.petsAllowed.name" />
                {{ RULES.petsAllowed.name }}
              </label>
              <select
                v-model="form.rules.petsAllowed"
                class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
                required
              >
                <option value="">Seleccione opción</option>
                <option value="allowed">Permitidas</option>
                <option value="not_allowed">No permitidas</option>
                <option value="with_restrictions">Con restricciones</option>
              </select>
            </div>

            <!-- Barbacoas -->
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label
                class="flex items-center gap-2 text-[#6a7581] text-base md:text-lg font-normal"
              >
                <img :src="RULES.barbecues.icon" class="w-6 h-6" :alt="RULES.barbecues.name" />
                {{ RULES.barbecues.name }}
              </label>
              <select
                v-model="form.rules.barbecues"
                class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
                required
              >
                <option value="">Seleccione opción</option>
                <option value="allowed">Permitidas</option>
                <option value="not_allowed">No permitidas</option>
                <option value="designated_area">Solo en área designada</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- UBICACIÓN -->
      <div class="flex flex-col gap-4">
        <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Ubicación</h2>

        <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label class="text-[#6a7581] text-base md:text-lg font-normal">Latitud</label>
              <input
                type="number"
                step="0.000001"
                v-model.number="form.location.latitude"
                class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
                placeholder="Ej: 41.385063"
                required
              />
            </div>

            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label class="text-[#6a7581] text-base md:text-lg font-normal">Longitud</label>
              <input
                type="number"
                step="0.000001"
                v-model.number="form.location.longitude"
                class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
                placeholder="Ej: 2.173404"
                required
              />
            </div>

            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label class="text-[#6a7581] text-base md:text-lg font-normal"
                >Dirección o Puerto</label
              >
              <input
                type="text"
                v-model="form.location.address"
                class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
                placeholder="Nombre del puerto o dirección"
                required
              />
            </div>

            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label class="text-[#6a7581] text-base md:text-lg font-normal"
                >Muelle / Número de Amarre</label
              >
              <input
                type="text"
                v-model="form.location.dockNumber"
                class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
                placeholder="Número o identificador"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <!-- DISPONIBILIDAD -->
      <div class="flex flex-col gap-4">
        <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Disponibilidad</h2>

        <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label class="text-[#6a7581] text-base md:text-lg font-normal"
                >Estancia mínima (días)</label
              >
              <input
                type="number"
                v-model.number="form.availability.minDays"
                min="1"
                class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
                required
              />
            </div>

            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label class="text-[#6a7581] text-base md:text-lg font-normal"
                >Estancia máxima (días)</label
              >
              <input
                type="number"
                v-model.number="form.availability.maxDays"
                :min="form.availability.minDays"
                class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <!-- TIPO DE EMBARCACIÓN -->
      <div class="flex flex-col gap-4">
        <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Tipo de Embarcación Aceptada</h2>

        <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
          <div class="grid grid-cols-2 gap-4">
            <label
              class="flex items-center gap-2 p-3 transition-colors rounded-lg cursor-pointer hover:bg-blue-50"
            >
              <input
                type="checkbox"
                v-model="form.boatTypes"
                value="Motora"
                class="w-5 h-5 checkbox accent-blue-600"
              />
              <span class="text-[#121416] text-base md:text-lg font-normal">Motora</span>
            </label>

            <label
              class="flex items-center gap-2 p-3 transition-colors rounded-lg cursor-pointer hover:bg-blue-50"
            >
              <input
                type="checkbox"
                v-model="form.boatTypes"
                value="Vela"
                class="w-5 h-5 checkbox accent-blue-600"
              />
              <span class="text-[#121416] text-base md:text-lg font-normal">Vela</span>
            </label>

            <label
              class="flex items-center gap-2 p-3 transition-colors rounded-lg cursor-pointer hover:bg-blue-50"
            >
              <input
                type="checkbox"
                v-model="form.boatTypes"
                value="Catamarán"
                class="w-5 h-5 checkbox accent-blue-600"
              />
              <span class="text-[#121416] text-base md:text-lg font-normal">Catamarán</span>
            </label>

            <label
              class="flex items-center gap-2 p-3 transition-colors rounded-lg cursor-pointer hover:bg-blue-50"
            >
              <input
                type="checkbox"
                v-model="form.boatTypes"
                value="Trimarán"
                class="w-5 h-5 checkbox accent-blue-600"
              />
              <span class="text-[#121416] text-base md:text-lg font-normal">Trimarán</span>
            </label>

            <label
              class="flex items-center gap-2 p-3 transition-colors rounded-lg cursor-pointer hover:bg-blue-50"
            >
              <input
                type="checkbox"
                v-model="form.boatTypes"
                value="Jetski"
                class="w-5 h-5 checkbox accent-blue-600"
              />
              <span class="text-[#121416] text-base md:text-lg font-normal">Jetski</span>
            </label>

            <label
              class="flex items-center gap-2 p-3 transition-colors rounded-lg cursor-pointer hover:bg-blue-50"
            >
              <input
                type="checkbox"
                v-model="form.boatTypes"
                value="Casa flotante"
                class="w-5 h-5 checkbox accent-blue-600"
              />
              <span class="text-[#121416] text-base md:text-lg font-normal">Casa flotante</span>
            </label>
          </div>
        </div>
      </div>

      <!-- CONDICIONES DEL ENTORNO -->
      <div class="flex flex-col gap-4">
        <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Condiciones del Entorno</h2>

        <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
          <div class="grid grid-cols-1 gap-4">
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label class="text-[#6a7581] text-base md:text-lg font-normal"
                >¿Corrientes o mareas significativas?</label
              >
              <div class="flex items-center gap-4">
                <label class="flex items-center gap-2">
                  <input
                    type="radio"
                    v-model="form.environment.currents"
                    value="Sí"
                    class="radio accent-blue-600"
                  />
                  <span class="text-[#121416] text-base md:text-lg font-normal">Sí</span>
                </label>
                <label class="flex items-center gap-2">
                  <input
                    type="radio"
                    v-model="form.environment.currents"
                    value="No"
                    class="radio accent-blue-600"
                  />
                  <span class="text-[#121416] text-base md:text-lg font-normal">No</span>
                </label>
              </div>
            </div>

            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label class="text-[#6a7581] text-base md:text-lg font-normal"
                >Tipo de fondo marino</label
              >
              <div class="grid grid-cols-3 gap-2">
                <label class="flex items-center gap-2">
                  <input
                    type="radio"
                    v-model="form.environment.seabed"
                    value="Arena"
                    class="radio accent-blue-600"
                  />
                  <span class="text-[#121416] text-base md:text-lg font-normal">Arena</span>
                </label>
                <label class="flex items-center gap-2">
                  <input
                    type="radio"
                    v-model="form.environment.seabed"
                    value="Rocas"
                    class="radio accent-blue-600"
                  />
                  <span class="text-[#121416] text-base md:text-lg font-normal">Rocas</span>
                </label>
                <label class="flex items-center gap-2">
                  <input
                    type="radio"
                    v-model="form.environment.seabed"
                    value="Fango"
                    class="radio accent-blue-600"
                  />
                  <span class="text-[#121416] text-base md:text-lg font-normal">Fango</span>
                </label>
              </div>
            </div>

            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label class="text-[#6a7581] text-base md:text-lg font-normal"
                >Calado máximo permitido (m)</label
              >
              <div class="flex items-center">
                <input
                  type="number"
                  step="0.1"
                  v-model.number="form.environment.draft"
                  class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none w-full"
                  required
                />
                <span class="ml-2 text-[#6a7581] text-sm">metros</span>
              </div>
            </div>

            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label class="text-[#6a7581] text-base md:text-lg font-normal">Tipo de acceso</label>
              <div class="grid grid-cols-3 gap-2">
                <label class="flex items-center gap-2">
                  <input
                    type="radio"
                    v-model="form.environment.access"
                    value="Protegido"
                    class="radio accent-blue-600"
                  />
                  <span class="text-[#121416] text-base md:text-lg font-normal">Protegido</span>
                </label>
                <label class="flex items-center gap-2">
                  <input
                    type="radio"
                    v-model="form.environment.access"
                    value="Expuesto"
                    class="radio accent-blue-600"
                  />
                  <span class="text-[#121416] text-base md:text-lg font-normal">Expuesto</span>
                </label>
                <label class="flex items-center gap-2">
                  <input
                    type="radio"
                    v-model="form.environment.access"
                    value="Fácil acceso"
                    class="radio accent-blue-600"
                  />
                  <span class="text-[#121416] text-base md:text-lg font-normal">Fácil acceso</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SERVICIOS ADICIONALES -->
      <div class="flex flex-col gap-4">
        <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Servicios Adicionales</h2>

        <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
          <div class="grid grid-cols-1 gap-4">
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label
                class="flex items-center gap-2 text-[#121416] text-base md:text-lg font-normal"
              >
                <input
                  type="checkbox"
                  v-model="form.additionalServices.electricity"
                  class="w-5 h-5 checkbox accent-blue-600"
                />
                Electricidad por consumo (€/kWh)
              </label>
            </div>

            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label
                class="flex items-center gap-2 text-[#121416] text-base md:text-lg font-normal"
              >
                <input
                  type="checkbox"
                  v-model="form.additionalServices.water"
                  class="w-5 h-5 checkbox accent-blue-600"
                />
                Agua potable por consumo (€/litro)
              </label>
            </div>

            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label
                class="flex items-center gap-2 text-[#121416] text-base md:text-lg font-normal"
              >
                <input
                  type="checkbox"
                  v-model="form.additionalServices.maintenance.enabled"
                  class="w-5 h-5 checkbox accent-blue-600"
                />
                Servicio de mantenimiento
              </label>
            </div>

            <div
              v-if="form.additionalServices.maintenance.enabled"
              class="grid grid-cols-1 col-span-2 gap-4 pl-8 md:grid-cols-2"
            >
              <div class="grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
                <label class="text-[#6a7581] text-base md:text-lg font-normal">Descripción</label>
                <input
                  type="text"
                  v-model="form.additionalServices.maintenance.description"
                  class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
                  placeholder="Descripción del servicio"
                />
              </div>

              <div class="grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
                <label class="text-[#6a7581] text-base md:text-lg font-normal">Tarifa (€)</label>
                <input
                  type="number"
                  step="0.01"
                  v-model.number="form.additionalServices.maintenance.price"
                  class="text-[#121416] text-base md:text-lg font-normal bg-transparent outline-none"
                  placeholder="0.00"
                />
              </div>
            </div>

            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label
                class="flex items-center gap-2 text-[#121416] text-base md:text-lg font-normal"
              >
                <input
                  type="checkbox"
                  v-model="form.additionalServices.fuel"
                  class="w-5 h-5 checkbox accent-blue-600"
                />
                Recarga de combustible (€/litro o base)
              </label>
            </div>

            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <label
                class="flex items-center gap-2 text-[#121416] text-base md:text-lg font-normal"
              >
                <input
                  type="checkbox"
                  v-model="form.additionalServices.pickup"
                  class="w-5 h-5 checkbox accent-blue-600"
                />
                Servicio de recogida (ej. aeropuerto)
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- DOCUMENTACIÓN REQUERIDA -->
      <div class="flex flex-col gap-4">
        <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Documentación Requerida</h2>

        <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
          <div class="grid grid-cols-2 gap-4">
            <label
              class="flex items-center gap-2 p-3 transition-colors rounded-lg cursor-pointer hover:bg-blue-50"
            >
              <input
                type="checkbox"
                v-model="form.requiredDocs"
                value="Seguro del barco"
                class="w-5 h-5 checkbox accent-blue-600"
              />
              <span class="text-[#121416] text-base md:text-lg font-normal">Seguro del barco</span>
            </label>

            <label
              class="flex items-center gap-2 p-3 transition-colors rounded-lg cursor-pointer hover:bg-blue-50"
            >
              <input
                type="checkbox"
                v-model="form.requiredDocs"
                value="Titulación del patrón"
                class="w-5 h-5 checkbox accent-blue-600"
              />
              <span class="text-[#121416] text-base md:text-lg font-normal"
                >Titulación del patrón</span
              >
            </label>

            <label
              class="flex items-center gap-2 p-3 transition-colors rounded-lg cursor-pointer hover:bg-blue-50"
            >
              <input
                type="checkbox"
                v-model="form.requiredDocs"
                value="DNI o pasaporte"
                class="w-5 h-5 checkbox accent-blue-600"
              />
              <span class="text-[#121416] text-base md:text-lg font-normal">DNI o pasaporte</span>
            </label>

            <label
              class="flex items-center gap-2 p-3 transition-colors rounded-lg cursor-pointer hover:bg-blue-50"
            >
              <input
                type="checkbox"
                v-model="form.requiredDocs"
                value="Permiso de navegación"
                class="w-5 h-5 checkbox accent-blue-600"
              />
              <span class="text-[#121416] text-base md:text-lg font-normal"
                >Permiso de navegación</span
              >
            </label>
          </div>
        </div>
      </div>

      <!-- POLÍTICA DE CANCELACIÓN -->
      <div class="flex flex-col gap-4">
        <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Política de Cancelación</h2>

        <div class="flex flex-col gap-3 p-4 rounded-lg border border-[#dde0e3]">
          <div class="grid grid-cols-1 gap-4">
            <label
              class="flex items-center gap-2 p-3 transition-colors rounded-lg cursor-pointer hover:bg-blue-50"
            >
              <input
                type="radio"
                v-model="form.cancellationPolicy"
                value="Flexible"
                class="w-5 h-5 radio accent-blue-600"
              />
              <div>
                <span class="text-[#121416] text-base md:text-lg font-normal">Flexible</span>
                <p class="text-[#6a7581] text-sm">Reembolso completo hasta 24 horas antes</p>
              </div>
            </label>

            <label
              class="flex items-center gap-2 p-3 transition-colors rounded-lg cursor-pointer hover:bg-blue-50"
            >
              <input
                type="radio"
                v-model="form.cancellationPolicy"
                value="Moderada"
                class="w-5 h-5 radio accent-blue-600"
              />
              <div>
                <span class="text-[#121416] text-base md:text-lg font-normal">Moderada</span>
                <p class="text-[#6a7581] text-sm">Reembolso del 50% hasta 48 horas antes</p>
              </div>
            </label>

            <label
              class="flex items-center gap-2 p-3 transition-colors rounded-lg cursor-pointer hover:bg-blue-50"
            >
              <input
                type="radio"
                v-model="form.cancellationPolicy"
                value="Estricta"
                class="w-5 h-5 radio accent-blue-600"
              />
              <div>
                <span class="text-[#121416] text-base md:text-lg font-normal">Estricta</span>
                <p class="text-[#6a7581] text-sm">No se realizan reembolsos por cancelación</p>
              </div>
            </label>
          </div>
        </div>
      </div>

      <!-- BOTÓN DE ENVÍO -->
      <div class="flex justify-center mt-8">
        <button
          type="submit"
          class="w-full max-w-[480px] h-12 px-5 text-white text-base md:text-lg font-bold bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
        >
          Guardar Amarre
        </button>
      </div>
    </form>
  </section>
</template>

<style>
.checkbox {
  @apply rounded border-[#dde0e3] focus:ring-blue-500;
}
.radio {
  @apply border-[#dde0e3] focus:ring-blue-500;
}
</style>
