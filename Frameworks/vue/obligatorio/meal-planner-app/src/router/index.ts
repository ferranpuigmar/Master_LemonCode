import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home-page.vue'),
      children: []
    },
    {
      path: '/favoritos',
      name: 'favourites',
      component: () => import('@/views/favourites-page.vue'),
    }
  ],
})

export default router
