import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/show/:id',
    name: 'Show',
    component: () => import('../views/Film.vue'),
    props: true,
  },
  {
    path: '/show/:id/episode/:id_episode',
    name: 'Episode',
    component: () => import('../views/Episode.vue'),
    props: true,
  }
  ,
  {
    path: '/search/:query',
    name: 'Search',
    component: () => import('../views/Search.vue'),
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
