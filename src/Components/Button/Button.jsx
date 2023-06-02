import './Button.scss';
export const Button = ({value, onClick}) => {
    return(

        <div className='btn-wrapper'>
            <button onClick={onClick} className="button">All {value} Deposits</button>
        </div>
    )
}