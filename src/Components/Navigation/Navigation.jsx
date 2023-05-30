import './Navigation.scss';
import dashboardIcon from '../../assets/navigation/dashboard-icon.svg'
import salesIcon from '../../assets/navigation/sales-icon.svg'
import catalogIcon from '../../assets/navigation/catalog-icon.svg'
import customerIcon from '../../assets/navigation/customers_icon.svg'
import reviewIcon from '../../assets/navigation/review-icon.svg'
export const Navigation = () => {
    return (
        <nav className="nav">
            <ul className="list">
                <li className="item">
                    <img className="nav-svg" src={dashboardIcon} alt='icon'/>
                    Dashboard
                </li>
                <li className="item">
                   <img className='nav-svg' src={salesIcon} alt='icon'/>
                    Sales
                </li>
                <li className="item">
                    <img className='nav-svg' src={catalogIcon} alt='icon'/>
                    Catalog
                </li>
                <li className="item">
                    <img className='nav-svg' src={customerIcon} alt='icon'/>
                    Customers
                </li>
                <li className="item">
                    <img className='nav-svg' src={reviewIcon} alt='icon'/>
                    Reviews
                </li>
            </ul>
        </nav>
    )
}