import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import CafeDetail from '../components/CafeDetail.vue'
import Welcome from '../components/Welcome.vue'
import AdminCafe from '../components/AdminCafe.vue'
import UpdateCoffee from '../components/UpdateCoffee.vue'
import NewCoffee from '../components/NewCoffee.vue'
import cafelist from '../components/cafelist.vue'
import SubAdminCafeDetail from '../components/subAdminCafeDetail.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
     {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login
    },
    {
      path: '/auth/register',
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
    {
      path: '/Update/:id',
      name: 'UpdateCoffee',
      component: UpdateCoffee
    },
    {
      path: '/New',
      name: 'NewCoffee',
      component: NewCoffee
    },
    {
      path: '/cafelist',
      name: 'cafelist',
      component: cafelist
     },
     {
      path: '/ShowCafeDetail',
      name: 'ShowCafeDetail',
      component: SubAdminCafeDetail
    },
  ]
})


export default router;
