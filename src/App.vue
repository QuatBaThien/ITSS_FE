<script setup >
import Nav from './components/Nav.vue';


</script>

<template>

    <Navbar v-if="!$route.meta.hideNavbar" />
  <RouterView />

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