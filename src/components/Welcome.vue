<template>
  <div class="flex items-center justify-center h-screen bg-cover bg-center"
    style="background-image: url('https://thuonghieuvaphapluat.vn/Images/thanhtam/2021/10/16/gia-ca-phe-hom-nay%20-16.10.jpg')">
    <div class="absolute top-0 left-0 mt-4 ml-4 w-full">
      <img src="/chillcafe.png" alt="Chill Cafe">
    </div>
    <div class="absolute top-0 right-0 mt-5">
      <router-link to="register" class="px-5 py-3 mr-5 mb-2 bg-white text-[#805D49] border border-[#805D49] rounded w-150 h-68 text-center text-lg font-semibold">登録</router-link>
      <router-link to="login" class="px-5 py-3 mr-5 bg-white text-[#805D49] border border-[#805D49] rounded w-150 h-68 text-center text-lg font-semibold">ログイン</router-link>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Welcome'
}
</script>