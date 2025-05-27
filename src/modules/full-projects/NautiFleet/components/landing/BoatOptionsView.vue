<script setup>
import { ref } from 'vue'

const tab = ref('buy')
import InflatableBoat from '../../assets/images/inflatableBoat.webp'
// import Mooring from '../../assets/images/mooring.webp'
import Motorboat from '../../assets/images/motorboat.webp'
import Rowboat from '../../assets/images/rowboat.webp'
import Sailboat from '../../assets/images/sailboat.webp'
// import BoatKey from '../../assets/images/boatKey.webp'
const buyItems = [
  { label: 'Barcos a motor', icon: Motorboat },
  { label: 'Veleros', icon: Sailboat },
  { label: 'Neumáticas', icon: InflatableBoat },
  { label: 'Barcos pequeños', icon: Rowboat }
  // { label: 'Amarres', icon: Mooring }
]
</script>

<template>
  <section class="py-20">
    <div class="max-w-6xl px-6 mx-auto bg-white">
      <div class="border border-[#e8d9c5] rounded-xl p-2">
        <div class="flex mb-4">
          <button
            :class="[
              tab === 'buy' ? ' text-[#E7874E]' : 'text-[#628689]',
              'py-2 px-4 font-semibold'
            ]"
            @click="tab = 'buy'"
          >
            Buscar
          </button>
          <button
            :class="[
              tab === 'sell' ? ' text-[#E7874E]' : 'text-[#628689]',
              'py-2 px-4 font-semibold'
            ]"
            @click="tab = 'sell'"
          >
            Vender
          </button>
        </div>

        <div v-if="tab === 'buy'" class="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div
            v-for="(item, index) in buyItems"
            :key="index"
            class="flex flex-col items-center p-2 text-center cursor-pointer rounded-xl hover:bg-[#e8d9c5]"
          >
            <img :src="item.icon" alt="" class="mb-2 h-28" />
            <span class="font-medium text-[#30595B]">{{ item.label }}</span>
          </div>
        </div>

        <div
          v-if="tab === 'sell'"
          class="flex flex-col items-center justify-between p-6 mt-6 bg-white rounded-xl md:flex-row"
        >
          <div class="flex items-center space-x-4">
            <!-- <img :src="BoatKey" alt="Sell" class="h-16" /> -->
            <div>
              <h2 class="font-bold text-[#D6643B]">¡Vende tu barco ahora!</h2>
              <p class="text-gray-600">
                Anuncia tu barco en el mercado perfecto para España y Europa.
              </p>
              <ul class="pl-4 mt-2 text-gray-700 list-disc">
                <li>365 días de atención al cliente</li>
                <li>Sin comisión de venta</li>
              </ul>
            </div>
          </div>
          <div class="mt-4 md:mt-0">
            <RouterLink
              :to="{ name: 'seller-onboarding' }"
              class="cursor-pointer px-6 py-3 md:ml-10 font-semibold text-white bg-[#D6643B] hover:bg-[#E5884C] rounded-xl"
            >
              Crear un anuncio
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
