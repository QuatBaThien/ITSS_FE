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
      <div class="pb-4">
        <div
          class="flex justify-between border-2 border-black rounded-lg py-4 px-4"
        >
          <div class="flex">
            <div>
              <img
                class="rounded object-cover"
                src="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg"
                alt=""
                width="250"
                height="125"
              />
            </div>
            <div class="ml-5">
              <div class="font-semibold text-xl pb-2">AHA Coffee</div>
              <div class="flex items-stretch pb-1">
                <div class="w-4 h-4 self-center">
                  <img
                    class="rounded-full cursor-pointer"
                    src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png"
                    alt=""
                  />
                </div>
                <div class="ml-4">17 Lê Thanh Nghị, Hai Bà Trưng</div>
              </div>
              <div class="flex">
                <div class="w-4 h-4 self-center">
                  <img
                    class="rounded-full cursor-pointer"
                    src="https://cdn-icons-png.flaticon.com/128/3239/3239945.png"
                    alt=""
                  />
                </div>
                <div class="ml-4">9:00-22:00 &nbsp; - &nbsp;</div>
                <div class="font-semibold">オープン中 - 空く</div>
              </div>
            </div>
          </div>
          <div class="flex">
            <div>
              <button
                class="bg-[#36ABFF] text-white font-semibold rounded-lg px-5 py-2 mr-3"
              >
                承認
              </button>
            </div>
            <div>
              <button
                class="bg-[#FF4848] text-white font-semibold rounded-lg px-5 py-2"
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

export default {
  components: {
    VPagination,
  },
  data() {
    return {
      pageCount: 1,
    };
  },
};
</script>
