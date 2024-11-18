import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useToast } from 'vue-toast-notification'
import VueChartkick from 'vue-chartkick'

import App from './App.vue'
import router from './router'
import 'vue-toast-notification/dist/theme-sugar.css'
import 'chartkick/chart.js'

const $toast = useToast({
  position: 'top',
  timeout: 2500,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: 'button',
  icon: true,
  rtl: false
})

const app = createApp(App)
app.provide('toast', $toast)
app.use(VueChartkick)
app.use(createPinia())
app.use(router)

app.mount('#app')
