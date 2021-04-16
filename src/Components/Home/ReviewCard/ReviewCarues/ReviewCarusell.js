import React, { Component } from 'react';

import ReactCardCarousel from 'react-card-carousel';

const ReviewCarusell = () => {


    return (
        <div className="CONTAINER_STYLE">
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                <div className="CARD_STYLE">First Card</div>
                <div className="CARD_STYLE">Second Card</div>
                <div className="CARD_STYLE">Third Card</div>
                <div className="CARD_STYLE">Fourth Card</div>
                <div className="CARD_STYLE">Fifth Card</div>
            </ReactCardCarousel>
        </div>
    );
};

export default ReviewCarusell;