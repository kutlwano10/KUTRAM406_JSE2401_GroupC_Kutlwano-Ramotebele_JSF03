import { ref } from 'vue';

export default function useProductStore() {
  const products = ref([]);
  const loading = ref(true);
  const error = ref(null);

  const fetchProducts = async () => {
    loading.value = true;
    error.value = null;

    try {
      const res = await fetch('https://fakestoreapi.com/products');
      if (!res.ok) {
        throw new Error('Data fetching failed, please check your network connection');
      }
      const data = await res.json();
      console.log("Fetch" ,data)
      products.value= data;
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
  };
}