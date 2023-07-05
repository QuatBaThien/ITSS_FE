import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import CafeDetail from '../components/CafeDetail.vue'
import Welcome from '../components/Welcome.vue'
import AdminCafe from '../components/AdminCafe.vue'
import BookMark from '../components/BookMark.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
     {
      path: '/',
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
    {
      path: '/admincafe',
      name: 'admincafe',
      component: AdminCafe
    },
    {
      path: '/user/bookmark',
      name: 'bookmark',
      component: BookMark
    }
  ]
})


export default router;
