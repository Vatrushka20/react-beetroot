import './SideBar.scss';
import {NavList} from "../NavList/NavList";
export const SideBar = () => {
    return (
        <div className='side-bar'>
            <div className='side-bar__user'>
                <img className='user-icon'
                     src={'https://figma-react-dashboard.vercel.app/static/media/profilelg.eab8d882.png'}
                     alt='user-icon'/>
                <p className='user-name'>Scott Grant</p>
            </div>
            <NavList/>
        </div>
    )
}