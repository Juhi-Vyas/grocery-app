import { create } from "zustand";
import type { CartItem } from "../types/CartItem";
import type { Product } from "../types/Product";
import { persist } from "zustand/middleware";

interface CartStore {
  items: CartItem[];

  addItem: (product: Product, quantity: number) => void;

  removeItem: (productId: number) => void;

  increaseQuantity: (productId: number) => void;

  decreaseQuantity: (productId: number) => void;

  getTotalPrice: () => number;

  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
  items: [],

  addItem: (product, quantity) =>
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + quantity,
                }
              : item
          ),
        };
      }

      return {
        items: [
          ...state.items,
          {
            product,
            quantity,
          },
        ],
      };
    }),

  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter(
        (item) => item.product.id !== productId
      ),
    })),

  increaseQuantity: (productId) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.product.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      ),
    })),

  decreaseQuantity: (productId) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.product.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),

  getTotalPrice: () => {
    return get().items.reduce(
      (total, item) =>
        total + item.product.price * item.quantity,
      0
    );
  },

  clearCart: () =>
  set(() => ({
    items: [],
  })),
        
}),
{
  name: "cart-storage",
}
));