import React from 'react';
import './BuyThree.css'
import { Fade } from 'react-reveal';
const BuyThree = () => {
    return (
        <section className="container mb-5 buyThreeGetFree">
            <div className="d-flex text-center justify-content-between align-items-center">
                <div >
                    <Fade top cascade >
                        <h1 className="mt-5 ml-3 text-white">BUY 3. GET 1 FREE</h1>
                    </Fade>
                    <Fade left cascade>
                        <i className="text-white">50% off for slected products in PUSTOK</i> <br />
                    </Fade>
                    <a href="#featureBooks">
                        <button className="btn btn-outline-success mt-3">
                            See More
                    </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BuyThree;