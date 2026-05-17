import useCartStore from "../store/cartStore"

function CartBadge() {
  const cart = useCartStore((state) => state.cart)

  if (cart.length === 0) {
    return null
  }

  return <span className="cart-badge">{cart.length}</span>
}

export default CartBadge

