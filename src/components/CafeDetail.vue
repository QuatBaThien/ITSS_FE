<template>
  <div class="container">
    <div class="grid grid-cols-2 gap-5">
      <div class="grid-cols-4">
        <h1 class="text-4xl font-semibold">{{ cafe.name }}</h1>
        <star-rating star-size="25"  v-model:rating="rating"></star-rating>
      </div>
      <div class="grid-cols-1">
        <div class="w-full flex justify-end">
          <button class="bg-[#805D49] text-white px-7 py-2 font-semibold rounded hover:bg-red-600"
            @click="toggleBookmark">
            <font-awesome-icon icon="bookmark" style="margin-right:10px" />
            {{ isBookmarked ? 'Bỏ đánh dấu' : 'Đánh dấu' }}
          </button>
        </div>
      </div>
    </div>
    <div>
      <p class="text-gray-500">
        <font-awesome-icon icon="location-dot" style="margin-right:11px" />
        {{ cafe.address }}
      </p>
      <p class="text-gray-500">
        <font-awesome-icon icon="clock" style="margin-right:10px" />
        {{ cafe.businessHours }}
      </p>
      <p class="text-gray-500">
        <font-awesome-icon icon="phone" style="margin-right:10px" />
        {{ cafe.contactMethod }}
      </p>
      <p v-if="cafe.hasAirConditioning" class="text-green-500">エアコン</p>
      <p v-else class="text-red-500">Không có điều hoà</p>
      <p class="text-2xl font-semibold py-3">写真</p>
      <img :src="cafe.image" alt="Cafe Image" class="rounded-lg h-40">
      <p class="text-2xl font-semibold py">メニュー</p>
      <img :src="cafe.image" alt="Cafe Image" class="rounded-lg h-40">
    </div>

    <div class="grid grid-cols-2 gap-5 py-3">
      <div class="grid-cols-4">
        <p class="text-2xl font-semibold">レビュー</p>
      </div>
      <div class="grid-cols-1">
        <div class="w-full flex justify-end">
          <button class="bg-[#805D49] text-white px-7 py-2 font-semibold rounded hover:bg-red-600">
            + レビューを書く
          </button>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-10 gap-10 py-3">
  <div class="col-span-1">
    <div class="flex items-center justify-center w-10 h-10 border-2 border-black rounded-full px-5 py-5 mx-5">
      <font-awesome-icon icon="user" class="text-black" />
    </div>
  </div>
  
  <div class="col-span-9">
    <div class="flex  rounded-lg border-2 border-black">
      <div class="p-4">
        <p class="text-xl font-semibold">Hoàng Đức Thiện</p>
        <div class="text-sm font-semibold pb-4 pt-5">
            <div>
              <star-rating star-size="20"  v-model:rating="rating"></star-rating>
            </div>
          </div>
        <p class="text-gray-500">
         Dịch vụ ok, ủng hộ shop
        </p>
      </div>
    </div>
  </div>
</div>


  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  props: ['cafe'],
  data() {
    return {
      isBookmarked: false
    };
  },
  methods: {
    toggleBookmark() {
      this.isBookmarked = !this.isBookmarked;
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    StarRating,
  },
};

</script>

<style scoped>
.container {
  margin-top: 40px;
  margin-left: 5%;
}
</style>
