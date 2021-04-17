import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import {Fade} from 'react-reveal';


const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axios('http://localhost:5000/reviews')
            .then(data => {
                setReviews(data.data);
            })
    }, [])
    return (
        <section className="container mt-5 mb-5" >
            <Fade cascade top>
                <h1 className="text-center " style={{ color: 'rgba(98,171,0,255)' }}>REVIEWS</h1>
            </Fade>
            <div className="row">
                {
                    reviews.map(review => <ReviewCard UserReview={review} />)
                }
            </div>
        </section>
    );
};

export default Reviews;