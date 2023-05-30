import './App.scss';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Navigation} from "./Components/Navigation/Navigation";
import {Content} from "./Components/Content/Content";

function App() {

    return (
        <>
            <Header className='wrapper'/>
            <Main className='wrapper'>
                <Navigation/>
                <Content/>
            </Main>
        </>
    )
}

export default App;
