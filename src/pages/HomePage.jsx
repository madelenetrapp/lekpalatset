import { useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"
import useProductStore from "../store/productStore"

function HomePage() {

  const products = useProductStore((state) => state.products)
  const fetchProducts = useProductStore((state) => state.fetchProducts)
  const loading = useProductStore((state) => state.loading)
  const error = useProductStore((state) => state.error)

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <Header />

      {loading && <p>Laddar producter...</p>}
      {error && <p>{error}</p>}

      <main className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} isAdmin={false}/>
        ))}
      </main>

      <Footer />

    </>
  )
}

export default HomePage
