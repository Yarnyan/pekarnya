import { BrowserRouter, Routes, Route } from "react-router-dom"
import RootLayout from "./RootLayout"
import IngredientsPage from "./pages/IngredientsPage"
import MusicPage from "./pages/MusicPage"
import DesignPage from "./pages/DesignPage"
import PiePage from "./pages/PiePage"
import BakeryPage from "./pages/BakeryPage"
import { PersonnelPage } from "./pages/PersonnelPage.tsx";
import { MenuPage } from "./pages/MenuPage.tsx";
import TaskPage from "./pages/TaskPage.tsx"
function App() {


  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={'ХАВЗАХЪЩЫАШХЪЫВАЪШХЫВАХШВАЫШХАВХЪАЫХШАЫХШЪ КАКАЯ ЖЕ ПИЗДА ПИЗДА БОЖЕ'}></Route>
          <Route path="/cakes/view" element={<IngredientsPage />}></Route>
          <Route path="/cakes/design" element={<DesignPage />}></Route>
          <Route path="/settings/music" element={<MusicPage />}></Route>
          <Route path="/settings/task" element={<TaskPage />}></Route>
          <Route path="/pie/create" element={<PiePage />}></Route>
          <Route path="/bakery/create" element={<BakeryPage />}></Route>
          <Route path="/personnel/employees" element={<PersonnelPage />}></Route>
          <Route path="/menu" element={<MenuPage />}></Route>

        </Routes>
      </RootLayout>
    </BrowserRouter>
  )
}

export default App
