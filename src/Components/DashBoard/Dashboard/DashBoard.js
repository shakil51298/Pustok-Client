import React from 'react';
import NavigationBar from '../../CommonComponents/NavigationBar/NavigationBar';
import SideBar from '../SideBar/SideBar';
import { Zoom } from 'react-reveal';
import AnimatedBg from "react-animated-bg";
import './Dashboard.css'

const DashBoard = () => {
    const imagesList = [
        'url("https://images.dog.ceo/breeds/labrador/n02099712_3503.jpg")',
        'url("https://images.dog.ceo/breeds/labrador/n02099712_5844.jpg")',
        'url("https://images.dog.ceo/breeds/labrador/n02099712_7481.jpg")',
        'url("https://images.dog.ceo/breeds/labrador/n02099712_7414.jpg")'
    ];
    return (
        <div>
            <NavigationBar />
            <div className="row">
                <div className="col-md-9">
                    <AnimatedBg
                        colors={imagesList}
                        duration={2}
                        delay={1}
                        timingFunction="ease-out"
                        className="animated-section animated-images"
                    >
                        <Zoom right cascade>
                            <h2 className="text-center mt-3" style={{ color: 'rgba(98,171,0,255)' }}>Dashboard</h2>
                        </Zoom>
                    </AnimatedBg>
                </div>
                <div className="col-md-3">
                    <SideBar />
                </div>
            </div>
        </div>
    );
};

export default DashBoard;