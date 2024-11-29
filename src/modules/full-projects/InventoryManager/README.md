# **Inventory Manager**

¡Bienvenido a **Inventory Manager**! Este proyecto es una solución para gestionar productos, lotes, y datos asociados de manera eficiente y organizada. Ha sido desarrollado con el objetivo de afianzar conocimientos en Vue.js y mejorar la comprensión de conceptos básicos de desarrollo web.

---

## **Descripción del proyecto**

Inventory Manager es una herramienta que permite:

- **Gestionar productos y lotes**: Agregar, editar, y eliminar productos con múltiples lotes asociados.
- **Cálculo automático de precios**: Determinar el precio promedio de compra y calcular el precio de venta basado en márgenes de ganancia.
- **Análisis visual**: Gráficos interactivos para analizar datos de inventario por categorías.
- **Sistema modular y dinámico**: Uso de `drag-and-drop` para reordenar componentes de forma personalizada.

El proyecto prioriza aprender los fundamentos de Vue.js y su ecosistema antes de avanzar hacia técnicas más complejas como composables o el uso de un store centralizado (por ejemplo, Vuex o Pinia).

---

## **Características principales**

- **Formularios interactivos**: Crear y modificar productos de forma dinámica.
- **Gestión de lotes**: Asignación y edición específica de lotes sin afectar los demás.
- **Interfaz adaptable**: Diseño responsivo y moderno.
- **Persistencia de datos**: Almacenamiento en `localStorage` para mantener los datos entre sesiones.
- **Gráficos dinámicos**: Representación visual de datos categorizados.

---

## **Tecnologías utilizadas**

- **Framework**: Vue.js 3.
- **Librerías**:
  - Vue Router
  - Vue Composition API
  - FormKit Drag-and-Drop
- **Almacenamiento local**: `localStorage`.

---

## **Instalación**

1. Clona el repositorio:

   ```bash
   git clone https://github.com/YubalHormiga/inventory-manager.git
   cd inventory-manager

   ```

2. Instala las dependencias:

   ```bash
   npm install

   ```

3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev

   ```

## **Uso**

- Accede a la aplicación en tu navegador local.
- Utiliza el formulario para añadir productos, especificando categoría, cantidad y precio.
- Administra tus productos desde la vista de lista: selecciona, edita o elimina.
- Analiza las estadísticas de inventario a través de gráficos interactivos.

---

## **Dificultades encontradas**

Durante el desarrollo de este proyecto, se presentaron varios desafíos que enriquecieron mi aprendizaje. Aquí los más relevantes:

### **Gestión de lotes y cálculo de precios**

- Implementar la lógica para editar únicamente el último lote de un producto sin modificar los anteriores.
- Calcular el precio promedio correctamente considerando múltiples lotes y sus cantidades.

### **Submit dinámico**

- Ajustar el comportamiento del formulario para manejar tanto la creación como la edición de productos y lotes.
- Garantizar que las modificaciones se propaguen correctamente al estado de la aplicación.

### **Props y Emit dinámicos**

- Adaptar la funcionalidad del `drag-and-drop` para que los eventos (`emit`) y las propiedades (`props`) fueran configurables dinámicamente.

### **Persistencia en `localStorage`**

- Gestionar el guardado y la recuperación de datos en el almacenamiento local, asegurando la integridad en caso de errores o inconsistencias.

### **Alternativas más avanzadas**

- Opté por no utilizar un store centralizado (como Pinia o Vuex) para aprender y practicar el manejo de estados locales, consciente de que una solución centralizada sería más eficiente en proyectos más complejos.

Estos desafíos reflejan mi proceso de aprendizaje y el compromiso por entender a fondo los conceptos esenciales de Vue.js antes de avanzar hacia patrones más sofisticados.

---

## **Mejoras futuras**

- Implementar un **store centralizado** para manejar el estado global de la aplicación.
- Mejorar la autenticación de usuarios para proteger los datos de inventario.
- Agregar soporte para múltiples idiomas.
- Desarrollar una API para sincronizar datos entre clientes.

---

## **Contribuciones**

Si deseas contribuir, sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una rama para tus modificaciones:
   ```bash
   git checkout -b mi-mejora
   ```
3. Realiza un pull request explicando tus cambios.

## Contacto

Si tienes alguna pregunta sobre el proyecto o sobre mi experiencia como desarrollador, no dudes en contactarme:

- **Correo electrónico**: yubalhh@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/yubal-hormiga/
- **GitHub**: https://github.com/YubalHormiga
