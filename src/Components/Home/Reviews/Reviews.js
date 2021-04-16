import React, { useEffect, useState } from 'react';
import ReviewFakeDate from '../../../FakeData/ReviewFakeData/ReviewFakeData';
import ReviewCard from '../ReviewCard/ReviewCard';
import ReviewCarusell from '../ReviewCard/ReviewCarues/ReviewCarusell';


const Reviews = () => {


    const [reviews, setReviews] = useState([])
    useEffect(() => {
        setReviews(ReviewFakeDate)
    }, [])
    return (
        <section className="container mt-5 mb-5">
            <h1 className="text-center " style={{ color: 'rgba(98,171,0,255)' }}>REVIEWS</h1>
            <div className="row">
                {
                    reviews.map(review => <ReviewCard review={review} />)
                }
            </div>
        </section>
    );
};

export default Reviews;