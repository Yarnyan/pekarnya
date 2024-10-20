import {BrowserRouter, Routes, Route} from "react-router-dom"
import RootLayout from "./RootLayout"
import {PersonalTable} from "./module/personal/personalTable/PersonalTable.tsx";

function App() {


    return (
        <BrowserRouter>
            <RootLayout>
                <Routes>
                    <Route path="/"
                           element={'ХАВЗАХЪЩЫАШХЪЫВАЪШХЫВАХШВАЫШХАВХЪАЫХШАЫХШЪ КАКАЯ ЖЕ ПИЗДА ПИЗДА БОЖЕ'}></Route>
                    <Route path="/personal" element={<PersonalTable/>}></Route>
                </Routes>
            </RootLayout>
        </BrowserRouter>
    )
}

export default App
