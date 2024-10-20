import { BrowserRouter, Routes, Route } from "react-router-dom"
import RootLayout from "./RootLayout"

function App() {


  return (
    <BrowserRouter>
        <RootLayout>
          <Routes>
            <Route path="/" element={'ХАВЗАХЪЩЫАШХЪЫВАЪШХЫВАХШВАЫШХАВХЪАЫХШАЫХШЪ КАКАЯ ЖЕ ПИЗДА ПИЗДА БОЖЕ'}></Route>
          </Routes>
        </RootLayout>
      </BrowserRouter>
  )
}

export default App
