change file main.js

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBookmark, faLocationDot, faPhone, faUser, faPlus, faPen, faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons'
import VueStarRating from 'vue-star-rating';

import App from './App.vue';
import router from './router';
import './assets/main.css';
import './style.css';
import './axios';

// Add icons to the library
library.add(faPhone, faLocationDot, faBookmark, faUser, faPlus,faPen,faClock,faArrowLeft,faArrowRight);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('star-rating', VueStarRating);
app.mount('#app');

change file router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import CafeDetail from '../components/CafeDetail.vue'
import CoffeeList from '../components/CoffeeList.vue'
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
      path: '/coffees',
      name: 'list',
      component: CoffeeList
    },
  ]
})


export default router;

create components/CoffeeList.vue

<template>
  <div class="container" style="width: 85%">
    <div class="flex items-center pt-[23px] justify-between">
      <h2 class="text-[#000000] text-[24px] font-bold leading-[16px]">
        私のカフェリスト
      </h2>

      <button
        type="button"
        class="text-white h-[50px] bg-[#36ABFF] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      >
        <font-awesome-icon icon="plus" style="color: #ffffff" />
        喫茶店を追加
      </button>
    </div>
    <div class="mt-24px">
      <div
        v-for="c in coffees"
        class="rounded border border-[#000] p-[20px] flex justify-between mb-[24px]"
        :key="c.id"
      >
        <div class="flex">
          <img class="w-[276px] h-[185px]" :src="c.image" alt="" />
          <div class="pl-[24px]">
            <h3 class="text-[24px] font-semibold">{{ c.name }}</h3>
            <div class="pt-[20px]">
              <font-awesome-icon :icon="['fa', 'location-dot']" style="color: #222020;margin-right: 11px"/>
              <span>{{ c.address }}</span>
            </div>
            <div class="mt-[9px]">
              <font-awesome-icon :icon="['far', 'clock']" style="color: #222020;margin-right: 11px" />
              <span>{{ c.time }}</span>
              <span class="px-[16px]">-</span>
              <span class="font-bold">{{ c.open }}</span>
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            class="text-white bg-[#36ABFF] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            <font-awesome-icon icon="pen" style="color: #ffffff" />
            編集
          </button>
          <button
            type="button"
            class="text-white bg-[#FF0000] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            消す
          </button>
        </div>
      </div>
    </div>

    <div>
      <nav aria-label="Page navigation example">
        <ul class="inline-flex items-center">
          <li>
            <a
              href="#"
              class="block px-3 py-2 text-gray-500 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <span class="sr-only">Next</span>
              <font-awesome-icon :icon="['fas', 'arrow-left']" />
            </a>
          </li>

          <li>
            <div
              aria-current="page"
              class="rounded text-[#000] bg-[#D8D8D8] w-[42px] h-[41px] text-center font-semibold text-[16px] leading-[41px]"
            >
              1
            </div>
          </li>
          <li>
            <div
              class="text-[#B9B9B9] w-[42px] h-[41px] text-center font-semibold text-[16px] leading-[41px]"
            >
              2
            </div>
          </li>
          <li>
            <div
              class="text-[#B9B9B9] w-[42px] h-[41px] text-center font-semibold text-[16px] leading-[41px]"
            >
              3
            </div>
          </li>
          <li>
            <div
              class="text-[#B9B9B9] w-[42px] h-[41px] text-center font-semibold text-[16px] leading-[41px]"
            >
              4
            </div>
          </li>
          <li>
            <div
              class="text-[#B9B9B9] w-[42px] h-[41px] text-center font-semibold text-[16px] leading-[41px]"
            >
              5
            </div>
          </li>
          <li>
            <a
              href="#"
              class="block px-3 py-2 leading-tight text-gray-500 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <span class="sr-only">Next</span>
              <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      coffees: [
        {
          id: 1,
          image: "https://picsum.photos/300/300",
          name: "AHA Coffee",
          address: "17 Lê Thanh Nghị, Hai Bà Trưng",
          time: "09:00 - 22:00",
          open: "オープン中 ",
        },
        {
          id: 2,
          image: "https://picsum.photos/300/300",
          name: "AHA Coffee",
          address: "17 Lê Thanh Nghị, Hai Bà Trưng",
          time: "09:00 - 22:00",
          open: "オープン中 ",
        },
        {
          id: 3,
          image: "https://picsum.photos/300/300",
          name: "AHA Coffee",
          address: "17 Lê Thanh Nghị, Hai Bà Trưng",
          time: "09:00 - 22:00",
          open: "オープン中 ",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  margin: auto;
  margin-top: 80px;
  margin-bottom: 40px;
}
</style>


