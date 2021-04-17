import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt, faTruckMoving } from '@fortawesome/free-solid-svg-icons'
import './ReviewCard.css'
import { Fade } from 'react-reveal';

const ReviewCard = ({ UserReview }) => {
    const { email, userImg, review } = UserReview;
    return (
        <Fade duration={1000} distance ="40px" bottom >
            <div className="card mb-3 mt-5" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={userImg} width="100%" height="100%" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body p-3" >
                            <h5 className="card-title">{review.UserName}</h5>
                            <p className="card-text">{review.Occupation}</p>
                            <p className="card-text">{review.description}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="card-text">
                                    <a href="#featureBooks">
                                        <button className="btn btn-outline-success">View Book</button>
                                    </a>
                                </div>
                                <div className="">
                                    <FontAwesomeIcon className="ratingIcon" icon={faStar} />
                                    <FontAwesomeIcon className="ratingIcon" icon={faStar} />
                                    <FontAwesomeIcon className="ratingIcon" icon={faStar} />
                                    <FontAwesomeIcon className="ratingIcon" icon={faStar} />
                                    <FontAwesomeIcon className="ratingIcon" icon={faStarHalfAlt} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default ReviewCard;