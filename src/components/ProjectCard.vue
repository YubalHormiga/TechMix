<script setup>
import { ref, onMounted } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  fullProject: {
    type: Object,
    required: true
  },
  imageBasePath: {
    type: String,
    required: true
  }
})

const isVisible = ref(false)

function getImageUrl(imageName) {
  return `${props.imageBasePath}/${imageName}`
}

onMounted(() => {
  isVisible.value = true
})
</script>

<template>
  <section>
    <transition name="fade-in">
      <div v-if="isVisible" class="card">
        <div
          class="cover item"
          :style="{ backgroundImage: `url(${getImageUrl(props.fullProject.image)})` }"
        >
          <h1>{{ props.fullProject.name }}</h1>
          <span class="price">Project {{ props.fullProject.id }}</span>
          <div class="card-back">
            <p v-html="props.fullProject.description"></p>
            <RouterLink
              :to="{ name: props.fullProject.routeName, params: { name: props.fullProject.name } }"
              class="btn-link"
            >
              Ver Aplicación
            </RouterLink>
            <a :href="props.fullProject.github" target="_blank" class="mt-1 text-lg btn-link">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.fade-in-enter-active,
.fade-in-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
section {
  width: 25rem;
  margin: 0 auto;
}

section .row {
  align-items: center;
  height: 100vh;
}

.card {
  position: relative;
  height: 400px;
  width: 100%;
  margin: 10px 0;
  transition: ease all 1.3s;
  perspective: 1200px;
}

.card:hover .cover {
  transform: rotateX(0deg) rotateY(-180deg);
}

.card:hover .cover:before {
  transform: translateZ(30px);
}

.card:hover .cover:after {
  background-color: black;
}

.card:hover .cover h1 {
  transform: translateZ(100px);
}

.card:hover .cover span {
  transform: translateZ(100px);
}

.card:hover .cover p {
  transform: translateZ(-60px) rotateY(-180deg);
}

.card:hover .cover .btn-link {
  transform: translateZ(-60px) rotateY(-180deg);
}

.cover {
  position: absolute;
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  transition: ease all 1.3s;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.cover:before {
  content: '';
  position: absolute;
  border: 5px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  z-index: 2;
  transition: ease all 1.3s;
  transform-style: preserve-3d;
  transform: translateZ(0px);
}

.cover:after {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 2;
  transition: ease all 1.3s;
  background: rgba(0, 0, 0, 0.4);
}

.cover h1 {
  font-weight: 600;
  position: absolute;
  bottom: 55px;
  left: 13%;
  color: white;
  transform-style: preserve-3d;
  transition: ease all 1.3s;
  z-index: 3;
  font-size: 2rem;
  transform: translateZ(0px);
}
.cover span {
  font-weight: 600;
  position: absolute;
  top: 55px;
  right: 60px;
  color: white;
  transform-style: preserve-3d;
  transition: ease all 1.3s;
  z-index: 3;
  font-size: 2em;
  transform: translateZ(0px);
}

.card-back {
  position: absolute;
  height: 100%;
  width: 100%;
  background: #0b0f08;
  transform-style: preserve-3d;
  transition: ease all 1.3s;
  transform: translateZ(-1px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: justify;
}
.card-back p {
  transform-style: preserve-3d;
  transition:
    ease transform 1.3s,
    ease background 0.5s;
  transform: translateZ(-1px) rotateY(-180deg);
  background: transparent;
  font-weight: 200;
  font-size: small;
  color: white;
  padding: 4px 8px;
  outline: none;
  text-decoration: none;
}

.btn-link {
  transform-style: preserve-3d;
  transition:
    ease transform 1.3s,
    ease background 0.5s;
  transform: translateZ(-1px) rotateY(-180deg);
  background: transparent;
  border: 1px solid white;
  font-weight: 200;
  font-size: small;
  color: white;
  padding: 4px 8px;
  outline: none;
  text-decoration: none;
  margin-top: 5px;
}

.btn-link:hover {
  background-color: rgb(255, 255, 255);
  color: #0b0f08;
}
</style>
