import './HeaderNav.scss';
import {Link, useNavigate} from "react-router-dom";


function HeaderNav() {

    const navigate = useNavigate();

    const navigateHandler = (event, to) => {
        event.preventDefault();
        navigate(to)
    }

    return (
        <nav className='nav'>
            <ul className='list'>
                <li className='item'>
                    <Link onClick={(event) => navigateHandler(event, '/')}>Home</Link>
                </li>
                <li className='item'>
                    <Link onClick={(event) => navigateHandler(event, '/blog')}>Blog</Link>
                </li>
                <li className='item'>
                    <Link onClick={(event) => navigateHandler(event, '/news')}>News</Link>
                </li>
                <li className='item'>
                    <Link onClick={(event) => navigateHandler(event, '/user')}>User</Link>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderNav;
