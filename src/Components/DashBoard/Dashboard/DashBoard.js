import React from 'react';
import CheckOut from '../../CheckOut/CheckOut';
import NavigationBar from '../../CommonComponents/NavigationBar/NavigationBar';
import SideBar from '../SideBar/SideBar';

const DashBoard = () => {
    return (
        <div>
            <NavigationBar />
            <div className="row">
                <div className="col-md-3">
                    <SideBar />
                </div>
                <div className="col-md-9">
                    <h3 className="text-center mt-3" style={{color:'rgba(98,171,0,255)'}}>Dashboard</h3>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;