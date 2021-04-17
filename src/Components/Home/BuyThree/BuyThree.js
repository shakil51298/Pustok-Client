import React from 'react';
import './BuyThree.css'
const BuyThree = () => {
    return (
        <section className="container mb-5 buyThreeGetFree">
            <div className="d-flex text-center justify-content-between align-items-center">
                <div >
                    <h1 className="mt-5 ml-3 text-white">BUY 3. GET 1 FREE</h1>
                    <i className="text-white">50% off for slected products in PUSTOK</i> <br />
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