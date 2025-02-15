<script setup>
import { RouterView } from 'vue-router'
import MainNavegation from './views/MainNavegationView.vue'
import FooterView from './views/FooterView.vue'
</script>

<template>
  <div class="app-container">
    <MainNavegation />
    <div class="content-container">
      <RouterView />
    </div>
    <FooterView />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-container {
  flex: 1;
}

footer {
  width: 100%;
}

.animate-charcter {
  text-transform: uppercase;
  background-image: linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%);
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 6rem;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
</style>
