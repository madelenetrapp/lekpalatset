import { useNavigate } from "react-router"
import CartBadge from "./CartBadge"

function Header({ className, hideCartButton }) {
  const navigate = useNavigate()

  return (
    <header className={className}>
      <img
        src="/lekpalatset/images/lekpalatset.png"
        alt="lekpalatset"
      />

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