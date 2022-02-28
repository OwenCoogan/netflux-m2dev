import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/media/:id',
    name: 'Media',
    component: () => import('../views/Film.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
