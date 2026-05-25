import Header from "../components/Header"
import Footer from "../components/Footer"
import useCartStore from "../store/cartStore"

function CartPage() {

  const cart = useCartStore((state) => state.cart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  const totalPrice = cart.reduce(
    (total, product) => total + product.price,
    0
  )

  return (
    <>
      <Header hideCartButton={true} />

      <main className="cart-page">

        <h1>Kundkorg</h1>

        {cart.length === 0 ? (
          <p>Din kundkorg är tom.</p>
        ) : (
          <>
            {cart.map((product, index) => (
              <article key={index} className="cart-card">

                {product.image && (
                  <img src={product.image} alt={product.name} />
                )}

                <div className="cart-card-content">
                  <h2>{product.name}</h2>

                  <p>{product.price} kr</p>

                  <button className="remove-cart-button" onClick={() => removeFromCart(index)}> Ta bort</button>
                </div>

              </article>
            ))}

            <h2>Totalt: {totalPrice} kr</h2>
          </>
        )}

      </main>
    </>
  )
}

export default CartPage

