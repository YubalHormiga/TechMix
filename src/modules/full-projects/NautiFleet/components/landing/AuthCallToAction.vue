<script setup>
import { RouterLink } from 'vue-router'

RouterLink
</script>

<template>
  <section class="py-16 bg-[#f5f1eb]">
    <div class="max-w-4xl px-6 mx-auto text-center">
      <h2 class="mb-4 text-2xl font-bold sm:text-3xl text-[#0c2831]">
        ¿Tienes cuenta en NautiFleet?
      </h2>
      <p class="mb-8 text-[#1e3a48]/90">
        Inicia sesión o crea una cuenta para gestionar tus embarcaciones...
      </p>
      <div class="flex flex-col justify-center gap-4 sm:flex-row">
        <RouterLink
          :to="{ name: 'login' }"
          class="px-6 py-3 font-semibold text-white transition bg-[#a67c52] hover:bg-[#8c6843] rounded-xl"
        >
          Iniciar sesión
        </RouterLink>
        <RouterLink
          :to="{ name: 'register' }"
          class="px-6 py-3 font-semibold text-[#a67c52] transition bg-white border border-[#a67c52] hover:bg-[#ebe7e1] rounded-xl"
        >
          Crear cuenta
        </RouterLink>
      </div>
    </div>
  </section>
</template>
