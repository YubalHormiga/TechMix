<script setup></script>

<template>
  <div class="max-w-6xl px-4 py-8 mx-auto md:py-12">
    <div class="mb-10 text-center">
      <h2 class="mb-4 text-3xl font-bold text-[#D6643B] md:text-4xl">¡Conviértete en vendedor!</h2>
      <p class="max-w-2xl mx-auto text-lg text-gray-600 md:text-xl">
        Para publicar anuncios en NautiFleet, necesitas una cuenta de vendedor verificada.
      </p>
    </div>

    <div class="flex flex-col gap-8 lg:flex-row">
      <!-- Beneficios -->
      <div class="p-6 shadow-sm lg:w-1/2 bg-blue-50 rounded-xl">
        <h3 class="mb-4 text-2xl font-semibold text-[#a67c52]">Ventajas de ser vendedor:</h3>
        <ul class="space-y-3">
          <li class="flex items-start">
            <svg
              class="flex-shrink-0 w-6 h-6 mt-1 mr-2 text-[#D6643B]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-gray-700">Publicación ilimitada de embarcaciones</span>
          </li>
          <li class="flex items-start">
            <svg
              class="flex-shrink-0 w-6 h-6 mt-1 mr-2 text-[#D6643B]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-gray-700">Dashboard de gestión de anuncios</span>
          </li>
          <li class="flex items-start">
            <svg
              class="flex-shrink-0 w-6 h-6 mt-1 mr-2 text-[#D6643B]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-gray-700">Soporte prioritario 365 días/año</span>
          </li>
          <li class="flex items-start">
            <svg
              class="flex-shrink-0 w-6 h-6 mt-1 mr-2 text-[#D6643B]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-gray-700">Sin comisiones por venta</span>
          </li>
        </ul>

        <div class="p-4 mt-8 bg-white border border-[#e8d9c5] rounded-lg">
          <h4 class="mb-2 font-medium text-[#a67c52]">¿Qué necesitas?</h4>
          <p class="text-sm text-gray-600">
            Solo necesitas ser un profesional del sector náutico o tener embarcaciones para vender.
            ¡El proceso de verificación es rápido y sencillo!
          </p>
        </div>
      </div>

      <!-- Formulario de contacto -->
      <div class="lg:w-1/2">
        <div class="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
          <h3 class="mb-6 text-2xl font-semibold text-[#0c2831]">
            Contáctanos para habilitar tu cuenta
          </h3>

          <form class="space-y-4">
            <div>
              <label for="fullname" class="block mb-1 text-sm font-medium text-gray-700"
                >Nombre completo</label
              >
              <input
                id="fullname"
                type="text"
                required
                class="w-full px-4 py-2 transition border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ej: Juan Pérez"
              />
            </div>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label for="phone" class="block mb-1 text-sm font-medium text-gray-700"
                  >Teléfono</label
                >
                <input
                  id="phone"
                  type="tel"
                  required
                  class="w-full px-4 py-2 transition border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+34 123 456 789"
                />
              </div>

              <div>
                <label for="email" class="block mb-1 text-sm font-medium text-gray-700"
                  >Email</label
                >
                <input
                  id="email"
                  type="email"
                  required
                  class="w-full px-4 py-2 transition border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label for="message" class="block mb-1 text-sm font-medium text-gray-700"
                >Cuéntanos sobre las embarcaciones</label
              >
              <textarea
                id="message"
                rows="4"
                class="w-full px-4 py-2 transition border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Modelos, años, condiciones, cantidades..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-[#30595B] hover:bg-[#63878B] text-white font-medium py-3 px-4 rounded-md transition duration-300 transform hover:scale-[1.01]"
            >
              Enviar solicitud
            </button>
          </form>
        </div>

        <p class="mt-4 text-sm text-center text-gray-500">
          Nos pondremos en contacto contigo en menos de 24h para verificar tu perfil.
        </p>
      </div>
    </div>
  </div>
</template>
