<script>
import axios from 'axios';
import { ref } from "vue";
import VPagination from "@hennge/vue3-pagination";
// import PopupTest from './components/icons/Popup.vue';
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

//rate,review

import Popup from './Popup.vue';
// let page = ref(1);
// let pageCount = ref(null);
export default {
  components: {
    VPagination,
    Popup
  },
  setup() {
    const popupTriggers = ref({
        buttonTrigger: false
      });
      const TogglePopup = (trigger) => {
			popupTriggers.value[trigger] = !popupTriggers.value[trigger]
		}

    return {
      popupTriggers,
      TogglePopup
    }

    },
  data() {
    return {
      keyword: {
        name: '',
        city: '',
        air_conditioner: '',
        star: ''
      },
      listShop: [],
      page: 1,
      pageCount: 1,
    }
  },

  created() {
    this.search()
  },

  methods:
  {
    search: function () {

      axios.post('/shop/search?page=' + this.page, this.keyword)
        .then(response => {
          console.log(response);
          this.page = response.data.current_page;
          this.listShop = response.data.data;
          this.pageCount = response.data.last_page;
          //this.$router.push('search')
          // }
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });

    },
    searchName: function () {
      this.keyword.air_conditioner = '';
      this.keyword.star = '';
      this.page=1;
      this.search();

    },
    searchFilter: function () {
      this.page=1;
      this.search();

    },

  }
}


</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900 search"
    style="background-color: #805D49; height: 300px;  background-image: url('/search.jpg');">
    <form style="margin-top: 5%; width: 60%; margin-left: 20%;" @submit.prevent="searchName()">
      <label for="default-search" style="padding-top: 15%"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div class="relative" style="padding-top: 15%;">
        <div style="padding-top: 15%;" class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input type="search" v-model="keyword.name" id="default-search"
          class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="名前カフェ">
        <button
          class="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2"
          style="background-color: #805D49;">検索</button>
      </div>
    </form>

  </section>
  <section style=" height: 500px; margin-top: 50px">
    <div class="grid grid-cols-3 gap-3">
      <div>
        <h1 style="text-align: center; font-weight: 900;font-size: larger;">カフェのリスト</h1>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-3">
      <div class="col-span-2">
        <div class="grid grid-cols-1 gap-1" style="margin-top: 30px;">
          <li v-for="todo in listShop" style="margin-top: 20px;">
            <div style="text-align: left;" class="box">
              <div class="grid grid-cols-3 gap-3">
                <div class="col-span-1">
                  <img v-bind:src="todo.photoUrl" alt="img shop" class="img">

                </div>
                <div class="col-span-2" style="padding-top: 10px;">
                  <div style="padding-left: 30px;">
                    <div style="margin-top: 5px;font-weight: 900;font-size: 20px;">{{ todo.name }} </div>
                    <div style="margin-top: 10px;font-size: 15px;"> {{ todo.address }}</div>
                    <div v-if="todo.star != null" style="margin-top: 10px;;font-size: 15px;">
                      <div class="flex items-center">
                        <div v-for="n in Math.floor(todo.star)">
                          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>First star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                          </svg>

                        </div>
                        <div v-for="n in (5- Math.floor(todo.star))">
                          <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <title>Fifth star</title>
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                          </path>
                        </svg>
                        </div>
                        
                        <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{{ todo.star }} out of 5</p>

                      </div>
                    </div>
                    <div v-if="todo.star == null" style="margin-top: 10px;;font-size: 15px;"> まだレビューはありません</div>
                    <div v-if="todo.air_conditioner" style="margin-top: 10px;;font-size: 15px;">エアコン：ある</div>
                    <div v-if="!todo.air_conditioner" style="margin-top: 10px;;font-size: 15px;">エアコン：ない</div>
                  </div>
                </div>
              </div>

            </div>
          </li>

        </div>
        <div class="flex items-center justify-center p-2">
          <v-pagination v-model="page" :pages="pageCount" :range-size="1" active-color="#DCEDFF"
            @update:modelValue="search" />
        </div>

      </div>
      <div class="filter">
        <div class="content" style="font-size: 20px; font-weight: 900; padding-top: 30px; margin-bottom: 10px;">
          フィルター
        </div>
        <hr style="color: black; font-weight: bold; width: 250px" />
        <div style="font-size: 15px;
                          font-weight: 900; margin-top: 30px; margin-bottom: 10px;">エアコン</div>
        <div style="margin-bottom: 30px; padding-left: 20px;">
          <input type="radio" v-model="keyword.air_conditioner" name="air" id="air" value="0" @change="search()"> ない
          <input style="margin-left:20px" type="radio" v-model="keyword.air_conditioner" name="air" id="air" value="1"
            @change="searchFilter()"> ある
        </div>
        <hr style="color: black; font-weight: bold; width: 250px;margin-bottom: 30px;" />
        <label for="star" style="font-size: 15px;
                          font-weight: 900; padding-bottom: 20px;">スター </label>

        <select name="star" id="star" style="margin-left: 20px; color: black; text-align: center; width: 40%;"
          v-model="keyword.star" @click="searchFilter()">
          <option value="">None</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>



      </div>
    </div>
  </section>

  <h1>test</h1>
  <button @click="() => TogglePopup('buttonTrigger')">Open Popup</button>
  <Popup v-if="popupTriggers.buttonTrigger"
  :TogglePopup="() => TogglePopup('buttonTrigger')">

  </Popup>
  
</template>

<style>
li {
  list-style: none;
}

.box {
  border-radius: 10px;
  background-color: white;
  height: 200px;
  width: 80%;
  transform: translate(20%, 0%);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  padding-bottom: 50px;
  border: 2px solid black;
}

.img {
  width: 100%;
  padding-top: 30px;
  /* transform: translate(12%, 0%); */
  padding-left: 32px;
  /* max-width:70%; */
  height: 150px;


}

.filter {
  border-radius: 10px;
  background-color: #805D49;
  height: 300px;
  width: 70%;
  transform: translate(30%, 20%);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  padding-bottom: 50px;
  padding-left: 30px;
  color: white;

}</style>