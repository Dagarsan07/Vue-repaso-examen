import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VistaOne from '../views/VistaOne.vue'
import VistaTwo from '../views/VistaTwo.vue'
import VistaThree from '../views/VistaThree.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/primera',
      name: 'primera',
      component: VistaOne
    },
    {
      path: '/segunda',
      name: 'segunda',
      component: VistaTwo
    },
    {
      path: '/tercera',
      name: 'tercera',
      component: VistaThree
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
