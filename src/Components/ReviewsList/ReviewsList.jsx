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
                    star={item.star}
                    key={item.id}
                    img={item.img}
                    feedback={item.feedback}
                />
            ))}
        </div>
    )
}