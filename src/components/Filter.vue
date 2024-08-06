<script setup>
import { ref } from 'vue';

const props = defineProps({
  categories: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['filterChange']);

const selectedCategory = ref('');

const emitChange = () => {
  emit('filterChange', selectedCategory.value);
};
</script>

<template>
    <div class="filter flex items-center">
      <label for="category-select " class="font-bold">Category: </label>
      <select id="category-select" class=" bg-gray-100 p-2 rounded-lg" v-model="selectedCategory"  @change="emitChange">
        <option value="">All Categories</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>
  </template>