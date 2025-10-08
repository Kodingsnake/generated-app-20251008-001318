import { create } from 'zustand';
import { Product } from '@/content/products';
interface CartState {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  clearCart: () => void;
  getTotalPrice: () => string;
}
export const useCartStore = create<CartState>((set, get) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),
  removeProduct: (productId) =>
    set((state) => {
      const productIndex = state.products.findIndex((p) => p.id === productId);
      if (productIndex !== -1) {
        const newProducts = [...state.products];
        newProducts.splice(productIndex, 1);
        return { products: newProducts };
      }
      return state;
    }),
  clearCart: () => set({ products: [] }),
  getTotalPrice: () => {
    const { products } = get();
    const total = products.reduce((acc, product) => {
      const price = parseFloat(product.price.replace('$', ''));
      return acc + (isNaN(price) ? 0 : price);
    }, 0);
    return total.toFixed(2);
  },
}));