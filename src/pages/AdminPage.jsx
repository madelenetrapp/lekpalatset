import { useEffect } from "react"
import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"
import useProductStore from "../store/productStore"

function AdminPage() {

  const products = useProductStore((state) => state.products)
  const addProduct = useProductStore((state) => state.addProduct)
  const fetchProducts = useProductStore((state) => state.fetchProducts)

  useEffect(() => {
    fetchProducts()
  }, [])


  return (
    <>
      <Header className="admin-header " hideAdminButton={true} hideCartButton={true}  />

<button
  className="add-product-button"
  onClick={addProduct}
>
  Lägg till produkt
</button>

      <main className="product-grid admin-view">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} isAdmin={true}/>
        ))}

      </main>

      <Footer hideAdminButton={true} />
    </>
  )
}

export default AdminPage

