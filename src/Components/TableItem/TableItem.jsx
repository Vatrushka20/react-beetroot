import {PropertyStatus} from "../PropertyStatus/PropertyStatus";
import './TableItem.scss'

export const TableItem = ({img, street, city, date, rent, deposit, rules, status}) => {
    return (
        <div className='table-item'>
            <div className='property'>
                <img src={img} alt='house'/>
                <div className='address'>
                    <h2 className='address__street'>{street}</h2>
                    <p className='address__city span-title'>{city}</p>
                </div>
            </div>
            <p className='date item-title'>{date}</p>
            <p className='rent item-title'>${rent}</p>
            <div className='deposit'>
                <p className='payment item-title'>${deposit}</p>
                <p className='rules span-title'>{rules}</p>
            </div>
            <PropertyStatus status={status}/>
        </div>
    )
}