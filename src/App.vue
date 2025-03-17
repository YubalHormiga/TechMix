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
</style>
