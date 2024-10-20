import { BrowserRouter, Routes, Route } from "react-router-dom"
import RootLayout from "./RootLayout"
import IngredientsPage from "./pages/IngredientsPage"
import MusicPage from "./pages/MusicPage"
import DesignPage from "./pages/DesignPage"
import PiePage from "./pages/PiePage"
import BakeryPage from "./pages/BakeryPage"
function App() {


  return (
    <BrowserRouter>
        <RootLayout>
          <Routes>
            <Route path="/" element={'ХАВЗАХЪЩЫАШХЪЫВАЪШХЫВАХШВАЫШХАВХЪАЫХШАЫХШЪ КАКАЯ ЖЕ ПИЗДА ПИЗДА БОЖЕ'}></Route>
            <Route path="/cakes/view" element={<IngredientsPage />}></Route>
            <Route path="/cakes/design" element={<DesignPage />}></Route>
            <Route path="/settings/music" element={<MusicPage />}></Route>
            <Route path="/pie/create" element={<PiePage />}></Route>
            <Route path="/bakery/create" element={<BakeryPage />}></Route>
          </Routes>
        </RootLayout>
      </BrowserRouter>
  )
}

export default App
