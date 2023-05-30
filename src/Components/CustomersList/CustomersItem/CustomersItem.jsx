import './CustomersItem.scss';

export const CustomersItem = (props) => {
    return (
        <div className='customers-item'>
            <img className="customers-item__pic" src={props.img} alt="pic"/>
            <p className="customers-item__name">{props.name}</p>
        </div>
    )
}