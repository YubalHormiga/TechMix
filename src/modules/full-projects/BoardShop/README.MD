# Proyecto BoardShop

## Descripción

BoardShop es una tienda en línea de skateboards construida con **Vue.js**. El proyecto permite a los usuarios explorar una variedad de tablas de skate, agregarlas a su carrito de compras y gestionar su compra en un flujo sencillo. El carrito se guarda en el almacenamiento local del navegador, permitiendo que los productos persistan incluso después de recargar la página. Además, incluye un carrusel de imágenes interactivo de los productos.

Ha sido desarrollado con el objetivo de afianzar conocimientos en Vue.js y mejorar la comprensión de conceptos básicos de desarrollo web.

### Funcionalidades principales:

- **Exploración de productos**: Los usuarios pueden ver los productos (skateboards) disponibles con detalles como nombre, precio y descripción.
- **Carrito de compras**: Los usuarios pueden agregar productos al carrito, incrementar o disminuir la cantidad de productos en el carrito y eliminar artículos.
- **Persistencia del carrito**: Los productos añadidos al carrito se guardan en el almacenamiento local del navegador, lo que permite mantener el estado incluso después de recargar la página.
- **Carrusel de imágenes**: Un carrusel interactivo de imágenes con autoplay y paginación, utilizando **Swiper.js**.

## Tecnologías utilizadas

Este proyecto está desarrollado con las siguientes tecnologías:

- **Vue.js**: Framework de JavaScript para construir interfaces de usuario interactivas.
- **Swiper.js**: Biblioteca para crear carruseles de imágenes interactivos.
- **CSS / Tailwind CSS**: Estilos para la presentación de la interfaz de usuario.
- **LocalStorage**: Para guardar el estado del carrito de compras en el navegador del usuario.

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/boardshop.git
   ```

2. **Instala las dependencias**:

   Asegúrate de tener **Node.js** y **npm** instalados. Si no los tienes, puedes descargarlos desde [nodejs.org](https://nodejs.org/).

   Una vez que tengas Node.js y npm instalados, ejecuta el siguiente comando en la raíz del proyecto para instalar las dependencias:

   ```bash
   npm install
   ```

3. **Ejecuta el proyecto**:

   Después de instalar las dependencias, ejecuta el siguiente comando para iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Esto iniciará el proyecto en `http://localhost:3000` o una URL similar.

## Uso

### **Carrito de Compras**:

- Los usuarios pueden hacer clic en el icono del carrito para ver los productos que han añadido.
- Pueden incrementar o disminuir la cantidad de cada producto.
- Pueden eliminar productos del carrito.
- El carrito se guarda en el almacenamiento local del navegador, lo que permite que los productos persistan incluso después de una recarga.

### **Explorar Productos**:

- Los usuarios pueden ver las tablas de skate, con su imagen, nombre, descripción y precio.
- Al hacer clic en "Agregar al carrito", el producto se añade al carrito de compras.

### **Carrusel**:

- Un conjunto de imágenes se muestran de forma atractiva en un carrusel que cambia automáticamente cada 4 segundos.
- Los usuarios pueden navegar manualmente a través de las imágenes si lo desean.

## **Dificultades encontradas**

Durante el desarrollo de este proyecto, se presentaron varios desafíos que enriquecieron mi aprendizaje. Aquí los más relevantes:

### **Gestión del carrito y persistencia**

- Configurar correctamente el almacenamiento local (`localStorage`) para garantizar que los productos en el carrito persistan después de recargar la página.
- Actualizar dinámicamente el estado del carrito al modificar cantidades o eliminar productos, asegurando la sincronización con la vista.

### **Carrusel de imágenes**

- Integrar la biblioteca **Swiper.js** para lograr un carrusel funcional y visualmente atractivo.
- Personalizar las opciones del carrusel, como la paginación, autoplay y navegación manual.

### **Optimización de componentes**

- Diseñar componentes reutilizables para los productos y el carrito, asegurando una estructura modular.
- Manejar las props y eventos entre componentes, especialmente para sincronizar el estado del carrito.

### **Flujo de datos entre componentes**

- Pasar datos y eventos correctamente entre componentes padres e hijos, una habilidad clave para cualquier desarrollador trabajando con **Vue.js**.

Estos desafíos reflejan mi proceso de aprendizaje como desarrollador web junior y mi enfoque para dominar conceptos fundamentales antes de avanzar hacia patrones y herramientas más complejas.

## Mejoras futuras

Algunas mejoras que podrían agregarse a este proyecto son:

- **Autenticación de usuarios**: Para permitir a los usuarios guardar su carrito de compras entre sesiones en diferentes dispositivos.
- **Pasarela de pago**: Integrar un sistema de pago como **Stripe** o **PayPal** para completar la compra de los productos.
- **Optimización para dispositivos móviles**: Asegurar que el sitio sea completamente responsive y se vea bien en dispositivos móviles.
- **Manejo de inventarios**: Implementar un sistema para actualizar el inventario de los productos en tiempo real.

## Contribuciones

Si deseas contribuir a este proyecto, ¡estoy abierto a tus sugerencias y cambios! Puedes hacer un fork de este repositorio, realizar los cambios que consideres necesarios y luego enviar un pull request.

## Contacto

Si tienes alguna pregunta sobre el proyecto o sobre mi experiencia como desarrollador, no dudes en contactarme:

- **Correo electrónico**: yubalhh@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/yubal-hormiga/
- **GitHub**: https://github.com/YubalHormiga
