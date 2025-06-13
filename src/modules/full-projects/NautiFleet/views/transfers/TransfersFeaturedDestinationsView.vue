<template>
  <section class="max-w-[1366px] mx-auto my-10 px-4">
    <div class="flex flex-col gap-10 py-10">
      <div class="flex flex-col gap-4 max-w-[800px]">
        <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">Destinos Destacados</h2>
        <p class="text-base md:text-lg font-normal text-[#121416]">
          Explora los mejores destinos para tu próxima aventura con traslados en barco.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <!-- Destino 1 -->
        <div class="flex flex-col gap-4 rounded-lg border border-[#dde0e3] p-4">
          <div
            class="w-full bg-center bg-no-repeat bg-cover aspect-video rounded-xl"
            style="
              background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTfqERn7jHOX8VbbR8NFsGm1SJbGSTQTfW_mK_tNlKsd_jd1xSVN-1_Q7bdoZnOeMYdT92ue1tbSx3YH9ESA9M_N3-dNxNn1ZpZMUaJcj1lDgKIhpVzRlb15pBw5FBZ5QMi4EjJCKDiGrHWcPOxcGyoE6BugzrUs0VjDCMPlDKEx6fLHYFtBFWaAqq1pfxxrcJImOv0Hq3Sx1K6nH7up7SRZcZtTFISExwEqZw_bOWUfuEr6YyNdhMygxbnbOHJdu8nq5JYo2zhWc');
            "
          ></div>
          <div class="flex flex-col gap-1">
            <h3 class="text-xl md:text-2xl font-bold text-[#121416]">Ciudad Costera</h3>
            <p class="text-base md:text-lg font-normal text-[#6a7581]">
              Explora la encantadora ciudad costera con su puerto pintoresco y vistas
              impresionantes.
            </p>
          </div>
        </div>

        <!-- Destino 2 -->
        <div class="flex flex-col gap-4 rounded-lg border border-[#dde0e3] p-4">
          <div
            class="w-full bg-center bg-no-repeat bg-cover aspect-video rounded-xl"
            style="
              background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80');
            "
          ></div>
          <div class="flex flex-col gap-1">
            <h3 class="text-xl md:text-2xl font-bold text-[#121416]">Isla Tropical</h3>
            <p class="text-base md:text-lg font-normal text-[#6a7581]">
              Escápate a un paraíso tropical con playas vírgenes y aguas cristalinas.
            </p>
          </div>
        </div>

        <!-- Destino 3 -->
        <div class="flex flex-col gap-4 rounded-lg border border-[#dde0e3] p-4">
          <div
            class="w-full bg-center bg-no-repeat bg-cover aspect-video rounded-xl"
            style="
              background-image: url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80');
            "
          ></div>
          <div class="flex flex-col gap-1">
            <h3 class="text-xl md:text-2xl font-bold text-[#121416]">Pueblo Costero</h3>
            <p class="text-base md:text-lg font-normal text-[#6a7581]">
              Descubre el encanto único de un pueblo costero con casas coloridas y rica cultura.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
