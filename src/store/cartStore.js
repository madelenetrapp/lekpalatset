import { create } from "zustand"

const useCartStore = create((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),

  removeFromCart: (indexToRemove) =>
    set((state) => ({
      cart: state.cart.filter((product, index) => index !== indexToRemove),
    })),
}))

export default useCartStore

