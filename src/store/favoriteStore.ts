import { create } from "zustand";
import type { Product } from "../types/Product";
import { persist } from "zustand/middleware";

interface FavoriteStore {
  items: Product[];

  toggleFavorite: (product: Product) => void;

  isFavorite: (productId: number) => boolean;
}

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      items: [],

      toggleFavorite: (product) => {
        const exists = get().items.some((item) => item.id === product.id);

        if (exists) {
          set((state) => ({
            items: state.items.filter((item) => item.id !== product.id),
          }));
        } else {
          set((state) => ({
            items: [...state.items, product],
          }));
        }
      },

      isFavorite: (productId) => {
        return get().items.some((item) => item.id === productId);
      },
    }),

    {
      name: "favorite-storage",
    },
  ),
);
