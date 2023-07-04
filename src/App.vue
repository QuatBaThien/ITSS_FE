<script setup>
import Nav from './components/Nav.vue';

</script>

<template>
  <div>
    <Nav v-if="$route.path !== '/auth/register' && $route.path !== '/auth/login' && $route.path !== '/welcome'" />
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
