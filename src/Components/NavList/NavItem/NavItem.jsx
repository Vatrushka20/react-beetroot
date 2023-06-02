import './NavItem.scss'
export const NavItem = ({icon, title}) => {
    return (
     <div className='nav-item'>
         <img className='nav-icon' src={icon} alt='icon'/>
         <p className='nav-title'>{title}</p>
     </div>
    )
}