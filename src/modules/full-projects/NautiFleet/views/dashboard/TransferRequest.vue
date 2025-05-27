<template>
  <div class="seller-upgrade-page">
    <h2>¡Conviértete en vendedor!</h2>
    <p>Para publicar anuncios en NautiFleet, necesitas una cuenta de vendedor verificada.</p>

    <div class="benefits">
      <h3>Ventajas de ser vendedor:</h3>
      <ul>
        <li>✔ Publicación ilimitada de embarcaciones</li>
        <li>✔ Dashboard de gestión de anuncios</li>
        <li>✔ Soporte prioritario 365 días/año</li>
        <li>✔ Sin comisiones por venta</li>
      </ul>
    </div>

    <div class="contact-form">
      <h3>Contáctanos para habilitar tu cuenta</h3>
      <form @submit.prevent="submitRequest">
        <input v-model="form.name" placeholder="Nombre completo" required />
        <input v-model="form.phone" placeholder="Teléfono" type="tel" required />
        <input v-model="form.email" placeholder="Email" type="email" required />
        <textarea
          v-model="form.message"
          placeholder="Cuéntanos sobre las embarcaciones que quieres vender..."
        ></textarea>
        <button type="submit">Enviar solicitud</button>
      </form>
    </div>

    <p class="small-text">
      Nos pondremos en contacto contigo en menos de 24h para verificar tu perfil.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const form = ref({
  name: userStore.user?.name || '',
  email: userStore.user?.email || '',
  phone: '',
  message: ''
})

const submitRequest = async () => {
  // Lógica para enviar la solicitud a tu backend
  console.log(form.value)
  // Mostrar confirmación
}
</script>
