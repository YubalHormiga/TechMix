<template>
  <section class="max-w-[1366px] mx-auto my-10 px-4">
    <h2 class="text-3xl md:text-4xl font-bold md:font-black px-4 pb-3 pt-5 text-[#121416]">
      Mapa Interactivo
    </h2>

    <div class="flex flex-col h-full gap-10 px-4 py-10">
      <div
        class="relative min-h-[320px] bg-cover bg-center rounded-xl flex flex-col justify-between px-4 pb-4 pt-5 md:px-8 md:pb-6 md:pt-8"
        style="background-image: url('map_image_url')"
      >
        <!-- Barra de búsqueda -->
        <label class="w-full h-12 max-w-lg">
          <div class="flex h-full overflow-hidden bg-white rounded-xl">
            <div class="flex items-center justify-center px-4 text-[#6a7581]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Buscar ubicaciones"
              class="w-full px-4 text-base md:text-lg text-[#121416] placeholder-[#6a7581] focus:outline-none border-none"
            />
          </div>
        </label>

        <!-- Controles de mapa -->
        <div class="absolute flex flex-col items-center gap-3 right-4 bottom-4">
          <div class="flex flex-col gap-1">
            <button
              class="flex items-center justify-center w-10 h-10 bg-white rounded-t-full shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M216,128a8,8,0,0,1-8,8H136v72a8,8,0,0,1-16,0V136H48a8,8,0,0,1,0-16h72V48a8,8,0,0,1,16,0v72h72A8,8,0,0,1,216,128Z"
                />
              </svg>
            </button>
            <button
              class="flex items-center justify-center w-10 h-10 bg-white rounded-b-full shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M200,128a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H192A8,8,0,0,1,200,128Z" />
              </svg>
            </button>
          </div>
          <button
            class="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path
                d="M235.06,122.14,131.86,18.94a8,8,0,0,0-11.32,0L66.75,72.73A40,40,0,0,0,56,100v96a16,16,0,0,0,16,16h96a40,40,0,0,0,27.27-10.75l53.79-53.79A8,8,0,0,0,235.06,122.14Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
