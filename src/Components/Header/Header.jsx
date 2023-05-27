import "./Header.scss";
import HeaderNav from "./NavItem/HeaderNav";
import User from '../../user.json'

function Header() {
    return (
        <header className='header'>
                <div className='header__logo'></div>
                <h2 className='header__title'>{User.headerName}</h2>
                <HeaderNav />
        </header>
    )
}
export default Header;