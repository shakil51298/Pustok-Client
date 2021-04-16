import React from 'react';
import NavigationBar from '../CommonComponents/NavigationBar/NavigationBar';
import SideBar from '../DashBoard/SideBar/SideBar';

const OrderDetails = () => {
    return (
        <div>
            <NavigationBar />
            <div className="row">
                <SideBar />
                <div className="border col-md-9" style={{ right: '0', position: 'absolute', backgroundColor: "#F4FDFB" }}>
                    <form >
                        <h3 className="text-center mt-3" style={{ color: 'rgba(98,171,0,255)' }}>Order Status</h3>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" name="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Name</label>
                            <input type="text" className="form-control" name="name" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Upload a image</label>
                            <input type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;