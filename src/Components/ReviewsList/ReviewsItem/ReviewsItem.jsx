import './ReviewsItem.scss';

export const ReviewsItem = (props) => {
    return (
        <div className='reviews-item'>
            <img className="reviews-item__pic" src={props.img} alt="pic"/>
            <div className='reviews-item__info'>
                <div className='star'>{props.star}</div>
                <p className="feedback">{props.feedback}</p>
            </div>

        </div>
    )
}