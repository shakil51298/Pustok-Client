import React from 'react';
import cardImg from '../../../images/CardImg.jpg'
import cardImg2 from '../../../images/card2.jpg'
import { Link } from 'react-router-dom';
import help from '../../../images/icons/Help.png'
import car from '../../../images/icons/car.png'
import cashBack from '../../../images/icons/CASHBACK.png'
import guarantee from '../../../images/icons/Security_guarantee.png'


const ShippingAdvantage = () => {
    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-md-3">
                    <div className="shadow-lg">
                        <div className="card-body">
                            <div className="d-flex d-flex justify-content-between align-items-center">
                                <img src={car} width="20%" alt="" />
                                <div className="">
                                    <p>Free Shipping Item Orders Over $500</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="shadow-lg">
                        <div className="card-body">
                            <div className="d-flex d-flex d-flex justify-content-between align-items-center">
                                <img src={guarantee} width="20%" alt="" />
                                <div className="">
                                    <p>Free Shipping Item Orders Over $500</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="shadow-lg">
                        <div className="card-body">
                            <div className="d-flex d-flex d-flex justify-content-between align-items-center">
                                <img src={cashBack} width="20%" alt="" />
                                <div className="">
                                    <p>Free Shipping Item Orders Over $500</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="shadow-lg">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <img src={help} width="20%" alt="" />
                                <div className="">
                                    <p>Free Shipping Item Orders Over $500</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <Link to="/"><img width="100%" src={cardImg} alt="" /></Link>
                </div>
                <div className="col-md-6">
                    <Link to="/"><img src={cardImg2} width="100%" alt="" /></Link>
                </div>
            </div>
        </section>
    );
};

export default ShippingAdvantage;