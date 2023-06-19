<template>
  <div class="container">
    <div class="grid grid-cols-2 gap-5">
      <div class="grid-cols-4">
        <h1 class="text-4xl font-semibold">{{ cafe.name }}</h1>
        <div class="text-sm font-semibold pb-4 pt-5">
            <div>
              <star-rating star-size="25"  v-model:rating="rating"></star-rating>
            </div>
          </div>
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
      <p>
        <font-awesome-icon icon="location-dot" style="margin-right:11px" />
        {{ cafe.address }}
      </p>
      <p>
        <font-awesome-icon icon="clock" style="margin-right:10px" />
        {{ cafe.businessHours }}
        <span v-if="isOpen" class="font-semibold"> - オープン中</span>
      <span v-else class="font-semibold"> - 空く</span>
      </p>
      <p>
        <font-awesome-icon icon="phone" style="margin-right:10px" />
        <span class="underline">{{ cafe.contactMethod }}</span>
      </p>
      <p v-if="cafe.hasAirConditioning">エアコン</p>
      <p v-else >NO エアコン</p>
      <p class="text-2xl font-semibold py-3">写真</p>
      <div class="flex overflow-x-auto">
  <img v-for="image in cafeImage" :key="image.id" :src="image.image" alt="Cafe Image" class="rounded-lg aspect-w-1 aspect-h-1 max-w-xs mr-5">
</div>
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
    <div class="grid grid-cols-11 gap-11 py-3" v-for="review in reviewData" :key="review.id">
      <div class="col-span-1">
        <div class="flex items-center justify-center w-10 h-10 border-2 border-black rounded-full px-5 py-5 mx-5">
          <font-awesome-icon icon="user" class="text-black" />
        </div>
      </div>

      <div class="col-span-10">
        <div class="flex rounded-lg border-2 border-black">
          <div class="p-4">
            <p class="text-xl font-semibold">{{ review.author }}</p>
            <div class="text-sm font-semibold pb-4 pt-5">
              <div>
                <star-rating star-size="20" v-model="review.rating"></star-rating>
              </div>
            </div>
            <p class="text-gray-500">{{ review.content }}</p>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  props: ['cafe', 'reviewData','cafeImage'],
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
  computed: {
    isOpen() {
      const currentTime = new Date();
      const [start, end] = this.cafe.businessHours.split(' - ');

      const [startHour, startMinute] = start.split(':');
      const [endHour, endMinute] = end.split(':');

      const startTime = new Date();
      startTime.setHours(parseInt(startHour, 10));
      startTime.setMinutes(parseInt(startMinute, 10));
      startTime.setSeconds(0);

      const endTime = new Date();
      endTime.setHours(parseInt(endHour, 10));
      endTime.setMinutes(parseInt(endMinute, 10));
      endTime.setSeconds(0);

      return currentTime >= startTime && currentTime <= endTime;
    },
  },
};


</script>

<style scoped>
.container {
  margin-top: 40px;
  margin-left: 5%;
}
</style>
