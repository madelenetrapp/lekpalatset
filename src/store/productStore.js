import db from "../firebase/firebase"
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore"

import { create } from "zustand"

const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: "",

  setProducts: (products) =>
    set(() => ({
      products: products,
    })),

  addProduct: async () => {
    const newProduct = {
      name: "Ny produkt",
      description: "Beskrivning saknas",
      price: 1,
      image: "",
      createdAt: Date.now(),
    }

    await addDoc(collection(db, "products"), newProduct)

    const snapshot = await getDocs(collection(db, "products"))

    const productsFromFirestore = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

    set(() => ({
      products: productsFromFirestore.sort(
        (a, b) => (b.createdAt || 0) - (a.createdAt || 0)
      ),
    }))
  },

  deleteProduct: async (id) => {
    await deleteDoc(doc(db, "products", id))

    set((state) => ({
      products: state.products.filter(
        (product) => product.id !== id
      ),
    }))
  },

  updateProduct: async (updatedProduct) => {
    await updateDoc(doc(db, "products", updatedProduct.id), {
      name: updatedProduct.name,
      description: updatedProduct.description,
      price: updatedProduct.price,
      image: updatedProduct.image,
    })

    set((state) => ({
      products: state.products.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      ),
    }))
  },

  fetchProducts: async () => {
    set({
      loading: true,
      error: "",
    })

    try {
      const snapshot = await getDocs(collection(db, "products"))

      const productsFromFirestore = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      set({
        products: productsFromFirestore.sort(
          (a, b) => (b.createdAt || 0) - (a.createdAt || 0)
        ),
        loading: false,
      })
    } catch (error) {
      set({
        error: "Kunde inte hämta produkter",
        loading: false,
      })
    }
  },
}))

export default useProductStore