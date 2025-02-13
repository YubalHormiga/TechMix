# **CineScope**

¡Bienvenido a **CineScope**! Este proyecto es una aplicación web que permite explorar películas de manera intuitiva y organizada. Ha sido desarrollado con el objetivo de afianzar conocimientos en **Vue.js** y mejorar la comprensión de conceptos fundamentales en el desarrollo web.

---

## **Descripción del proyecto**

CineScope es una herramienta que permite:

- **Explorar películas**: Ver una lista de películas con su imagen, nombre, calificación y fecha de estreno.
- **Búsqueda de películas**: Buscar títulos específicos ingresando el nombre en la barra de búsqueda.
- **Filtrado por género e idioma**: Seleccionar películas según su género o idioma disponible.
- **Carrusel de imágenes**: Un carrusel interactivo con imágenes destacadas de películas populares.
- **Paginación dinámica**: Navegar fácilmente entre las páginas de resultados.

El proyecto prioriza el aprendizaje de los fundamentos de **Vue.js** y su ecosistema antes de avanzar hacia técnicas más complejas como el uso de **composables** o un store centralizado (por ejemplo, Vuex o Pinia).

### Funcionalidades principales:

- **Exploración de películas**: Los usuarios pueden ver una lista de películas con información detallada como título, calificación y fecha de estreno.
- **Búsqueda por título**: Permite a los usuarios buscar películas por su nombre.
- **Filtrado por género e idioma**: Los usuarios pueden filtrar las películas según el género y el idioma disponible.
- **Carrusel de imágenes**: Un carrusel interactivo que muestra imágenes destacadas de películas.
- **Paginación**: La lista de películas está paginada para una mejor navegación.

## Tecnologías utilizadas

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías:

- **Vue.js**: Framework de JavaScript para construir interfaces de usuario reactivas.
- **Tailwind CSS**: Framework de estilos para mejorar la apariencia y responsividad de la interfaz.
- **API de TMDb**: Se utiliza para obtener la información de las películas.

## Instalación

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/cinescope.git

   ```

2. **Instala las dependencias**:

   Asegúrate de tener **Node.js** y **npm** instalados. Si no los tienes, puedes descargarlos desde [nodejs.org](https://nodejs.org/).

   Una vez que tengas Node.js y npm instalados, ejecuta el siguiente comando en la raíz del proyecto para instalar las dependencias:

   ```bash
   npm install
   ```

3. **Ejecuta el proyecto**:

   Crea un archivo .env en la raíz del proyecto y agrega tu clave de API de TMDb:

   ```bash
   VITE_TMDB_API_KEY=TU_CLAVE_DE_API
   ```

   Esto iniciará el proyecto en `http://localhost:3000` o una URL similar.

4. **Ejecuta el proyecto**:

   Después de instalar las dependencias, ejecuta el siguiente comando para iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Esto iniciará el proyecto en `http://localhost:3000` o una URL similar.

## Uso

### Explorar películas:

- Los usuarios pueden ver una lista de películas con su imagen, nombre, calificación y fecha de estreno.
- Pueden filtrar películas por género o idioma.

### Búsqueda de películas:

- Se puede ingresar el título de una película en la barra de búsqueda para encontrarla rápidamente.

### Carrusel de imágenes:

- Un carrusel de imágenes de películas destacadas permite explorar visualmente los estrenos.

### Paginación:

- Las películas se muestran en páginas con un número limitado de resultados por página.

## Dificultades encontradas

### Consumo de la API de TMDb

- Se requirió manejar adecuadamente la estructura de datos recibida de la API para filtrar y mostrar correctamente la información.
- Implementar la gestión de errores y notificaciones en caso de fallos en la carga de datos.

### Interactividad y reactividad en Vue.js

- Sincronizar los filtros y la paginación con la lista de películas en tiempo real.
- Manejar eventos y propiedades reactivas en los componentes.

### Optimización de la interfaz

- Diseñar componentes reutilizables para la lista de películas y las tarjetas individuales.
- Implementar Tailwind CSS para mejorar la apariencia y la responsividad.

### **Alternativas más avanzadas**

- Opté por no utilizar un store centralizado (como Pinia o Vuex) para aprender y practicar el manejo de estados locales, consciente de que una solución centralizada sería más eficiente en proyectos más complejos.

Estos desafíos reflejan mi proceso de aprendizaje y el compromiso por entender a fondo los conceptos esenciales de Vue.js antes de avanzar hacia patrones más sofisticados.

## Mejoras futuras

Algunas mejoras que se pueden implementar en versiones futuras del proyecto:

- **Autenticación de usuarios**: Permitir a los usuarios guardar películas en listas personalizadas.
- **Detalles ampliados**: Mostrar información más detallada sobre cada película, incluyendo el reparto y trailers.
- **Sistema de favoritos**: Agregar una funcionalidad para que los usuarios marquen sus películas favoritas.
- **Modo oscuro**: Implementar un tema oscuro para mejorar la experiencia visual.
- **Integración con más APIs**: Conectar con otras bases de datos de películas para enriquecer la información.

## Contribuciones

Si deseas contribuir a este proyecto, puedes hacer un fork del repositorio, realizar los cambios y enviar un pull request. ¡Toda ayuda es bienvenida!

## Contacto

Si tienes alguna pregunta sobre el proyecto o sobre mi experiencia como desarrollador, no dudes en contactarme:

- **Correo electrónico**: yubalhh@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/yubal-hormiga/
- **GitHub**: https://github.com/YubalHormiga
