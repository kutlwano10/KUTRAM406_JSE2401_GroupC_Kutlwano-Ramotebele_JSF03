<script setup>
import { useProductStore } from "../../store/store";

const store = useProductStore();

const handleSort = (event) => {
  store.setSort(event.target.value);
};
</script>

<template>
  <div class="flex sm:w-[95%] max-w-[21rem] md:w-full">
    <label htmlFor="sort" class="w-20 my-auto font-semibold">
      Sort by:{{ "" }}
    </label>
    <select
      :value="store.initialSort"
      @change="handleSort"
      name=""
      id="sort"
      class="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
    >
      <option
        v-for="option in store.sortOptions"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>
