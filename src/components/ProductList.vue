<script setup>
import { useProductStore } from "../../store/store";
import ProductCard from "./ProductCard.vue";
import CardSkeleton from "./CardSkeleton.vue";
import { ref, onMounted, computed } from "vue";
import Sort from "./Sort.vue";
import Filter from "./Filter.vue";

/**
 * initialize ProductStore
 */
const store = useProductStore();

const selectedCategory = ref("");

/**
 * This will return the filtered out Products from the sortedProducts
 */
 const displayedProducts = computed(() => {
  if (!selectedCategory.value) return store.sortedProducts;
  return store.sortedProducts.filter(product => product.category === selectedCategory.value);
});


/**
 * 
 * @param category - This will be the picked category
 * i  assign it to the Selected Category value
 */
const handleFilterChange = (category)=>{
  selectedCategory.value = category
}

onMounted(() => {
  store.fetchProducts();
  store.fetchCategories();
});


</script>

<template>
  <div class="grid justify-center">
    <div class="flex justify-around gap-20 m-5">
      <Filter :categories="store.categories" @filterChange="handleFilterChange"/>
      <Sort />
    </div>
    <div
      v-if="store.loading"
      class="lg:max-h-[130rem] max-w-xl mx-auto grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center lg:max-w-none my-4"
    >
      <CardSkeleton v-for="index in 20" :key="index" />
    </div>
  </div>

  <div class="grid justify-center">
    <div
      class="lg:max-h-[130rem] max-w-xl mx-auto grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center lg:max-w-none my-4"
    >
      <div v-if="store.error">{{ store.error }}</div>
      <ProductCard
        v-for="product in displayedProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
