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


// Förklaring till varför jag väljer denna lösning: jag valde routes och route eftersom min app är ganska lite och jag ville ha en mer lättläst struktur. createHashRouter är mer anvancerad och används ofta i större projekt eftersom man kan hantera gemensama layout och nestlad layoute (flera sidor delar samma grundlayoute) innan sidan visas. Med children och outlet kan flera sidor dela samma layout (ex header och footer). I mitt projekt känns det som jag vill behålla routes och route (efter feedbacken vid kod genomgång) eftersom Zustand redan hanterar state och datahämtning. Om projektet blir större kommer jag ha behov av de extra funktionerna som createHashRouter har. 


