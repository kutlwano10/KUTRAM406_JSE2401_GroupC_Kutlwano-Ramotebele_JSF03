<script setup>
import Header from "./components/Header.vue";
import ProductList from './components/ProductList.vue'
</script>

<template>
  <Header />
  <main>
    <!-- <ProductList/> -->
    <router-view></router-view>
  </main>

</template>

<style scoped>
</style>
