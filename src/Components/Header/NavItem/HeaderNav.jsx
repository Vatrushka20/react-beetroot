import './HeaderNav.scss';
import User from '../../../user.json'

function HeaderNav(props) {
    return (
        <nav className='nav'>
            <ul className='list'>
                {User.header.map((header) => (
                    <li key={header} className='item'>{header}</li>
                ))}
            </ul>
        </nav>
    )
}
export default HeaderNav;
