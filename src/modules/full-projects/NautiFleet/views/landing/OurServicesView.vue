<template>
  <section class="max-w-[1366px] mx-auto my-10 px-4">
    <div class="flex flex-col gap-10 py-10">
      <div class="flex flex-col gap-4 max-w-[800px]">
        <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Nuestros Servicios</h2>
        <p class="text-base md:text-lg font-normal text-[#121416]">
          NautiFleet ofrece una plataforma integral para todas tus necesidades náuticas.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-3 md:grid-cols-3">
        <!-- Servicio 1: Traslados -->
        <div class="flex flex-col gap-3 rounded-lg border border-[#dde0e3] p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
            class="text-[#121416]"
          >
            <path
              d="M221.06,110.63,208,106.27V56a16,16,0,0,0-16-16H136V24a8,8,0,0,0-16,0V40H64A16,16,0,0,0,48,56v50.27l-13.06,4.36A16,16,0,0,0,24,125.82V160.1a7.73,7.73,0,0,0,.31,2.19c15.72,55.09,86.12,74.06,100.07,77.3a16.19,16.19,0,0,0,7.24,0c13.95-3.24,84.35-22.21,100.07-77.3a7.73,7.73,0,0,0,.31-2.19V125.82A16,16,0,0,0,221.06,110.63ZM64,56H192v44.93L130.53,80.41a8,8,0,0,0-5.06,0L64,100.93ZM216,158.94c-5.78,19-20.55,35.17-43.95,48.12A181.7,181.7,0,0,1,128,224a181.7,181.7,0,0,1-44-16.94C60.56,194.11,45.78,177.93,40,158.94V125.81l80-26.7V168a8,8,0,0,0,16,0V99.11l80,26.71Z"
            />
          </svg>
          <div class="flex flex-col gap-1">
            <h3 class="text-xl md:text-2xl font-bold text-[#121416]">Traslados en Barco</h3>
            <p class="text-base md:text-lg font-normal text-[#6a7581]">
              Encuentra transportistas confiables para mover tu barco de forma segura y eficiente.
            </p>
          </div>
        </div>

        <!-- Servicio 2: Amarres -->
        <div class="flex flex-col gap-3 rounded-lg border border-[#dde0e3] p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
            class="text-[#121416]"
          >
            <path
              d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"
            />
          </svg>
          <div class="flex flex-col gap-1">
            <h3 class="text-xl md:text-2xl font-bold text-[#121416]">Amarres</h3>
            <p class="text-base md:text-lg font-normal text-[#6a7581]">
              Descubre y reserva amarres en ubicaciones privilegiadas, adaptados a tu embarcación.
            </p>
          </div>
        </div>

        <!-- Servicio 3: Red Confiable -->
        <div class="flex flex-col gap-3 rounded-lg border border-[#dde0e3] p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
            class="text-[#121416]"
          >
            <path
              d="M119.76,217.94A8,8,0,0,1,112,224a8.13,8.13,0,0,1-2-.24l-32-8a8,8,0,0,1-2.5-1.11l-24-16a8,8,0,1,1,8.88-13.31l22.84,15.23,30.66,7.67A8,8,0,0,1,119.76,217.94Zm132.69-96.46a15.89,15.89,0,0,1-8,9.25l-23.68,11.84-55.08,55.09a8,8,0,0,1-7.6,2.1l-64-16a8.06,8.06,0,0,1-2.71-1.25L35.86,142.87,11.58,130.73a16,16,0,0,1-7.16-21.46L29.27,59.58h0a16,16,0,0,1,21.46-7.16l22.06,11,53-15.14a8,8,0,0,1,4.4,0l53,15.14,22.06-11a16,16,0,0,1,21.46,7.16l24.85,49.69A15.9,15.9,0,0,1,252.45,121.48Zm-46.18,12.94L179.06,80H147.24L104,122c12.66,8.09,32.51,10.32,50.32-7.63a8,8,0,0,1,10.68-.61l34.41,27.57Zm-187.54-18,17.69,8.85L61.27,75.58,43.58,66.73ZM188,152.66l-27.71-22.19c-19.54,16-44.35,18.11-64.91,5a16,16,0,0,1-2.72-24.82.6.6,0,0,1,.08-.08L137.6,67.06,128,64.32,77.58,78.73,50.21,133.46l49.2,35.15,58.14,14.53Zm49.24-36.24L212.42,66.73l-17.69,8.85,24.85,49.69Z"
            />
          </svg>
          <div class="flex flex-col gap-1">
            <h3 class="text-xl md:text-2xl font-bold text-[#121416]">Red Confiable</h3>
            <p class="text-base md:text-lg font-normal text-[#6a7581]">
              Conéctate con una red de transportistas y proveedores de amarres verificados para tu
              tranquilidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
