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
      path: '/dosen',
      name: 'dosen',
      component: () => import('@/components/DosenView.vue')
    },
    {
      path: '/mahasiswa',
      name: 'mahasiswa',
      component: () => import('@/components/MahasiswaForm.vue')
    },
    {
      path: '/ruangan',
      name: 'Ruangan',
      component: () => import('@/components//RuanganView.vue')
    },
  ]
})

export default router
