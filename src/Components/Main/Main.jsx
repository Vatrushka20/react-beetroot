import './Main.scss';
import {SideBar} from "../SideBar/SideBar";
import {Content} from "../Content/Content";

export const Main = () => {
    return (
        <main className='main'>
            <SideBar/>
            <Content className='content-wrapper'/>
        </main>
    )
}