import './ReviewsList.scss';
import {ReviewsItem} from "./ReviewsItem/ReviewsItem";
import {useEffect, useState} from "react";
import axios from "axios";

export const ReviewsList = (props) => {
    const classes = 'reviews-list ' + props.className;

    const [reviewsData, setReviewsData] = useState([]);
    useEffect(() => {
        const getReviews = async () => {
            const data = await axios('data/review.json').then(res => (res.data));
            setReviewsData(data.reviews);
        }
        getReviews();
    }, []);


    return (
        <div className={classes}>
            {reviewsData.map(item => (
                <ReviewsItem
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    )
}