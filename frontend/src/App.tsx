import { BrowserRouter, Routes, Route } from "react-router-dom"
import RootLayout from "./RootLayout"
import IngredientsPage from "./pages/IngredientsPage"
import MusicPage from "./pages/MusicPage"

function App() {


  return (
    <BrowserRouter>
        <RootLayout>
          <Routes>
            <Route path="/" element={'ХАВЗАХЪЩЫАШХЪЫВАЪШХЫВАХШВАЫШХАВХЪАЫХШАЫХШЪ КАКАЯ ЖЕ ПИЗДА ПИЗДА БОЖЕ'}></Route>
            <Route path="/cakes/view" element={<IngredientsPage />}></Route>
            <Route path="/settings/music" element={<MusicPage />}></Route>
          </Routes>
        </RootLayout>
      </BrowserRouter>
  )
}

export default App
