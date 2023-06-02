import {useEffect, useState} from "react";
import axios from "axios";
import {TableTitle} from "../TableTitle/TableTitle";
import {TableHeader} from "../TableHeader/TableHeader";
import './TableClosed.scss'
import {TableItem} from "../TableItem/TableItem";
import {Button} from "../Button/Button";

export const TableClosed = () => {
    const [closedData, setClosedData] = useState([]);
    const [visible, setVisible] = useState(2);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 2);
    }

    useEffect(() => {
        const getClosedData = async () => {
            const data = await axios('mock/closed.json').then(res => (res.data));
            setClosedData(data.closed);
        };
        getClosedData();
    }, [])

    return (
        <>
            <div className='closed'>
                <TableTitle
                    title={'Closed Deposits'}
                    number={closedData.length}
                />
                <TableHeader/>

                {closedData.slice(0, visible).map(item => (
                    <TableItem
                        key={item.id}
                        {...item}
                    />
                ))}
                <Button
                    onClick={showMoreItems}
                    value={'closed'}
                />
            </div>

        </>
    )
}