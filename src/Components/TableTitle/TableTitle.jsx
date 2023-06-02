import './TableTitle.scss';
import {Counter} from "../Counter/Counter";
export const TableTitle = ({title, number}) => {
    return (
        <div className='table-title'>
            <h2 className='table-title__name'>{title}</h2>
            <Counter value={number}/>
        </div>
    )
}