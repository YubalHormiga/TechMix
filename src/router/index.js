import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'full-projects',
      component: () => import('../../src/modules/full-projects/FullProjectView.vue')
    },
    {
      path: '/projects/:id',
      name: "full-projects-detail",
      component: () => import('../../src/modules/full-projects/FullProjectDetails.vue'),
      props: true
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
      path: '/utilities/:id',
      name: 'utility-detail',
      component: () => import('../modules/utilities/UtilitieDetails.vue'),
      props: true
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/PrivacyPolicyView.vue')
    }
  ]
})

export default router
