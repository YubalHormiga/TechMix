<template>
  <section class="max-w-[1366px] mx-auto my-10 px-4">
    <div class="flex flex-col gap-10 py-10">
      <div class="flex flex-col gap-4 max-w-[800px]">
        <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Cómo Funciona</h2>
        <p class="text-base md:text-lg font-normal text-[#121416]">
          Te ayudamos a mover tu embarcación por mar de forma segura, eficiente y personalizada.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-3 md:grid-cols-3">
        <!-- Paso 1 -->
        <div class="flex flex-col gap-3 rounded-lg border border-[#dde0e3] p-4">
          <!-- Icono: formulario/presupuesto -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-file-text-icon lucide-file-text"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10 9H8" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
          </svg>
          <div class="flex flex-col gap-1">
            <h3 class="text-xl md:text-2xl font-bold text-[#121416]">Solicita Presupuesto</h3>
            <p class="text-base md:text-lg font-normal text-[#6a7581]">
              Cuéntanos los detalles de tu traslado: origen, destino, fechas y tipo de embarcación.
            </p>
          </div>
        </div>

        <!-- Paso 2 -->
        <div class="flex flex-col gap-3 rounded-lg border border-[#dde0e3] p-4">
          <!-- Icono: mapa o timón -->
          <!-- Compass Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-messages-square-icon lucide-messages-square"
          >
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" />
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
          </svg>

          <div class="flex flex-col gap-1">
            <h3 class="text-xl md:text-2xl font-bold text-[#121416]">Coordinamos el Traslado</h3>
            <p class="text-base md:text-lg font-normal text-[#6a7581]">
              Nuestro equipo conecta tu solicitud con capitanes o empresas especializadas en rutas
              marítimas.
            </p>
          </div>
        </div>

        <!-- Paso 3 -->
        <div class="flex flex-col gap-3 rounded-lg border border-[#dde0e3] p-4">
          <!-- Icono: barco en movimiento -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-ship-icon lucide-ship"
          >
            <path d="M12 10.189V14" />
            <path d="M12 2v3" />
            <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
            <path
              d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"
            />
            <path
              d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
            />
          </svg>
          <div class="flex flex-col gap-1">
            <h3 class="text-xl md:text-2xl font-bold text-[#121416]">Navega con Confianza</h3>
            <p class="text-base md:text-lg font-normal text-[#6a7581]">
              Tu embarcación se traslada por mar de forma segura, puntual y con seguimiento
              continuo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
