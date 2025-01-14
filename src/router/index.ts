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
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/technologies',
      name: 'technologies',
      component: () => import('../views/TechnologiesView.vue')
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('../views/ActivityView.vue')
    }
    // {
    //   path: '/live',
    //   name: 'live',
    //   component: () => import('../views/LiveView.vue')
    // }
  ]
})

export default router
