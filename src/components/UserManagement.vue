<template>
    
  <div class="w-full flex justify-center">
    <div class="mt-28 w-3/4 mx-8 flex justify-center flex-col">
      <div class="flex justify-between items-center pb-4">
        <div class="text-2xl font-semibold">ユーザーリスト</div>
        <div class="flex items-center">
          <div class="mr-3">ロール</div>
          
            <select  v-model="selectedValue" @change="handleSelectChange">
              <option value="user" selected>User</option>
              <option value="subadmin">Subadmin</option>
            </select>
          
        </div>
      </div>
      
      <div v-for="user in users" v-bind:key="user.id" class="pb-4">
      <!-- <AdminCafePopup v-if="popupTriggers.buttonTrigger" :TogglePopup1="() => TogglePopup1('buttonTrigger')"></AdminCafePopup> -->
        <div
          class="flex justify-between border-2 border-black rounded-lg py-4 px-4"
        >
          <div class="flex">
            <div>
              <img
                class="rounded object-cover"
                src="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg"
                alt=""
                width="137"
                height="97"
              />
            </div>
            <div class="ml-5">
              <div class="font-semibold text-xl pb-2"> {{ user.name }} </div>
              
                
              <div> {{ user.email }} </div>
              
              
            </div>
          </div>
          <div class="flex">
            
            <div>
              <button @click="xoauser(user.id)" 
                class="bg-[#FF4848] text-white hover:bg-red-600 font-semibold rounded-lg px-5 py-2"
              >
                消去
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="p-2">
        <v-pagination
          v-model="page"
          :pages="pageCount"
          :range-size="1"
          active-color="#DCEDFF"
          @update:modelValue="search"
        />
      </div>
    </div>
  </div>
        

</template>

<script>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import axios from "axios";
import { ref } from 'vue';


export default {
  components: {
    VPagination,
    
  },
  data() {
    return {
      page: 1,
      pageCount: 1,
      users: [],
      user: {
        user_id: "",
      },
      api: '',
    };
  },
  created(){
    this.search()
  },
  methods: {
    
    handleSelectChange() {
      if (this.selectedValue === 'user') {
        this.getUser();
        
      } else if (this.selectedValue === 'subamin') {
        this.getSubamin();
        
      }
    },
    search: function () {
      axios
        .get("admin/getUser")
        .then((response) => {
          console.log(response);
          this.page = response.current_page;
          this.users = response.data.data;
          this.pageCount = response.last_page;
          console.log( this.users);
          //this.$router.push('search')
          // }
        })
        
    },
    
    getUser: function(){
      axios
      .get("admin/getUser")
        .then((response) => {
          console.log(response);
          this.page = response.current_page;
          this.users = response.data.data;
          this.pageCount = response.last_page;
          console.log( this.users);
          //this.$router.push('search')
          // }
        })
    },
    getSubamin: function(){
      axios
      .get("admin/getsubAdmin")
        .then((response) => {
          console.log(response);
          this.page = response.current_page;
          this.users = response.data.data;
          this.pageCount = response.last_page;
          console.log( this.users);
          //this.$router.push('search')
          // }
        })
    },
    
    xoauser: function(id){
      axios
        .post("/admin/delete", this.user)
        .then((response) => {
          console.log(response);
          window.location.reload();
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    
  },
  setup() {
   
  },
};
</script>
