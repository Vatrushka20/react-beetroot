import './App.scss';
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Main from "./Components/Main/Main";
import {UserForm} from "./Components/UserForm/UserForm";

function App() {

    return (
        <>
            <Header />
            <Banner />
            <UserForm />
            <Main />

        </>
    )
}
export default App;
