import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { fullProjects } from '@/data/full-projets/full-project'
import { authenticateUser } from '@/composables/useAuth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/learning-path',
      name: 'learning-path',
      component: () => import('../../src/modules/learnig/LearningPath.vue')
    },
    {
      path: '/projects',
      name: 'full-projects',
      component: () => import('../../src/modules/full-projects/FullProjectView.vue')
    },
    {
      path: '/projects/:name',
      name: 'full-projects-detail',
      component: () => import('../../src/modules/full-projects/FullProjectDetails.vue'),
      props: true,
      children: []
    },
    {
      path: '/logic-exercises',
      name: 'logic-exercises',
      component: () => import('../../src/modules/logic-exercises/LogicExercisesView.vue')
    },
    {
      path: '/technical-tests',
      name: 'technical-tests',
      component: () => import('../../src/modules/tecnichals-test/TecnicalTestView.vue')
    },
    {
      path: '/utilities',
      name: 'utilities',
      component: () => import('../modules/utilities/UtilitieViews.vue')
    },
    {
      path: '/utilities/:name',
      name: 'utility-detail',
      component: () => import('../modules/utilities/UtilitieDetails.vue'),
      props: true
    },
    {
      path: '/helpers',
      name: 'helpers',
      component: () => import('../modules/helpers/HelperLibrary.vue'),
      props: true
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/PrivacyPolicyView.vue')
    }
  ]
})

fullProjects.forEach((project) => {
  if (project.routes && project.routes.length > 0) {
    project.routes.forEach((route) => {
      if (route.children) {
        // Agrega la ruta padre con sus hijos
        router.addRoute({
          path: `/projects/${project.name}/${route.path}`,
          component: route.component,
          children: route.children.map((child) => ({
            path: child.path,
            name: child.name,
            component: child.component
          }))
        })
      } else {
        // Ruta plana
        router.addRoute({
          path: `/projects/${project.name}/${route.path}`,
          name: route.name,
          component: route.component,
          meta: route.meta || {}
        })
      }
    })
  }
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((route) => route.meta.requiresAuth)

  if (requiresAuth) {
    try {
      await authenticateUser()
      next()
    } catch (error) {
      console.warn('Usuario no autenticado:', error)
      next({ name: 'login' })
    }
  } else {
    next()
  }
})
// console.log('Rutas añadidas:', router.getRoutes())
export default router
