import React from 'react';
import NavigationBar from '../../CommonComponents/NavigationBar/NavigationBar';
import SideBar from '../SideBar/SideBar';
import {Zoom} from 'react-reveal';

const DashBoard = () => {
    return (
        <div>
            <NavigationBar />
            <div className="row">
                <div className="col-md-3">
                    <SideBar />
                </div>
                <div className="col-md-9">
                    <Zoom right cascade>
                        <h2 className="text-center mt-3" style={{ color: 'rgba(98,171,0,255)' }}>Dashboard</h2>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;