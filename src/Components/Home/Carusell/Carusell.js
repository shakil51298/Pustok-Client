import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import carusel1 from '../../../images/caruesel-1.jpg'
import carusel2 from '../../../images/caruesl-2.jpg'
import carusel3 from '../../../images/caruesl-3.jpg'
import Fade from 'react-reveal';
import { motion } from 'framer-motion';

const Carusell = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Fade bottom distance='40px' duration={1000}>
            <Carousel activeIndex={index} onSelect={handleSelect} className="h-25">
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-25"
                        src={carusel1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-danger">
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <a href="#featureBooks">
                            <motion.button className="btn btn-outline-success" whileHover={{ scale: 1.1 }} whileTap={{ duration: 0.5 }}>
                                $78.09 - Learn More!
                            </motion.button>
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carusel2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#featureBooks">
                            <motion.button className="btn btn-outline-success" whileHover={{ scale: 1.1 }} whileTap={{ duration: 0.5 }}>
                                $78.09 - Learn More!
                            </motion.button>
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carusel3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <a href="#featureBooks">
                            <motion.button className="btn btn-outline-success" whileHover={{ scale: 1.1 }} whileTap={{ duration: 0.5 }}>
                                $78.09 - Learn More!
                            </motion.button>
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Fade>
    );
};

export default Carusell;