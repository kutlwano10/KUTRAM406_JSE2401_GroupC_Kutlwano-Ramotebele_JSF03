<script setup>
import { ref } from 'vue'
import Header from './Header.vue'

defineProps({
  msg: String,
})



const count = ref(0)
</script>

<template>
  
  <h1>{{ msg }}</h1>

  
    <button type="button" @click="count++">count is {{ count }}</button>
   
</template>

<style scoped>

</style>
