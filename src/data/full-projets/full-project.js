export const fullProjects = [
  {
    id: 1,
    name: 'BoardShop',
    routeName: 'full-projects-detail',
    image: 'image_01.webp',
    github: 'https://github.com/YubalHormiga/TechMix/tree/main/src/modules/full-projects/BoardShop',
    description:
      'BoardShop es una tienda en línea de skateboards donde los usuarios pueden explorar productos, agregarlos al carrito y gestionar su compra. El carrito persiste en el <span class="term">almacenamiento local</span>. <span style="color: #72AF06; font-weight: bold;">Este proyecto es de nivel fácil</span>, y se enfoca en el uso básico de <span class="term">props</span> y <span class="term">eventos</span>, sin <span class="term">lógica compleja</span>. También incluye un carrusel de imágenes interactivo implementado con <span class="lib">Swiper</span>. 🛹🛒',
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
      'InventoryManager es una app para gestionar inventarios, con funciones <span class="term"> agregar, editar y eliminar</span> productos,  <span class="term">manejar lotes</span> y <span class="term">calcular precios.</span> La interfaz es modular y personalizable gracias a <span class="lib">FormKit Drag-and-Drop</span>, y se visualizan datos con <span class="lib">Chart.js</span>. <span class="tech">Vue.js</span> y <span class="tech">Tailwind CSS</span> forman la base del proyecto. <span style="color: #E6760E; font-weight: bold;">Proyecto intermedio</span>, con uso de <span class="term">props</span>, <span class="term">emit</span> y <span class="term">composables</span>. 📊🛠️',
    difficulty: 'intermidiate'
  },
  {
    id: 3,
    name: 'CineScope',
    routeName: 'full-projects-detail',
    image: 'image_03.webp',
    github: 'https://github.com/YubalHormiga/TechMix/tree/main/src/modules/full-projects/CineScope',
    description:
      'CineScope es una app para explorar películas, con <span class="term">búsqueda</span>, <span class="term">filtrado</span> por <span class="term">género</span> e <span class="term">idioma</span>, y una lista de títulos populares. Usa <span class="tech">Vue.js</span> para la interactividad y <span class="tech">Tailwind CSS</span> para el diseño. <span style="color: #72AF06; font-weight: bold;">Proyecto fácil</span>, centrado en la gestión de datos</span> y consumo de la <span class="api">API de TMDb</span>. 🎬🍿',
    difficulty: 'easy'
  },
  {
    id: 4,
    name: 'Saborify',
    routeName: 'full-projects-detail',
    image: 'image_04.webp',
    github: 'https://github.com/YubalHormiga/TechMix/tree/main/src/modules/full-projects/Saborify',
    description:
      'Saborify es una app para explorar recetas, buscar por ingrediente, ver <span class="term">información nutricional</span> y generar platos con <span class="api">IA</span>. Usa <span class="tech">Vue.js</span>, <span class="tech">Pinia</span> y <span class="tech">Tailwind CSS</span>. <span style="color: #E6760E; font-weight: bold;">Proyecto intermedio</span> que combina consumo de <span class="api">API externa</span> y gestión de estado. 🍳🍽️',
    difficulty: 'intermidiate',
    routes: [
      {
        path: 'recetas-favoritas',
        name: 'favorites',
        component: () =>
          import('../../modules/full-projects/Saborify/components/FavoriteRecipes.vue')
      },
      {
        path: 'receta-ia',
        name: 'recipeia',
        component: () => import('../../modules/full-projects/Saborify/components/RecipeIA.vue')
      }
    ]
  },
  {
    id: 5,
    name: 'NautiFleet',
    routeName: 'full-projects-detail',
    image: 'image_05.webp',
    github:
      'https://github.com/YubalHormiga/TechMix/tree/main/src/modules/full-projects/NautiFleet',
    description:
      'NautiFleet es una app para gestionar <span class="term">traslados marítimos</span> y <span class="term">alquiler de amarres</span>. También permite publicar o explorar embarcaciones de segunda mano. Usa <span class="tech">Vue.js</span>, <span class="tech">Vuefire</span>, <span class="tech">Firebase</span>, <span class="tech">Pinia</span> y <span class="tech">Tailwind CSS</span>. <span style="color: #f35454; font-weight: bold;">Proyecto avanzado</span>, con <span class="term">roles de usuario</span>, <span class="term">favoritos</span>, <span class="api">mapas interactivos</span> y simulación de servicios. ⚓⛵',
    difficulty: 'advanced',
    routes: [
      {
        path: '',
        name: '',
        component: () => import('../../modules/full-projects/NautiFleet/NautiFleet.vue'),
        children: [
          {
            path: 'traslados',
            name: 'transfers',
            component: () =>
              import('../../modules/full-projects/NautiFleet/views/transfers/TransfersView.vue')
          },

          {
            path: 'amarres',
            name: 'moorings',
            component: () =>
              import('../../modules/full-projects/NautiFleet/views/moorings/MooringsView .vue')
          },
          {
            path: 'detalles/:id',
            name: 'mooring-detail',
            component: () =>
              import(
                '../../modules/full-projects/NautiFleet/components/moorings/MooringsDetail.vue'
              )
          },
          {
            path: 'mapa-amarres',
            name: 'moorings-map',
            component: () =>
              import(
                '../../modules/full-projects/NautiFleet/views/moorings/MooringsMapAndDetailsView.vue'
              )
          },
          {
            path: 'login-nautifleet',
            name: 'login-nautifleet',
            component: () =>
              import('../../modules/full-projects/NautiFleet/views/auth/LoginView.vue')
          },
          {
            path: 'registro-nautifleet',
            name: 'register-nautifleet',
            component: () =>
              import('../../modules/full-projects/NautiFleet/views/auth/RegisterView.vue')
          },
          {
            path: 'restablecer-contrasena-nautifleet',
            name: 'reset-password-nautifleet',
            component: () =>
              import('../../modules/full-projects/NautiFleet/views/auth/ResetPassword.vue')
          },

          {
            path: 'panel',
            name: 'dash-board',
            component: () =>
              import('../../modules/full-projects/NautiFleet/views/dashboard/DashboardView.vue')
          }
        ]
      }
    ]
  }
]
