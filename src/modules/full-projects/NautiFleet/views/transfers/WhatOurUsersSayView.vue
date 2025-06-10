<template>
  <section class="max-w-[1366px] mx-auto my-10 px-4">
    <div class="flex flex-col gap-10 py-10">
      <div class="flex flex-col gap-4 max-w-[800px]">
        <h2 class="text-3xl md:text-4xl font-bold text-[#121416]">
          Lo que dicen nuestros usuarios
        </h2>
        <p class="text-base md:text-lg font-normal text-[#121416]">
          Lee algunos comentarios de nuestros clientes satisfechos.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-[1200px]">
        <!-- Testimonio 1 -->
        <div class="flex flex-col gap-4 rounded-lg border border-[#dde0e3] p-4">
          <div class="flex items-center gap-4">
            <div
              class="w-12 h-12 bg-center bg-no-repeat bg-cover rounded-full"
              style="background-image: url('https://randomuser.me/api/portraits/women/68.jpg')"
            ></div>
            <div>
              <h3 class="text-xl md:text-2xl font-bold text-[#121416]">María López</h3>
              <p class="text-base md:text-lg font-normal text-[#6a7581]">12 de mayo de 2024</p>
            </div>
          </div>
          <div class="flex gap-1 text-yellow-400">
            <!-- 5 estrellas -->
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.455a1 1 0 00-.364 1.118l1.287 3.963c.3.922-.755 1.688-1.54 1.118l-3.388-2.455a1 1 0 00-1.175 0l-3.388 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.046 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.285-3.963z"
              />
            </svg>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.455a1 1 0 00-.364 1.118l1.287 3.963c.3.922-.755 1.688-1.54 1.118l-3.388-2.455a1 1 0 00-1.175 0l-3.388 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.046 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.285-3.963z"
              />
            </svg>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.455a1 1 0 00-.364 1.118l1.287 3.963c.3.922-.755 1.688-1.54 1.118l-3.388-2.455a1 1 0 00-1.175 0l-3.388 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.046 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.285-3.963z"
              />
            </svg>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.455a1 1 0 00-.364 1.118l1.287 3.963c.3.922-.755 1.688-1.54 1.118l-3.388-2.455a1 1 0 00-1.175 0l-3.388 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.046 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.285-3.963z"
              />
            </svg>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.455a1 1 0 00-.364 1.118l1.287 3.963c.3.922-.755 1.688-1.54 1.118l-3.388-2.455a1 1 0 00-1.175 0l-3.388 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.046 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.285-3.963z"
              />
            </svg>
          </div>
          <p class="text-base md:text-lg font-normal text-[#121416]">
            El servicio fue impecable y el equipo siempre estuvo atento a nuestras necesidades.
          </p>
        </div>

        <!-- Testimonio 2 -->
        <div class="flex flex-col gap-4 rounded-lg border border-[#dde0e3] p-4">
          <div class="flex items-center gap-4">
            <div
              class="w-12 h-12 bg-center bg-no-repeat bg-cover rounded-full"
              style="background-image: url('https://randomuser.me/api/portraits/men/45.jpg')"
            ></div>
            <div>
              <h3 class="text-xl md:text-2xl font-bold text-[#121416]">Carlos Méndez</h3>
              <p class="text-base md:text-lg font-normal text-[#6a7581]">23 de abril de 2024</p>
            </div>
          </div>
          <div class="flex gap-1 text-yellow-400">
            <!-- 4 estrellas -->
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.455a1 1 0 00-.364 1.118l1.287 3.963c.3.922-.755 1.688-1.54 1.118l-3.388-2.455a1 1 0 00-1.175 0l-3.388 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.046 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.285-3.963z"
              />
            </svg>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.455a1 1 0 00-.364 1.118l1.287 3.963c.3.922-.755 1.688-1.54 1.118l-3.388-2.455a1 1 0 00-1.175 0l-3.388 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.046 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.285-3.963z"
              />
            </svg>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.455a1 1 0 00-.364 1.118l1.287 3.963c.3.922-.755 1.688-1.54 1.118l-3.388-2.455a1 1 0 00-1.175 0l-3.388 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.046 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.285-3.963z"
              />
            </svg>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.455a1 1 0 00-.364 1.118l1.287 3.963c.3.922-.755 1.688-1.54 1.118l-3.388-2.455a1 1 0 00-1.175 0l-3.388 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.046 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.285-3.963z"
              />
            </svg>
            <svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.455a1 1 0 00-.364 1.118l1.287 3.963c.3.922-.755 1.688-1.54 1.118l-3.388-2.455a1 1 0 00-1.175 0l-3.388 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.046 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.285-3.963z"
              />
            </svg>
          </div>
          <p class="text-base md:text-lg font-normal text-[#121416]">
            Muy buen producto, aunque creo que podría mejorar la rapidez de entrega.
          </p>
        </div>

        <!-- Testimonio 3 -->
        <div class="flex flex-col gap-4 rounded-lg border border-[#dde0e3] p-4">
          <div class="flex items-center gap-4">
            <div
              class="w-12 h-12 bg-center bg-no-repeat bg-cover rounded-full"
              style="background-image: url('https://randomuser.me/api/portraits/women/21.jpg')"
            ></div>
            <div>
              <h3 class="text-xl md:text-2xl font-bold text-[#121416]">Laura Fernández</h3>
              <p class="text-base md:text-lg font-normal text-[#6a7581]">30 de marzo de 2024</p>
            </div>
          </div>
          <div class="flex gap-1 text-yellow-400">
            <!-- 5 estrellas -->
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.455a1 1 0 00-.364 1.118l1.287 3.963c.3.922-.755 1.688-1.54 1.118l-3.388-2.455a1 1 0 00-1.175 0l-3.388 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.046 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.285-3.963z"
              />
            </svg>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.455a1 1 0 00-.364 1.118l1.287 3.963c.3.922-.755 1.688-1.54 1.118l-3.388-2.455a1 1 0 00-1.175 0l-3.388 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.046 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.285-3.963z"
              />
            </svg>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.455a1 1 0 00-.364 1.118l1.287 3.963c.3.922-.755 1.688-1.54 1.118l-3.388-2.455a1 1 0 00-1.175 0l-3.388 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.046 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.285-3.963z"
              />
            </svg>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.455a1 1 0 00-.364 1.118l1.287 3.963c.3.922-.755 1.688-1.54 1.118l-3.388-2.455a1 1 0 00-1.175 0l-3.388 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.046 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.285-3.963z"
              />
            </svg>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.455a1 1 0 00-.364 1.118l1.287 3.963c.3.922-.755 1.688-1.54 1.118l-3.388-2.455a1 1 0 00-1.175 0l-3.388 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.046 9.39c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.285-3.963z"
              />
            </svg>
          </div>
          <p class="text-base md:text-lg font-normal text-[#121416]">
            No puedo estar más feliz con los resultados. ¡Recomiendo esta empresa al 100%!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
