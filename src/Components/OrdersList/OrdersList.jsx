import './OrdersList.scss';
import {OrdersItem} from "./OrdersItem/OrdersItem";
import {useEffect, useState} from "react";
import axios from "axios";

export const OrdersList = (props) => {
    const classes = 'order-list ' + props.className;
    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        const getOrders= async () => {
            const data = await axios('data/orders.json').then(res => (res.data));
            setOrderData(data.order)
        };
        getOrders();
    }, [])
    return (
        <div className={classes}>
            <h2 className='order-list__title'>Pending Orders</h2>
            {orderData.map(item => (
                <OrdersItem
                key={item.id}
                img={item.img}
                date={item.date}
                name={item.name}
                item={item.item}
                amount={item.amount}
                />
            ))}
        </div>
    )
}