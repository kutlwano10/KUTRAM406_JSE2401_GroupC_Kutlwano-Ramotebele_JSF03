import { ref } from "vue";
import { defineStore } from "pinia";
import { computed } from "vue";

export const useProductStore = defineStore("product", () => {
  const products = ref([]);
  const loading = ref(true);
  const error = ref(null);
  const initialSort = ref("default");

  const sortOptions = [
    { value: "default", label: "Default" },
    { value: "low", label: "Price: Low to High" },
    { value: "high", label: "Price: High to Low" },
    { value: "a-z", label: "Name: A to Z" },
    { value: "z-a", label: "Name: Z to A" },
  ];

  const sortedProducts = computed(() => {
    if (initialSort.value === "default") return products.value;

    return [...products.value].sort((a,b)=>{
        switch(initialSort.value) {
          case 'low':
          return a.price - b.price;
          case 'high':
          return b.price - a.price;
          case 'a-z': 
          return a.title.localeCompare(b.title);
          case 'z-a': 
          return b.title.localeCompare(a.title);
          default :
          return 0;
        }
    })
  });

  const setSort=(sortValue)=> {
    initialSort.value = sortValue;

  }

  const fetchSingleProduct = async (id) => {
    loading.value = true;
    error.value = null;

    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!res.ok) {
        throw new Error(
          "Data fetching failed, please check your network connection"
        );
      }
      const data = await res.json();

      products.value = data;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  const fetchProducts = async () => {
    loading.value = true;
    error.value = null;

    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error(
          "Data fetching failed, please check your network connection"
        );
      }
      const data = await res.json();

      products.value = data;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  return {
    products,
    loading,
    error,
    fetchProducts,
    initialSort, 
    sortOptions,
    sortedProducts,
    setSort,
  };
});
