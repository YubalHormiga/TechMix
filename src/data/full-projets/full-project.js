export const fullProjects = [
  {
    id: 1,
    name: 'BoardShop',
    routeName: 'full-projects-detail',
    image: 'image_01.webp',
    github: 'https://github.com/YubalHormiga/TechMix/tree/main/src/modules/full-projects/BoardShop',
    description:
      'BoardShop es una tienda en línea de skateboards donde los usuarios pueden explorar productos, agregarlos al carrito y gestionar su compra. El carrito persiste en el almacenamiento local, incluso tras recargar la página. <span style="color: #72AF06; font-weight: bold;">Este proyecto es de nivel fácil</span>, ya que se enfoca en el uso básico de props y eventos para la gestión de datos, sin lógica compleja. También incluye un carrusel de imágenes interactivo.🛹🛒',

    difficulty: 'easy'
  },
  {
    id: 2,
    name: 'InventoryManager',
    routeName: 'full-projects-detail',
    image: 'image_02.webp',
    github:
      'https://github.com/YubalHormiga/TechMix/tree/main/src/modules/full-projects/InventoryManager',
    description:
      'InventoryManager es una app para gestionar inventarios, con opciones para agregar, editar y eliminar productos, manejar lotes y calcular precios. Utiliza drag-and-drop para personalizar la interfaz y Chart.js para la visualización de datos. <span style="color: #E6760E; font-weight: bold;">Este proyecto es de nivel intermedio</span>, ya que incluye el uso de composables, manejo de lotes y lógica avanzada para la gestión de productos.📊🛠️',
    difficulty: 'intermidiate'
  },
  {
    id: 3,
    name: 'CineScope',
    routeName: 'full-projects-detail',
    image: 'image_03.webp',
    github: 'https://github.com/YubalHormiga/TechMix/tree/main/src/modules/full-projects/CineScope',
    description:
      'CineScope es una aplicación web para explorar películas, donde los usuarios pueden buscar, filtrar por género e idioma, y navegar por una lista de títulos populares. El proyecto utiliza **Vue.js** para la interactividad y **Tailwind CSS** para el diseño.  <span style="color: #72AF06; font-weight: bold;">Este proyecto es de nivel fácil</span>, ya que se enfoca en la gestión de datos y la integración con la API de TMDb para la carga dinámica de información.🎬🍿',
    difficulty: 'easy'
  },
  {
    id: 4,
    name: 'Saborify',
    routeName: 'full-projects-detail',
    image: 'image_04.webp',
    github: 'https://github.com/YubalHormiga/TechMix/tree/main/src/modules/full-projects/Saborify',
    description:
      'Saborify es una aplicación web para explorar recetas, donde los usuarios pueden buscar por ingrediente, visualizar detalles nutricionales, generar recetas con IA y guardar favoritas. El proyecto utiliza **Vue.js** para la interactividad, **Pinia** para la gestión de estado y **Tailwind CSS** para el diseño. <span style="color: #E6760E; font-weight: bold;">Este proyecto es de nivel intermedio</span>, ya que integra consumo de API, IA y almacenamiento con Pinia.🍳🍽️',
    difficulty: 'intermidiate',
    routes: [
      {
        path: 'favorites',
        name: 'favorites',
        component: () =>
          import('../../modules/full-projects/Saborify/components/FavoriteRecipes.vue')
      },
      {
        path: 'recipeia',
        name: 'recipeia',
        component: () => import('../../modules/full-projects/Saborify/components/RecipeIA.vue')
      }
    ]
  }
]
