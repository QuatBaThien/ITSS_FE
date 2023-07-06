<template>
  <div class="w-full flex justify-center">
    <div class="mt-28 w-3/4 mx-8 flex justify-center flex-col">
      <div class="flex justify-between items-center pb-4">
        <div class="text-2xl font-semibold">承認待ちリスト</div>
        <div class="flex items-center">
          <div class="mr-3">並べ替え</div>
          <div class="border-2 border-black rounded py-1 px-14">
            <button>最新</button>
          </div>
        </div>
      </div>
      <div
        v-for="store in stores"
        v-bind:key="store.id"
       
        class="pb-4"
       
      >
        <!-- <div
        v-for="store in stores"
        v-bind:key="store.id"
        v-bind:todoProps="store.id"
        orderBy="store.id"
        class="pb-4"
      > -->
        <div
          class="flex justify-between border-2 border-black rounded-lg py-4 px-4"
        >
          <AdminCafePopup
            v-if="popupTriggers1.buttonTrigger"
            :TogglePopup1="() => TogglePopup1('buttonTrigger')"
            v-bind:storeDetail="store.id"
          ></AdminCafePopup>

          <div class="flex">
            <div>
              <img
                class="rounded object-cover"
                :src="store.photoUrl"
                alt=""
                style="width: 180px; height: 120px;"
              />
            </div>
            <div class="ml-5">
              <div class="font-semibold text-xl pb-2"  @click="() => TogglePopup1('buttonTrigger')">{{ store.name }}</div>
              <div class="flex">
                <div class="w-4 h-4 self-center">
                  <img
                    class="rounded-full cursor-pointer"
                    src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png"
                    alt=""
                  />
                </div>
                <div class="ml-4">{{ store.address }}</div>
              </div>
              <div class="flex">
                <div class="w-4 h-4 self-center">
                  <img
                    class="rounded-full cursor-pointer"
                    src="https://cdn-icons-png.flaticon.com/128/3239/3239945.png"
                    alt=""
                  />
                </div>
                <div class="ml-4">
                  {{ store.time_open }}-{{ store.time_close }} &nbsp; &nbsp;
                </div>
                <!-- <div class="font-semibold text-sm">- オープン中</div> -->
              </div>
            </div>
          </div>
          <div class="flex">
            <div>
              <button
                @click="duyetStore(store.id)"
                class="bg-[#36ABFF] text-white hover:bg-sky-600 font-semibold rounded-lg px-5 py-2 mr-3"
              >
                承認
              </button>
            </div>
            <div>
              <button
                @click="xoaStore(store.id)"
                class="bg-[#FF4848] text-white hover:bg-red-600 font-semibold rounded-lg px-5 py-2"
              >
                キャンセル
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
import AdminCafePopup from "./AdminCafePopup.vue";
import { ref } from "vue";
import axios from "axios";

export default {
  components: {
    VPagination,
    AdminCafePopup,
  },

  data() {
    return {
      page: 1,
      pageCount: 1,
      stores: [],
      cafe:
      {
        cafeShop_id: '',
      }
      
    }
  },
  created() {
    this.search();
  },

  methods: {
    search: function () {
      axios
        .get("/shop/unapprove?page=" + this.page)
        .then((response) => {
          console.log(response);
          this.page = response.data.meta.current_page;
          this.stores = response.data.data;
          this.pageCount = response.data.meta.last_page;
          //this.$router.push('search')
          // }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    duyetStore: function ( id ) {
      this.cafe.cafeShop_id = id;
      // this.deleteStore;
      axios
        .post(  "/admin/approve", this.cafe)
        .then((response) => {
          console.log(response);
          window.location.reload();
         
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    xoaStore: function ( id ) {
      // this.deleteStore;
      axios
        .post("/shop/delete/"+ id)
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
    const popupTriggers1 = ref({
      buttonTrigger: false,
    });
    const TogglePopup1 = (trigger) => {
      popupTriggers1.value[trigger] = !popupTriggers1.value[trigger];
    };
    return {
      popupTriggers1,
      TogglePopup1,
    };
  },
};
</script>
