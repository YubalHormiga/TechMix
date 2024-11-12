<template>
  <form @submit.prevent="submitForm" class="product-form">
    <!-- ID único (autogenerado) -->
    <div class="form-group">
      <label for="id">ID:</label>
      <input type="text" readonly class="input-field" />
    </div>

    <!-- Nombre del producto -->
    <div class="form-group">
      <label for="nombre">Nombre del producto:</label>
      <input type="text" id="nombre" v-model="product.nombre" required class="input-field" />
    </div>

    <!-- Cantidad disponible -->
    <div class="form-group">
      <label for="cantidad">Cantidad disponible:</label>
      <input
        type="number"
        id="cantidad"
        v-model="product.cantidad"
        min="0"
        required
        class="input-field"
      />
    </div>

    <!-- Nombre del proveedor -->
    <div class="form-group">
      <label for="proveedor">Proveedor:</label>
      <input type="text" id="proveedor" v-model="product.proveedor" required class="input-field" />
    </div>

    <!-- Precio del producto -->
    <div class="form-group">
      <label for="precio">Precio:</label>
      <input
        type="number"
        id="precio"
        v-model="product.precio"
        min="0"
        step="0.01"
        required
        class="input-field"
      />
    </div>

    <!-- Fecha de ingreso -->
    <div class="form-group">
      <label for="fechaIngreso">Fecha de ingreso:</label>
      <input
        type="date"
        id="fechaIngreso"
        v-model="product.fechaIngreso"
        required
        class="input-field"
      />
    </div>

    <!-- Estado (Activo/Inactivo) -->
    <div class="form-group">
      <label for="estado">Estado:</label>
      <select id="estado" v-model="product.estado" required class="input-field">
        <option value="Activo">Activo</option>
        <option value="Inactivo">Inactivo</option>
      </select>
    </div>

    <!-- Categoría -->
    <div class="form-group">
      <label for="categoria">Categoría:</label>
      <select id="categoria" v-model="product.categoria" class="input-field">
        <option value="">Seleccione una categoría</option>
        <option value="Electrónicos">Electrónicos</option>
        <option value="Alimentos">Alimentos</option>
        <option value="Ropa">Ropa</option>
        <option value="Muebles">Muebles</option>
        <!-- Añadir más categorías según sea necesario -->
      </select>
    </div>

    <!-- Botón para enviar el formulario -->
    <button type="submit" class="submit-button">Guardar Producto</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Definición inicial del producto
const product = ref({
  nombre: '',
  cantidad: 0,
  proveedor: '',
  precio: 0.0,
  fechaIngreso: '',
  estado: 'Activo',
  categoria: ''
})

// Método para manejar el envío del formulario
const submitForm = () => {
  console.log('Producto guardado:', product.value)
  // Aquí puedes añadir lógica para enviar los datos a una API o manejarlos como sea necesario.
  resetForm()
}

// Método para limpiar el formulario después de guardar el producto
const resetForm = () => {
  product.value = {
    nombre: '',
    cantidad: 0,
    proveedor: '',
    precio: 0.0,
    fechaIngreso: '',
    estado: 'Activo',
    categoria: ''
  }
}
</script>

<style scoped>
.product-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 1rem;
}

.label {
  font-weight: bold;
}

.input-field {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  padding: 0.5rem 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
