<script setup>
import Nav from "./components/Nav.vue";
</script>

<template>
  <Nav  v-if="!$route.meta.hideNavbar" />
  <RouterView />
</template>
