// frontend/src/stores/cartStore.ts (Zustand Cart Store)
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartItem = {
  productId: string;
  quantity: number;
  price: number;
};

type CartState = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => set((state) => {
        const existing = state.items.find(i => i.productId === item.productId);
        return {
          items: existing 
            ? state.items.map(i => i.productId === item.productId 
                ? {...i, quantity: i.quantity + 1} 
                : i)
            : [...state.items, {...item, quantity: 1}]
        };
      }),
      removeItem: (productId) => set((state) => ({
        items: state.items.filter(i => i.productId !== productId)
      })),
      clearCart: () => set({ items: [] }),
    }),
    { name: 'sanskaar-cart' }
  )
);