# **Saborify**

¡Bienvenido a **Saborify**! Este proyecto es una aplicación web enfocada en la exploración de recetas de cocina de manera intuitiva y organizada. Ha sido desarrollado con el objetivo de reforzar conocimientos en **Vue.js** y mejorar la comprensión de conceptos clave en el desarrollo web, incluyendo la gestión de estado con **Pinia** y la integración de **inteligencia artificial** para generar recetas personalizadas.

---

## **Descripción del proyecto**

Saborify permite a los usuarios:

- **Explorar recetas**: Acceder a una lista de recetas con imágenes, nombres y descripciones detalladas.
- **Buscar recetas por ingrediente**: Introducir un ingrediente y obtener recetas relacionadas.
- **Generar recetas con IA**: Introducir ingredientes y recibir una receta personalizada con inteligencia artificial.
- **Guardar recetas favoritas**: Marcar recetas como favoritas para acceder a ellas posteriormente.
- **Visualizar detalles de recetas**: Incluir información sobre ingredientes, instrucciones y valores nutricionales.
- **Interfaz interactiva y moderna**: Diseñada con Vue.js y Tailwind CSS para una experiencia fluida y atractiva.

Este proyecto aplica herramientas avanzadas de **Vue.js** como el uso de **Pinia** para la gestión de estado, **Axios** para el consumo de la API de Tasty (RapidAPI) y **OpenRouter AI** para la generación de recetas con inteligencia artificial.

### **Funcionalidades principales**:

- **Exploración de recetas** con información detallada.
- **Búsqueda por ingrediente** para descubrir nuevas opciones.
- **Generación de recetas con IA** usando OpenRouter AI.
- **Favoritos** para guardar y acceder rápidamente a recetas preferidas.
- **Detalles completos** con ingredientes, instrucciones y videos de preparación.
- **Diseño moderno y responsivo** con Vue.js y Tailwind CSS.

## **Integración de Inteligencia Artificial (IA)**

Saborify ahora cuenta con un asistente de cocina basado en IA, utilizando **OpenRouter AI** para generar recetas personalizadas según los ingredientes disponibles. El asistente sigue reglas específicas para maximizar la utilidad de los ingredientes que los usuarios ya tienen en casa:

1. **Prioriza ingredientes existentes**

   - Pregunta: "¿Qué ingredientes tienes disponibles?"
   - Usa un máximo de 1-2 ingredientes adicionales comunes.

2. **Sustituciones inteligentes**

   - Sugiere alternativas si falta un ingrediente clave.

3. **Adaptabilidad**
   - Ofrece tres versiones de cada receta: rápida, estándar y gourmet.
   - Incluye tips de ahorro y aprovechamiento de ingredientes.

## **Tecnologías utilizadas**

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías:

- **Vue.js**: Framework de JavaScript para construir interfaces de usuario reactivas.
- **Pinia**: Manejador de estado ligero y flexible.
- **Tailwind CSS**: Framework de estilos para mejorar la apariencia y responsividad de la interfaz.
- **API de Tasty (RapidAPI)**: Se utiliza para obtener la información de las recetas.
- **Axios**: Cliente HTTP para consumir la API.
- **OpenRouter AI**: Plataforma de inteligencia artificial utilizada para generar recetas.

## **Instalación**

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/saborify.git
   ```

2. **Instala las dependencias**:

   Asegúrate de tener **Node.js** y **npm** instalados. Si no los tienes, descárgalo desde [nodejs.org](https://nodejs.org/).

   Luego, en la raíz del proyecto, ejecuta:

   ```bash
   npm install
   ```

3. **Configura las variables de entorno**:

   Crea un archivo `.env` en la raíz del proyecto y agrega tu clave de API:

   ```bash
   VITE_TASTY_API_KEY=TU_CLAVE_DE_API
   ```

   ```bash
   VITE_OPENROUTER_KEY= Y=TU_CLAVE_DE_API
   ```

4. **Ejecuta el proyecto**:

   ```bash
   npm run dev
   ```

   Esto iniciará el proyecto en `http://localhost:3000` o una URL similar.

# **Uso**

## **Exploración de recetas**

- Ver una lista de recetas con su imagen, nombre y descripción.
- Filtrar recetas por ingredientes.

## **Generación de recetas con IA**

- Introducir ingredientes y recibir una receta generada por inteligencia artificial.
- Obtener variaciones de la receta en versiones rápida, estándar y gourmet.

## **Favoritos**

- Marcar recetas como favoritas para acceder a ellas rápidamente.

## **Detalles de recetas**

- Visualizar ingredientes, instrucciones y valores nutricionales.
- Acceder a videos de preparación.

---

# **Dificultades encontradas**

## **Consumo de la API de Tasty y OpenRouter AI**

- Manejo de respuestas y estructura de datos para presentar la información correctamente.
- Implementación de gestión de errores en caso de fallos en la carga de datos.

## **Interactividad en Vue.js**

- Sincronización entre la búsqueda, filtros y lista de recetas en tiempo real.
- Gestión del estado con **Pinia**.

## **Optimización de la interfaz**

- Implementación de diseño responsivo con **Tailwind CSS**.
- Creación de componentes reutilizables para mejorar la modularidad.

## **Nivel de dificultad: Intermedio**

- Uso de **Vue.js**, **Pinia**, **Axios**, consumo de una **API REST** y generación de texto con IA.
- Implementación de una interfaz moderna y funcional.
- Gestión de estado y almacenamiento local de favoritos.

---

# **Mejoras futuras**

- **Autenticación de usuarios** para personalizar la experiencia.
- **Detalles ampliados** con información del chef y comentarios de usuarios.
- **Sistema de favoritos mejorado** con categorización y notas.
- **Modo oscuro** para mejorar la experiencia visual.
- **Integración con otras APIs** para enriquecer la información de las recetas.
- **Mejoras en la IA** con aprendizaje basado en el historial de preferencias del usuario.

## **Contribuciones**

Si deseas contribuir a este proyecto, haz un **fork** del repositorio, realiza los cambios y envía un **pull request**. ¡Toda ayuda es bienvenida!

## **Contacto**

Si tienes alguna pregunta sobre el proyecto o sobre mi experiencia como desarrollador, no dudes en contactarme:

- **Correo electrónico**: yubalhh@gmail.com
- **LinkedIn**: [Perfil de LinkedIn](https://www.linkedin.com/in/yubal-hormiga/)
- **GitHub**: [Repositorio del proyecto](https://github.com/YubalHormiga)
