<template>
  <section class="max-w-[1366px] mx-auto my-10 px-4">
    <div class="flex flex-col gap-10 py-10">
      <div class="flex flex-col gap-4 max-w-[800px]">
        <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Cómo Funciona</h2>
        <p class="text-base md:text-lg font-normal text-[#121416]">
          Encuentra y reserva tu amarre en solo 3 sencillos pasos.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-3 md:grid-cols-3">
        <!-- Paso 1 -->
        <div class="flex flex-col gap-3 rounded-lg border border-[#dde0e3] p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path
              d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
            ></path>
          </svg>
          <div class="flex flex-col gap-1">
            <h3 class="text-xl md:text-2xl font-bold text-[#121416]">Busca Amarres</h3>
            <p class="text-base md:text-lg font-normal text-[#6a7581]">
              Utiliza nuestro buscador para encontrar amarres por ubicación, tamaño y servicios.
            </p>
          </div>
        </div>

        <!-- Paso 2 -->
        <div class="flex flex-col gap-3 rounded-lg border border-[#dde0e3] p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path
              d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"
            ></path>
          </svg>
          <div class="flex flex-col gap-1">
            <h3 class="text-xl md:text-2xl font-bold text-[#121416]">Selecciona Fechas</h3>
            <p class="text-base md:text-lg font-normal text-[#6a7581]">
              Elige tus fechas preferidas y consulta disponibilidad en tiempo real.
            </p>
          </div>
        </div>

        <!-- Paso 3 -->
        <div class="flex flex-col gap-3 rounded-lg border border-[#dde0e3] p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path
              d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"
            ></path>
          </svg>
          <div class="flex flex-col gap-1">
            <h3 class="text-xl md:text-2xl font-bold text-[#121416]">Confirma tu Reserva</h3>
            <p class="text-base md:text-lg font-normal text-[#6a7581]">
              Revisa los detalles y confirma tu reserva de forma rápida y segura.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
