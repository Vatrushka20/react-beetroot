import './CustomersList.scss';
import {CustomersItem} from "./CustomersItem/CustomersItem";
import {useEffect, useState} from "react";
import axios from "axios";

export const CustomersList = (props) => {
    const classes = 'customer-list ' + props.className;
    const [customersData, setCustomersData] = useState([]);

    useEffect(() => {
            const getCustomers = async () => {
                const data = await axios('data/customers.json').then(res => (res.data));
                setCustomersData(data.customers)
            }
            getCustomers();
        },
        []);
    return (
        <div className={classes}>
            {customersData.map(item => (
                <CustomersItem
                    key={item.id}
                    {...item}
                />
            )
            )}
        </div>
    )
}