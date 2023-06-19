<script setup >
import Nav from './components/Nav.vue';



</script>

<template>
  <cafe-detail :cafe="cafeData"  :reviewData="reviewData" :cafeImage="cafeImage"/>

</template>

<script>
import CafeDetail from './components/CafeDetail.vue';

export default {
  components: {
    CafeDetail
  },
  data() {
    return {
      cafeData: {
        name: 'AHA Coffee',
        address: '17 Lê Thanh Nghị, Hai Bà Trưng',
        businessHours: '09:00 - 22:00',
        contactMethod: '0386832065',
        hasAirConditioning: true,
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/17/64/44/49/getlstd-property-photo.jpg',
      },
      reviewData: [
        {
          id: 1,
          author: 'Hoàng Đức Thiện',
          content: 'Dịch vụ ok',
          rating: 4
        },
        {
          id: 2,
          author: 'Trịnh Khánh Ly',
          content: 'Dịch vụ tạm ổn, cẩn có nhiều đồ ăn hơn',
          rating: 5
        }
      ],
      cafeImage: [
        {
          id: 1,
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/17/64/44/49/getlstd-property-photo.jpg',
        },
        {
          id: 2,
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/17/64/44/49/getlstd-property-photo.jpg',
        },
        {
          id: 3,
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/17/64/44/49/getlstd-property-photo.jpg',
        },
        {
          id: 4,
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/17/64/44/49/getlstd-property-photo.jpg',
        }
      ],
      review: {
      rating: 5, // Default rating value
    },
    };
  }
};
</script>
