<script setup>
import useProductStore from "../../store/store";
import ProductCard from "./ProductCard.vue";
import CardSkeleton from "./CardSkeleton.vue";
import { ref, onMounted } from "vue";

/**
 * initialize ProductStore
 */

const { products, loading, error, fetchProducts } = useProductStore();

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <div class="grid justify-center">
    <div
    v-if="loading"
      class="lg:max-h-[130rem] max-w-xl mx-auto grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center lg:max-w-none my-4"
    >
        <CardSkeleton v-for="index in 20" :key="index" />
    </div>
  </div>

  <div class="grid justify-center">
    <div
      class="lg:max-h-[130rem] max-w-xl mx-auto grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center lg:max-w-none my-4"
    >
      <div v-if="error">{{ error }}</div>
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
