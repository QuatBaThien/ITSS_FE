import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import CafeDetail from '../components/CafeDetail.vue'
import AdminCafe from '../components/AdminCafe.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
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
    {
      path: '/admincafe',
      name: 'admincafe',
      component: AdminCafe
    },
  ]
})


export default router;
