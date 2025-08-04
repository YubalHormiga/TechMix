<script setup>
import { computed } from 'vue'
import { SERVICES, SPECS } from '../../../constants/dictionaries'

const props = defineProps({
  mooring: {
    type: Object,
    required: true
  }
})

const displayedServices = computed(() => {
  const servicesObject = props.mooring.services || {}

  const activeServices = Object.keys(servicesObject).filter((key) => servicesObject[key])

  return Object.entries(SERVICES)
    .filter(([key]) => activeServices.includes(key))
    .map(([key, service]) => ({
      key,
      ...service
    }))
})
</script>

<template>
  <div class="max-w-[769px] mx-auto my-10 px-4">
    <div class="flex flex-col gap-10 py-10">
      <div
        class="rounded-lg border border-[#dde0e3] p-4 hover:shadow-md transition-shadow duration-200"
      >
        <div class="flex flex-col gap-6 lg:flex-row">
          <div class="flex flex-col justify-between flex-1">
            <div>
              <h3 class="text-xl md:text-2xl font-bold text-[#121416]">
                {{ mooring.title }}
              </h3>
              <p class="text-base md:text-lg font-normal text-[#6a7581] mb-2">
                {{ mooring.description }}
              </p>

              <div class="flex items-center gap-3 text-sm text-[#6a7581] mb-3">
                <span class="flex items-center gap-1">
                  <img :src="SPECS.length.icon" class="w-6 h-6" :alt="SPECS.length.name" />
                  Longitud máxima {{ mooring.specs.length }} m
                </span>
                <span class="flex items-center gap-1">
                  <img :src="SPECS.draft.icon" class="w-6 h-6" :alt="SPECS.draft.name" />
                  Calado máximo {{ mooring.specs.draft }} m
                </span>
              </div>

              <!-- Servicios -->
              <div v-if="displayedServices.length" class="flex flex-wrap gap-2 mt-3 text-[#121416]">
                <div
                  v-for="service in displayedServices"
                  :key="service.key"
                  class="flex items-center gap-2"
                >
                  <img :src="service.icon" class="w-6 h-6" :alt="service.name" />
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between mt-4">
              <div>
                <p class="text-[#6a7581] text-sm font-normal">From</p>
                <p class="text-xl font-bold text-[#121416]">
                  {{ mooring.price }}
                </p>
              </div>
              <div class="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#FFD700"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M234.5,114.38l-45.1,39.36 13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15 23.21-55.36a15.95,15.95,0,0,1,29.44,0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                  />
                </svg>
                <span class="text-[#121416] text-sm font-medium">4.8</span>
                <span class="text-[#6a7581] text-sm">(24)</span>
              </div>
            </div>
          </div>

          <div
            class="flex-shrink-0 w-full h-[200px] lg:w-[340px] lg:h-auto rounded-lg bg-center bg-cover aspect-video"
            style="
              background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGUltUN0cBWTkLVAxzRKybN5_mhXoMZZdxq-edo0kCXB0GS5Iu_kk7toUsDN1JtmXyvEGG3GuxwOuPKkJqs04auyJnJ3AEDpCRooepGmHauEVDFjDKYXoCmF8NXOu239q27jfbvm6t726KYN0enSJe_YpYt3of-RsxpCpi7EcXJeSjFr_XpINnjcD4PBZpUQJhyWmsMws8VBmBr7Q0Sx86OOW1fW2YVqlMIAVpsQ8J5mMQvVwvO0EFqFd8we_LuC1LwKdn9n5a5iI');
            "
          ></div>
        </div>

        <router-link
          :to="{ name: 'mooring-detail', params: { id: mooring.id } }"
          class="h-10 md:h-12 px-4 mt-5 md:px-5 rounded-sm text-sm md:text-base flex items-center justify-center bg-[#dce7f3] hover:bg-[#c8d8eb] transition-colors duration-200 font-bold"
        >
          Ver Detalles
        </router-link>
      </div>
    </div>
  </div>
</template>
