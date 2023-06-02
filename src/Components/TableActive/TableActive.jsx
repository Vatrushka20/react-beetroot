import {useEffect, useState} from "react";
import axios from "axios";
import {TableItem} from "../TableItem/TableItem";
import {TableHeader} from "../TableHeader/TableHeader";
import {TableTitle} from "../TableTitle/TableTitle";
import {Button} from "../Button/Button";

export const TableActive = () => {
    const [activeData, setActiveData] = useState([]);
    const [visible, setVisible] = useState(2);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 2);
    }

    useEffect(() => {
        const getTableData = async () => {
            const data = await axios('mock/active.json').then(res => (res.data));
            setActiveData(data.active);
        };
        getTableData();
    }, [])
    return (
        <div className='active'>
            <TableTitle
                title={'Active Deposits'}
                number={activeData.length}
            />
            <TableHeader/>
            {activeData.slice(0, visible).map(item => (
                <TableItem
                    key={item.id}
                    {...item}
                />
            ))}
            <Button onClick={showMoreItems} value={'active'}/>
        </div>
    )
}