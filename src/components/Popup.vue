<template>
  <div class="popup">
    <div class="popup-inner">
      <div class="flex justify-between w-full pb-8">
        <div class="text-2xl font-semibold">レビューを書く</div>
        <div>
          <button class="popup-close" @click="TogglePopup()">✖️</button>
        </div>
      </div>
      <div class="w-full">
        <div>
          <div class="text-sm font-semibold pb-2">カフェ</div>
          <div
            class="flex w-full item-center py-2 rounded-lg mb-3 border-2 border-black"
          >
            <div class="flex item-center justify-center mx-2 rounded">
              <img
                class="rounded object-cover"
                src="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg"
                alt=""
                width="100"
                height="60"
              />
            </div>
            <div class="flex flex-col item-center justify-center">
              <div class="font-semibold">Aha Cafe</div>
              <div>text text</div>
            </div>
          </div>
        </div>
        <form action="">
          <div class="text-sm font-semibold pb-2 pt-3">レビュー</div>
          <div class="flex w-full item-center rounded-lg border-2 border-black">
            <textarea
              class="w-full block rounded-lg p-2.5 resize-none"
              rows="6"
              placeholder="naze ................"
              v-model="quiz.review"
            />
          </div>

          <div class="text-sm font-semibold pb-4 pt-10">
            <div>評価点</div>
            <div>
              <star-rating :star-size="35" v-model:rating="quiz.rating" ></star-rating>
            </div>
          </div>
          <div class="w-full flex justify-end">
            <button
              class="bg-[#805D49] text-white px-7 py-2 font-semibold rounded hover:bg-red-600"
              @click="onSubmit()"
            >
              + 投稿
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
    methods: {
    
    onSubmit() {
        console.log(this.quiz);
    },
  },
  data() {
    return {
      quiz: {
        review: "",
        rating: "",
      },
    };
  },
  
  components: {
    // eslint-disable-next-line vue/no-unused-components
    StarRating,
  },

  props: ["TogglePopup"],
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
}
.popup .popup-inner {
  height: 600px;
  width: 600px;
  background: #fff;
  padding: 32px;
  border-radius: 14px;
  border: 2px solid black;
}
</style>
