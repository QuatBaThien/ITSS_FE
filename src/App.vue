<script setup >
import Nav from './components/Nav.vue';



</script>

<template>
  <cafe-detail :cafe="cafeData" />

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
     
    };
  }
};
</script>
