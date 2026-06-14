import { create } from "zustand";
import type { Product } from "../types/Product";
import { getProducts } from "../api/productsApi";

interface ProductStore {
  products: Product[];
  loading: boolean;
  error: string | null;

  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    // Avoid duplicate API calls
    if (get().products.length > 0) {
      return;
    }

    set({
      loading: true,
      error: null,
    });

    try {
      const products = await getProducts();

      set({
        products,
        loading: false,
      });
    } catch (error) {
      console.error(error);

      set({
        loading: false,
        error: "Failed to load products",
      });
    }
  },
}));