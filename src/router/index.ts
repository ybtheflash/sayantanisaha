import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/ResumeView.vue')
    },
    {
      path: '/old',
      name: 'old',
      component: () => import('../views/OldView.vue')
    }
  ]
})

export default router
