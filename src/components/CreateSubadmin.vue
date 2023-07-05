<template>
  <div class="flex justify-center items-center h-screen">
    <div class="bg-white p-8 rounded-md shadow-md w-screen">
      <div class="flex justify-center items-center h-screen">
        <div class="box3 bg-white p-8 rounded-md shadow-md w-2/5">
          <h2 class="text-center font-bold text-lg mb-4">サブ管理者のサインアップ</h2>
          <form @submit.prevent="commit">
            <div class="flex items-center mb-4">
              <label class="w-1/4 text-gray-700 font-bold" for="email">
                メールアドレス
              </label>
              <input
                class="shadow appearance-none border rounded w-3/4 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                v-model="subadmin.email" type="text">
            </div>
            <div class="flex items-center mb-4">
              <label class="w-1/4 text-gray-700 font-bold" for="password">
                パスワード
              </label>
              <input
                class="shadow appearance-none border rounded w-3/4 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                v-model="subadmin.password" type="text">
            </div>
            <div class="flex items-center mb-4">
              <label class="w-1/4 text-gray-700 font-bold" for="name">
                名前
              </label>
              <input
                class="shadow appearance-none border rounded w-3/4 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                v-model="subadmin.name" type="text">
            </div>
            <div class="flex items-center mb-4">
              <label class="w-1/4 text-gray-700 font-bold" for="phonenumber">
                電話番号
              </label>
              <input
                class="shadow appearance-none border rounded w-3/4 py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                v-model="subadmin.phonenumber" type="text">
            </div>
            <div class="flex justify-center">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                作成
              </button>
            </div>
          </form>
        </div>
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
      subadmin: {
        email: '',
        password: '',
        name: '',
        phonenumber: ''
      }
    }
  },
  methods: {


    commit: function () {
      axios.post("admin/addsubadmin", this.subadmin)
        .then(response => {
          console.log(response);
          if (!response.data.error)
            window.location.reload();
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  },

};
</script>
<style>
label {
  font-size: 13px;
}

.box3 {
  border: 2px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), inset 0 -2px 4px rgba(0, 0, 0, 0.2);
}</style>