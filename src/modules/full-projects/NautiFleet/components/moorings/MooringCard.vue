<script setup>
defineProps({
  mooring: {
    type: Object,
    required: true
  }
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
              <h3 class="text-xl md:text-2xl font-bold text-[#121416]">{{ mooring.name }}</h3>
              <p class="text-base md:text-lg font-normal text-[#6a7581] mb-2">
                Prime mooring in the heart of the harbor
              </p>

              <div class="flex items-center gap-3 text-sm text-[#6a7581] mb-3">
                <span class="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M237.08,87A172,172,0,0,0,18.92,87a8,8,0,0,0,10.16,12.37a156,156,0,0,1,197.84,0A8,8,0,0,0,237.08,87Z"
                    />
                  </svg>
                  Max 45ft
                </span>
                <span class="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M205,122.77a124,124,0,0,0-153.94,0A8,8,0,0,0,61,135.31a108,108,0,0,1,134.06,0,8,8,0,0,0,11.24-1.3A8,8,0,0,0,205,122.77Z"
                    />
                  </svg>
                  20ft depth
                </span>
              </div>

              <!-- Servicios -->
              <div class="flex flex-wrap gap-2 mt-3 text-[#121416]">
                <span title="Electricity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17Z"
                    />
                  </svg>
                </span>
                <span title="Water">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75Z"
                    />
                  </svg>
                </span>
                <span title="Wi-Fi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M140,204a12,12,0,1,1-12-12A12,12,0,0,1,140,204ZM237.08,87A172,172,0,0,0,18.92,87a8,8,0,0,0,10.16,12.37a156,156,0,0,1,197.84,0A8,8,0,0,0,237.08,87ZM205,122.77a124,124,0,0,0-153.94,0A8,8,0,0,0,61,135.31a108,108,0,0,1,134.06,0,8,8,0,0,0,11.24-1.3A8,8,0,0,0,205,122.77Zm-32.26,35.76a76.05,76.05,0,0,0-89.42,0,8,8,0,0,0,9.42,12.94,60,60,0,0,1,70.58,0,8,8,0,1,0,9.42-12.94Z"
                    />
                  </svg>
                </span>
                <span title="Security">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between mt-4">
              <div>
                <p class="text-[#6a7581] text-sm font-normal">From</p>
                <p class="text-xl font-bold text-[#121416]">{{ mooring.price }}</p>
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
