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
                v-bind:src="cafe.photoUrl[0].photoUrl"
                alt=""
                width="100"
                height="50"
              />
            </div>
            <div class="flex flex-col item-center justify-center">
              <div class="font-semibold">{{ cafe.name }}</div>
              <div>{{ cafe.address }}</div>
            </div>
          </div>
        </div>
        <form @submit.prevent="createRate()" action="">
          <div class="text-sm font-semibold pb-2 pt-3">レビュー</div>
          <div class="flex w-full item-center rounded-lg border-2 border-black">
            <textarea
              class="w-full block rounded-lg p-2.5 resize-none"
              rows="6"
              placeholder="何かを書く ................"
              v-model="quiz.content"
            />
          </div>

          <div class="text-sm font-semibold pb-4 pt-10">
            <div>評価点</div>
            <div>
              <star-rating :star-size="35" v-model:rating="quiz.star"></star-rating>
            </div>
          </div>
          <div class="w-full flex justify-end">
            <button
              class="bg-[#805D49] text-white px-7 py-2 font-semibold rounded hover:bg-red-600"  @click="onSubmit()"
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
import axios from 'axios';
export default {
  data() {
    return {
      quiz: {
        content: "",
        star: "",
        cafeShop_id: this.cafe.id
      },
    };
  },
  methods: {
    createRate: function() {
      axios.post('/shop/createRate',this.quiz)
        .then(response => {
          console.log(response);
          if(!response.data.error)
           window.location.reload();
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    onSubmit(){
   
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    StarRating,
  },

  props: ["TogglePopup","cafe"],
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
