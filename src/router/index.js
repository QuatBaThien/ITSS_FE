import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import CafeDetail from '../components/CafeDetail.vue'
const routes =[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
      meta: {
        hideNavbar: true,
       }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        hideNavbar: true,
       }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        hideNavbar: true,
       }
    },
    {
      path: '/search/:keywords',
      name: 'search',
      component: Home
    },
    {
      path: '/cafeDetail/:id',
      name: 'detail',
      component: CafeDetail
    },
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
  
    if (to.meta.requiresAuth && !token) {
      // User is not authenticated, redirect to login
      next('/welcome')
    } else {
      next('/')
    }
  })


export default router;
