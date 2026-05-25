import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import AdminPage from "./pages/AdminPage"
import CartPage from "./pages/CartPage"

function App() {

  return (
    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/admin" element={<AdminPage />} />

			<Route path="/cart" element={<CartPage />} /> 

    </Routes>
  )
}

export default App



