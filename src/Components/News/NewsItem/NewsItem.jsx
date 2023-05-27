import './NewsItem.scss'

function NewsItem(props) {
    return(
        <div className='news-item'>
            <h3 className='news-item__title'>{props.title}</h3>
            <h4 className='news-item__date'>{props.date}</h4>
            <p className='news-item__info'>{props.info}</p>
        </div>
    )
}
export default NewsItem;