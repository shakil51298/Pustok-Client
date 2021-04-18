import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import { Fade } from 'react-reveal';


const Reviews = () => {

    const [reviewsData, setReviewsData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviewsData(data);
                console.log(data);
            })
    }, [])
    return (
        <section className="container mt-5 mb-5" >
            <Fade cascade top>
                <h1 className="text-center " style={{ color: 'rgba(98,171,0,255)' }}>REVIEWS</h1>
            </Fade>
            <div className="row">
                {
                    reviewsData.length == 0 && <h2 className=" text-center mt-2">This Field Is Loading!!</h2>
                }
                {
                    reviewsData.map(reviewData => <ReviewCard userEmail={reviewData.email} userImg={reviewData.userImg} userReviews={reviewData.review}></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Reviews;