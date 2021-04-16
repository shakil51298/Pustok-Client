import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar, faStarHalfAlt, faTruckMoving } from '@fortawesome/free-solid-svg-icons'
import './ReviewCard.css'


const ReviewCard = ({ review }) => {
    const { rating, userDesc, userImg, userName } = review
    return (
        <div className="card mb-3 mt-5" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={userImg} width="100%" height="100%" alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{userName}</h5>
                        <p className="card-text">{userDesc}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="card-text"><small class="text-muted">{rating}</small></p>
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

    );
};

export default ReviewCard;