<script setup>
import { reactive, computed } from 'vue'
import GeneralInfoForm from '../../components/moorings/forms/GeneralInfoForm.vue'
import FeaturesForm from '../../components/moorings/forms/FeaturesForm.vue'
import ImagesForm from '../../components/moorings/forms/ImagesForm.vue'
import SpecsForm from '../../components/moorings/forms/SpecsForm.vue'
import PricingForm from '../../components/moorings/forms/PricingForm.vue'
import ServicesForm from '../../components/moorings/forms/ServicesForm.vue'
import RulesForm from '../../components/moorings/forms/RulesForm.vue'
import LocationForm from '../../components/moorings/forms/LocationForm.vue'
import AvailabilityForm from '../../components/moorings/forms/AvailabilityForm.vue'
import BoatTypesForm from '../../components/moorings/forms/BoatTypesForm.vue'
import EnvironmentForm from '../../components/moorings/forms/EnvironmentForm.vue'
import AdditionalServicesForm from '../../components/moorings/forms/AdditionalServicesForm.vue'
import RequiredDocsForm from './RequiredDocsForm.vue'
import CancellationPolicyForm from './CancellationPolicyForm.vue'

const form = reactive({
  // Información básica
  title: '',
  description: '',
  images: '',

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
  requiredDocs: {
    boatInsurance: false,
    captainLicense: false,
    idDocument: false,
    navigationPermit: false
  },

  // Políticas
  cancellationPolicy: 'flexible',

  // Servicios adicionales
  additionalServices: {
    maintenance: false,
    wasteDisposal: false,
    boatCleaning: false,
    iceDelivery: false,
    pickup: false,
    divingService: false
  }
})

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

const maxChars = 500 // Máximo de caracteres para la descripción
// Contador de caracteres restantes
const remainingChars = computed(() => {
  return maxChars - form.description.length
})
</script>

<template>
  <section class="max-w-[1366px] mx-auto my-10 px-4">
    <form @submit.prevent="submitForm" class="flex flex-col gap-10 py-10">
      <!-- INFORMACIÓN GENERAL -->
      <GeneralInfoForm
        v-model:title="form.title"
        v-model:description="form.description"
        :maxChars="maxChars"
        :remainingChars="remainingChars"
      />
      <!-- IMÁGENES -->
      <ImagesForm v-model:image="form.image" />

      <!-- CARACTERÍSTICAS DEL AMARRE -->
      <FeaturesForm
        v-model:type="form.type"
        v-model:material="form.material"
        v-model:orientation="form.orientation"
        v-model:wave-protection="form.waveProtection"
        v-model:natural-shade="form.naturalShade"
      />
      <!-- ESPECIFICACIONES TÉCNICAS -->
      <SpecsForm
        v-model:length="form.specs.length"
        v-model:beam="form.specs.beam"
        v-model:draft="form.specs.draft"
        v-model:weight="form.specs.weight"
      />

      <!-- PRECIOS -->
      <PricingForm
        v-model:daily="form.daily"
        v-model:weekly="form.weekly"
        v-model:monthly="form.monthly"
        v-model:yearly="form.yearly"
        v-model:deposit="form.deposit"
      />
      <!-- SERVICIOS INCLUIDOS -->
      <ServicesForm v-model:services="form.services" />

      <!-- REGLAS -->
      <RulesForm
        v-model:insurance="form.rules.insurance"
        v-model:quiet-hours="form.rules.quietHours"
        v-model:pets-allowed="form.rules.petsAllowed"
        v-model:barbecues="form.rules.barbecues"
      />

      <!-- UBICACIÓN -->
      <LocationForm
        v-model:latitude="form.location.latitude"
        v-model:longitude="form.location.longitude"
        v-model:address="form.location.address"
        v-model:dock-number="form.location.dockNumber"
      />

      <!-- DISPONIBILIDAD -->
      <AvailabilityForm
        v-model:min-days="form.availability.minDays"
        v-model:max-days="form.availability.maxDays"
      />

      <!-- TIPO DE EMBARCACIÓN -->
      <BoatTypesForm v-model:boat-types="form.boatTypes" />

      <!-- CONDICIONES DEL ENTORNO -->
      <EnvironmentForm v-model:environment="form.environment" />

      <!-- SERVICIOS ADICIONALES -->
      <AdditionalServicesForm v-model:additional-services="form.additionalServices" />

      <!-- DOCUMENTACIÓN REQUERIDA -->
      <RequiredDocsForm v-model:required-docs="form.requiredDocs" />

      <!-- POLÍTICA DE CANCELACIÓN -->
      <CancellationPolicyForm v-model:cancellation-policy="form.cancellationPolicy" />

      <!-- BOTÓN DE ENVÍO -->
      <div class="flex justify-center mt-8">
        <button
          type="submit"
          class="w-full max-w-[480px] h-10 md:h-12 px-4 md:px-5 text-[#121416] text-base md:text-lg font-bold truncate bg-[#dce7f3] hover:bg-[#c8d8eb] rounded-full transition-colors duration-200"
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
