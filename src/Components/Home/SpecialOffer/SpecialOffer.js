import React from 'react';
import SpecialCarusel from '../SpecialCarusel/SpecialCarusel';
import { Fade} from 'react-reveal';

const SpecialOffer = () => {
    return (
        <section className="container mt-5">
            <Fade bottom duration={1000} distance ='40px'>
                <div className="w-100 text-white text-center p-2" style={{ backgroundColor: "rgba(98,171,0,255)" }}>
                    <h3>Deal of the day uo to 20% off Special Offer</h3>
                </div>
            </Fade>
            <SpecialCarusel />
        </section>
    );
};

export default SpecialOffer;