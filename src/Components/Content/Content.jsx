import './Content.scss';
import {DashboardItem} from "../DashboardItem/DashboardItem";
import {CustomersList} from "../CustomersList/CustomersList";
import {ReviewsList} from "../ReviewsList/ReviewsList";
import {PostCard} from "../PostCard/PostCard";
import {OrdersList} from "../OrdersList/OrdersList";

export const Content = () => {

    return (
        <div className='content'>
            <DashboardItem/>
            <div className='content__list'>
                <div className='content__list__left-content'>
                    <PostCard className='postCard'/>
                    <OrdersList className='orderList'/>
                </div>
                <div className='content__list__right-content'>
                    <ReviewsList className='reviewsList'/>
                    <CustomersList className='customerList'/>
                </div>

            </div>
        </div>
    )
}