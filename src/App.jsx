import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Main from "./components/Main/Main";
import {Blog} from "./pages/Blog";
import {News} from "./pages/News";
import {User} from "./pages/User";
import {Home} from "./pages/Home";


function App() {

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Banner/>
                <Main>
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route path='/blog' element={<Blog/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/user' element={<User/>}/>
                    </Routes>
                </Main>
            </BrowserRouter>
        </>
    )
}

export default App;
