import './OrdersItem.scss';

export const OrdersItem = (props) => {
    return (
        <div className='order-item'>
            <img className='order-item__img' src={props.img} alt='user-pic'/>
            <div className='order-item__info'>
                <p className='date'>{props.date}</p>
                <p className='user-name'>
                    by {props.name}, {props.item} items
                </p>
            </div>
            <div className='order-item__amount'>{props.amount}$</div>
        </div>
    )
}