<script setup>
// import useProductStore from "../../store/store";
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const product = ref(null);

onMounted(async () => {
  const productId = route.params.id;
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  product.value = await res.json();
});


</script>

<template>
  <h1 v-if="product"><h1>{{product.title}}</h1></h1>
</template>
