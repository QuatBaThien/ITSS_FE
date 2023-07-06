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
import BookMark from '../components/BookMark.vue'
import CreateSubadmin from '../components/CreateSubadmin.vue'
import Usermangement from '../components/UserManagement.vue'
import AdminHome from '../components/AdminHome.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        hideAdmin: true,
        hideSubAdmin: true,
       }
    },
     {
      path: '/',
      name: 'welcome',
      component: Welcome,
      meta: {
        hideNavbar: true,
        hideAdmin: true,
        hideSubAdmin: true,
       }
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login,
      meta: {
        hideNavbar: true,
        hideAdmin: true,
        hideSubAdmin: true,
       }
    },
    {
      path: '/auth/register',
      name: 'register',
      component: Register,
      meta: {
        hideNavbar: true,
        hideAdmin: true,
        hideSubAdmin: true,
       }
    },
    {
      path: '/search/:keywords',
      name: 'search',
      component: Home,
      meta: {
        hideNavbar: true,
        hideAdmin: true,
        hideSubAdmin: true,
       }
    },
    {
      path: '/cafeDetail/:id',
      name: 'detail',
      component: CafeDetail,
      meta: {
        hideAdmin: true,
        hideSubAdmin: true,
       }
    },
    {
      path: '/admin/approve',
      name: 'approve',
      component: AdminCafe,
      meta: {
        hideNavbar: true,
        hideSubAdmin: true,
       }
    },
    {
      path: '/subadmin/Update/:id',
      name: 'UpdateCoffee',
      component: UpdateCoffee,
      meta: {
        hideNavbar: true,
        hideAdmin: true,
       }
    },
    {
      path: '/subadmin/New',
      name: 'NewCoffee',
      component: NewCoffee,
      meta: {
        hideNavbar: true,
        hideAdmin: true,
      
       }
    },
    {
      path: '/subadmin/cafelist',
      name: 'cafelist',
      component: cafelist,
      meta: {
        hideNavbar: true,
        hideAdmin: true,
       }
     },
     {
      path: '/ShowCafeDetail/:id',
      name: 'ShowCafeDetail',
      component: SubAdminCafeDetail,
      meta: {
        hideNavbar: true,
        hideAdmin: true,
       }
    },
    {
      path: '/user/bookmark',
      name: 'bookmark',
      component: BookMark,
      meta: {
        hideAdmin: true,
        hideSubAdmin: true,
       }
    },
    {
      path: '/admin/addsubadmin',
      name: 'addsubadmin',
      component: CreateSubadmin,
      meta: {
        hideNavbar: true,
       
        hideSubAdmin: true,
       }
    },
    {
      path: '/admin/usermanagement',
      name: 'usermanagement',
      component: Usermangement,
      meta: {
        hideNavbar: true,
        
        hideSubAdmin: true,
       }
    },
    {
      path: '/admin',
      name: 'adminhome',
      component: AdminHome,
      meta: {
        hideNavbar: true,
        
        hideSubAdmin: true,
       }
    },
  ]
})


export default router;
