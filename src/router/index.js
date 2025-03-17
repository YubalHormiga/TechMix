import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { fullProjects } from '@/data/full-projets/full-project'

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
      router.addRoute('full-projects-detail', {
        path: route.path,
        name: route.name,
        component: route.component
      })
    })
  }
})
// console.log('Rutas añadidas:', router.getRoutes())
export default router
