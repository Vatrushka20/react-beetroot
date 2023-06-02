import tableHeader from '../../tableHeader.json';
import './TableHeader.scss'
export const TableHeader = () => {
    return (
        <div className='table-header'>
            {tableHeader.tableHeader.map(item => (
                <h2 className='table-header__title'>{item}</h2>
            ))}
        </div>
    )
}
