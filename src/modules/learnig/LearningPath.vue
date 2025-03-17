<script setup>
import { ref } from 'vue'
import { db } from './data/modules.js'

const modules = ref(db)
</script>

<template>
  <div class="p-8 mx-auto max-w-screen-2xl">
    <h1 class="mb-6 text-3xl font-bold text-center">
      Ruta de Aprendizaje <span class="text-red-500">"En construcción"</span>
    </h1>
    <p class="mb-6 text-gray-700">
      Esta Ruta de Aprendizaje está diseñada para guiarte paso a paso en el desarrollo web, desde
      los conceptos más básicos hasta la creación de aplicaciones avanzadas con Vue.js. Su objetivo
      es proporcionar una estructura clara y progresiva para que cualquier persona interesada en
      aprender Vue pueda hacerlo de manera eficiente y organizada. Antes de sumergirse en Vue.js, es
      crucial comprender ciertos fundamentos del desarrollo web, ya que estos conocimientos te
      permitirán aprovechar al máximo el framework y sus herramientas asociadas. La ruta se divide
      en módulos progresivos, cada uno centrado en aspectos clave del desarrollo web. A
      continuación, se detallan cada uno de ellos y su propósito:
    </p>

    <div v-for="(module, index) in modules" :key="index" class="mb-8 border-b-[#e2e8f0] p-7">
      <h2 class="mb-4 font-semibold">{{ module.title }}</h2>
      <div
        v-for="(topic, i) in module.topics"
        :key="i"
        class="p-6 mb-6 rounded-lg topic bg-gray-50"
      >
        <h3 class="mb-2 font-semibold">{{ topic.name }}</h3>

        <p class="mb-2 text-gray-700">{{ topic.description }}</p>

        <p class="mb-4 text-gray-700"><strong>Detalles:</strong> {{ topic.details }}</p>

        <div class="mb-6">
          <h4 class="mb-2 font-semibold text-[#ff1361]">¿Por qué es importante?</h4>
          <ul class="pl-5 list-disc">
            <li v-for="(item, j) in topic.importance" :key="j" class="text-gray-700">
              {{ item }}
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-2 font-semibold text-[#ff1361]">Recursos:</h4>
          <ul class="">
            <li v-for="(resource, j) in topic.resources" :key="j" class="mb-2">
              <a
                :href="resource.url"
                target="_blank"
                class="text-[#44107a] hover:text-[#a02c53] font-semibold"
              >
                {{ resource.type }}: {{ resource.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
