import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import NavigationBar from '../../CommonComponents/NavigationBar/NavigationBar';
import SideBar from '../SideBar/SideBar';

const AllAdmins = () => {
    const [admins, setAdmins] = useState([])
    const [loggedInUser , setLoggedInUser] = useContext(userContext)
    useEffect(() => {
        fetch('http://localhost:5000/AllAdmins')
            .then(res => res.json())
            .then(data => {
                setAdmins(data);
            })
    }, [])
    return (
        <section>
            <NavigationBar />
            <div className="row">
                <SideBar />
                <div className="border col-md-9" style={{ right: '0', position: 'absolute', backgroundColor: "#F4FDFB" }}>
                    <h3 className="mt-3 text-center  mb-3" style={{ color: 'rgba(98,171,0,255)' }}>Admins</h3>
                    <div className="row">
                        {
                            admins.map(admin => <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img src={
                                        loggedInUser && loggedInUser.email === admin.email ? loggedInUser.photoURL : ""
                                    } alt=""/>
                                    <div className="card-body">
                                        <h4 className="text-center">
                                            Admin
                                        </h4>
                                        <h5 className="text-success">{admin.name}</h5>
                                        <h6>{admin.email}</h6>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllAdmins; <h1>Our Admins</h1>