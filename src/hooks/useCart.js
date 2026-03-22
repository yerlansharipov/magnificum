import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  items: [],
  isOpen: false,

  addItem: (product) => {
    const existing = get().items.find(i => i.id === product.id);
    if (existing) {
      set(state => ({
        items: state.items.map(i =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        ),
      }));
    } else {
      set(state => ({ items: [...state.items, { ...product, qty: 1 }] }));
    }
  },

  removeItem: (id) =>
    set(state => ({ items: state.items.filter(i => i.id !== id) })),

  updateQty: (id, qty) =>
    set(state => ({
      items: qty <= 0
        ? state.items.filter(i => i.id !== id)
        : state.items.map(i => i.id === id ? { ...i, qty } : i),
    })),

  clearCart: () => set({ items: [] }),

  setOpen: (val) => set({ isOpen: val }),

  get total() {
    return get().items.reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  get count() {
    return get().items.reduce((sum, i) => sum + i.qty, 0);
  },
}));
