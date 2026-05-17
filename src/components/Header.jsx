import { useNavigate } from "react-router"
import logo from "../assets/images/lekpalatset.png"
import CartBadge from "./CartBadge"

function Header({ className, hideCartButton }) {
  const navigate = useNavigate()

  return (
    <header className={className}>
      <img src={logo} alt="lekpalatset" />

      <div className="header-buttons">
        <button onClick={() => navigate("/")}>
          Hem
          </button>

{!hideCartButton && (
  <button onClick={() => navigate("/cart")}>
    Kundkorg
    <CartBadge />
  </button>
)}

      </div>
    </header>
  )
}

export default Header

