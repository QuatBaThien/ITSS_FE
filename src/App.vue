<script setup>
import Nav from './components/Nav.vue';
import AdminNav from './components/AdminNav.vue';
import SubAdminNav from './components/SubAdminNav.vue';
</script>

<template>
  <div>
    <Nav  v-if="!$route.meta.hideNavbar" />
    <AdminNav v-if="!$route.meta.hideAdmin" />
    <SubAdminNav v-if="!$route.meta.hideSubAdmin" />
    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}
</script>
