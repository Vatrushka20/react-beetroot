import './DashboardItem.scss';
import revenueIcon from '../../assets/content/dollar-icon.png';
import orderIcon from '../../assets/content/shopping-icon.png';
import reviewIcon from '../../assets/content/review-icon2.png';
import customerIcon from '../../assets/content/customers-icon.png';
export const DashboardItem = (props) => {
    const classes = 'dashboard-list ' + props.className;

    return (
        <div className={classes}>
            <div className="revenue">
                <div className="card">
                    <img className="card__img" src={revenueIcon} alt="icon"/>
                    <div className="card__content">
                        <h2 className="card__content__title">Monthly Revenue</h2>
                        <p className="card__content__data">4382 USD</p>
                    </div>
                </div>
            </div>

            <div className="orders">
                <div className="card">
                    <img className="card__img" src={orderIcon} alt="icon"/>
                    <div className="card__content">
                        <h2 className="card__content__title">New Orders</h2>
                        <p className="card__content__data">12</p>
                    </div>
                </div>
            </div>

            <div className="reviews">
                <div className="card">
                    <img className="card__img" src={reviewIcon} alt="icon"/>
                    <div className="card__content">
                        <h2 className="card__content__title">Pending Reviews</h2>
                        <p className="card__content__data">6</p>
                    </div>
                </div>
            </div>

            <div className="customers">
                <div className="card">
                    <img className="card__img" src={customerIcon} alt="icon"/>
                    <div className="card__content">
                        <h2 className="card__content__title">New Customers</h2>
                        <p className="card__content__data">18</p>
                    </div>
                </div>
            </div>
        </div>
    )
}