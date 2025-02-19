import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import TollBar from "./components/TollBar";
import PetPage from "./pages/PetPage";
import MedicationPage from "./pages/MedicationPage";
import PetHealthPage from "./pages/PetHealthPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyPetPage from "./pages/MyPetPage";
import UserPage from "./pages/UserPage";




function App() {



    return (
        <main className='App'>
            <TollBar />
            <div>
                <Routes>
                    <Route path="/" element={<IndexPage/>} exact />
                    <Route path="/pets" element={<PetPage />}  />
                    <Route path="/medication" element={<MedicationPage/>} />
                    <Route path="/pets/:id" element={<PetHealthPage/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/register" element={<RegisterPage/>} />
                    <Route path="/mypets" element={<MyPetPage/>} />
                    <Route path="/user" element={<UserPage/>} />
                </Routes>
            </div>
        </main>
    )
        ;
}

export default App;




