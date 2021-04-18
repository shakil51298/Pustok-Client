import React from 'react';
import cardImg from '../../../images/CardImg.jpg'
import cardImg2 from '../../../images/card2.jpg'
import { Link } from 'react-router-dom';
import './ShippingAdvantage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCashRegister, faFilePrescription, faTruckMoving } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';
import "animate.css/animate.min.css";
import {Fade } from 'react-reveal';

const ShippingAdvantage = () => {
    return (
        <Fade bottom scale={1000} distance ="40px">
            <section className="container mt-5">
                <div className="row">
                    <motion.div className="col" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                        <div className="card p-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <FontAwesomeIcon className="icons" icon={faTruckMoving} />
                                <div className="">
                                    <h5>Free Shipping Item</h5>
                                    <p>Order over $500</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="col" whileHover={{ scale: 1.1 }} whileTap={{ scale: .8 }}>
                        <div className="card p-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <FontAwesomeIcon className="icons" icon={faCashRegister} />
                                <div className="">
                                    <h5>Money Back Guarantee</h5>
                                    <p>100% money back</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="row mt-5">
                    <motion.div className="col" whileHover={{ scale: 1.1 }} whileTap={{ scale: .8}}>
                        <div className="card p-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <FontAwesomeIcon className="icons" icon={faCalendarAlt} />
                                <div className="">
                                    <h5>Cash On Delivery</h5>
                                    <p>Order over $500</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="col" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                        <div className="card p-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <FontAwesomeIcon className="icons" icon={faFilePrescription} />
                                <div className="">
                                    <h5>Help & Support</h5>
                                    <p>Call us : + 0123.4567.89</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="row mt-5">
                    <motion.div className="col-md-6" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}>
                        <Link to="/"><img width="100%" src={cardImg} alt="" /></Link>
                    </motion.div>
                    <motion.div className="col-md-6" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}>
                        <Link to="/"><img src={cardImg2} width="100%" alt="" /></Link>
                    </motion.div>
                </div>
            </section>
        </Fade>
    );
};

export default ShippingAdvantage;