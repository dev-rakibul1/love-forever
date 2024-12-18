import CartDetails from '@/components/love/CartDetails.vue'
import AboutView from '@/page/about/About.vue'
import Love from '@/page/love/Love.vue'
import ServiceView from '@/page/service/Service.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../page/home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
    },
    {
      path: '/service',
      name: 'service',
      component: ServiceView,
    },
    {
      path: '/love-story',
      name: 'story',
      component: Love,
    },

    {
      path: '/details/:id',
      name: 'CartDetails',
      component: CartDetails,
      props: true,
    },
  ],
})

export default router
