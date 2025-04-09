import {Route, Routes, useLocation} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import TollBar from "./components/TollBar";
import PetPage from "./pages/PetPage";
import MedicationPage from "./pages/MedicationPage";
import PetHealthPage from "./pages/PetHealthPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyPetPage from "./pages/MyPetPage";
import UserPage from "./pages/UserPage";
import GalleryPage from "./pages/GalleryPage";
import Footer from "./components/Footer";
import useStore from "./store/main";


function App() {

    const {mainLink} = useStore((state) => state);
    const location = useLocation();
    const showToolbar = location.pathname.startsWith(mainLink);

    return (
        <main className='App d-flex flex-column justify-content-between'>

            <div>
                <TollBar/>
                {/*{showToolbar && <TollBar />}*/}

                <div>
                    <Routes>
                        <Route path={mainLink + "/"} element={<IndexPage/>} exact/>
                        <Route path={mainLink + "/pets"} element={<PetPage/>}/>
                        <Route path={mainLink + "/medication"} element={<MedicationPage/>}/>
                        <Route path={mainLink + "/pets/:id"} element={<PetHealthPage/>}/>
                        <Route path={mainLink + "/login"} element={<LoginPage/>}/>
                        <Route path={mainLink + "/register"} element={<RegisterPage/>}/>
                        <Route path={mainLink + "/mypets"} element={<MyPetPage/>}/>
                        <Route path={mainLink + "/user"} element={<UserPage/>}/>
                        <Route path={mainLink + "/gallery"} element={<GalleryPage/>}/>
                    </Routes>
                </div>
            </div>

            <Footer/>

        </main>
    )
        ;
}

export default App;




