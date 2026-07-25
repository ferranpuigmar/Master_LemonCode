import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/home-page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      children: [
        {
          path: 'lists/:id',
          name: 'list',
          component: () => import('@/components/list-modal.vue'),
          props: true,
        }
      ]
    }
  ],
})

export default router
