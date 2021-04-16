import React from 'react';
import cardImg from '../../../images/CardImg.jpg'
import cardImg2 from '../../../images/card2.jpg'
import { Link } from 'react-router-dom';
import './ShippingAdvantage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarAlt, faCashRegister, faFilePrescription, faTruckMoving } from '@fortawesome/free-solid-svg-icons'


const ShippingAdvantage = () => {
    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col">
                    <div className="card p-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <FontAwesomeIcon className="icons" icon={faTruckMoving} />
                            <div className="">
                                <h5>Free Shipping Item</h5>
                                <p>Order over $500</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card p-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <FontAwesomeIcon className="icons" icon={faCashRegister} />
                            <div className="">
                                <h5>Money Back Guarantee</h5>
                                <p>100% money back</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <div className="card p-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <FontAwesomeIcon className="icons" icon={faCalendarAlt} />
                            <div className="">
                                <h5>Cash On Delivery</h5>
                                <p>Order over $500</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card p-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <FontAwesomeIcon className="icons" icon={faFilePrescription} />
                            <div className="">
                                <h5>Help & Support</h5>
                                <p>Call us : + 0123.4567.89</p>
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