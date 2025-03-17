# **Saborify**

¡Bienvenido a **Saborify**! Este proyecto es una aplicación web enfocada en la exploración de recetas de cocina de manera intuitiva y organizada. Ha sido desarrollado con el objetivo de reforzar conocimientos en **Vue.js** y mejorar la comprensión de conceptos clave en el desarrollo web, incluyendo la gestión de estado con **Pinia**.

---

## **Descripción del proyecto**

Saborify permite a los usuarios:

- **Explorar recetas**: Acceder a una lista de recetas con imágenes, nombres y descripciones detalladas.
- **Buscar recetas por ingrediente**: Introducir un ingrediente y obtener recetas relacionadas.
- **Guardar recetas favoritas**: Marcar recetas como favoritas para acceder a ellas posteriormente.
- **Visualizar detalles de recetas**: Incluir información sobre ingredientes, instrucciones y valores nutricionales.
- **Interfaz interactiva y moderna**: Diseñada con Vue.js y Tailwind CSS para una experiencia fluida y atractiva.

Este proyecto aplica herramientas avanzadas de **Vue.js** como el uso de **Pinia** para la gestión de estado y **Axios** para el consumo de la API de Tasty (RapidAPI).

### **Funcionalidades principales**:

- **Exploración de recetas** con información detallada.
- **Búsqueda por ingrediente** para descubrir nuevas opciones.
- **Favoritos** para guardar y acceder rápidamente a recetas preferidas.
- **Detalles completos** con ingredientes, instrucciones y videos de preparación.
- **Diseño moderno y responsivo** con Vue.js y Tailwind CSS.

## **Tecnologías utilizadas**

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías:

- **Vue.js**: Framework de JavaScript para construir interfaces de usuario reactivas.
- **Pinia**: Manejador de estado ligero y flexible.
- **Tailwind CSS**: Framework de estilos para mejorar la apariencia y responsividad de la interfaz.
- **API de Tasty (RapidAPI)**: Se utiliza para obtener la información de las recetas.
- **Axios**: Cliente HTTP para consumir la API.

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

4. **Ejecuta el proyecto**:

   ```bash
   npm run dev
   ```

   Esto iniciará el proyecto en `http://localhost:3000` o una URL similar.

## **Uso**

### **Exploración de recetas**:

- Ver una lista de recetas con su imagen, nombre y descripción.
- Filtrar recetas por ingredientes.

### **Búsqueda de recetas**:

- Introducir un ingrediente y obtener recetas relacionadas.

### **Favoritos**:

- Marcar recetas como favoritas para acceder a ellas rápidamente.

### **Detalles de recetas**:

- Visualizar ingredientes, instrucciones y valores nutricionales.
- Acceder a videos de preparación.

## **Dificultades encontradas**

### **Consumo de la API de Tasty**

- Manejo de respuestas y estructura de datos para presentar la información correctamente.
- Implementación de gestión de errores en caso de fallos en la carga de datos.

### **Interactividad en Vue.js**

- Sincronización entre la búsqueda, filtros y lista de recetas en tiempo real.
- Gestión del estado con **Pinia**.

### **Optimización de la interfaz**

- Implementación de diseño responsivo con **Tailwind CSS**.
- Creación de componentes reutilizables para mejorar la modularidad.

### **Nivel de dificultad**: **Intermedio**

- Uso de **Vue.js**, **Pinia**, **Axios** y consumo de una API REST.
- Implementación de una interfaz moderna y funcional.
- Gestión de estado y almacenamiento local de favoritos.

## **Mejoras futuras**

- **Autenticación de usuarios** para personalizar la experiencia.
- **Detalles ampliados** con información del chef y comentarios de usuarios.
- **Sistema de favoritos mejorado** con categorización y notas.
- **Modo oscuro** para mejorar la experiencia visual.
- **Integración con otras APIs** para enriquecer la información de las recetas.

## **Contribuciones**

Si deseas contribuir a este proyecto, haz un **fork** del repositorio, realiza los cambios y envía un **pull request**. ¡Toda ayuda es bienvenida!

## **Contacto**

Si tienes alguna pregunta sobre el proyecto o sobre mi experiencia como desarrollador, no dudes en contactarme:

- **Correo electrónico**: yubalhh@gmail.com
- **LinkedIn**: [Perfil de LinkedIn](https://www.linkedin.com/in/yubal-hormiga/)
- **GitHub**: [Repositorio del proyecto](https://github.com/YubalHormiga)
