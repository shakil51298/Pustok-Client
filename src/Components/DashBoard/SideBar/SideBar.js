import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SideBar.css'
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { userContext } from '../../../App';



const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        const url = 'http://localhost:5000/isAdmin'
        const loggedinuserEmial = loggedInUser.email;
        const postMethod = {
            method: 'POST',
            body: JSON.stringify({ loggedinuserEmial }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }

        fetch(url, postMethod)
            .then(res => res.json())
            .then(iAdmindata => setIsAdmin(iAdmindata))
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-3 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/orderList" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Orders</span>
                    </Link>
                </li>
                {
                    isAdmin && <div>
                        <li>
                            <Link to="/addAdmin" className="text-white">
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/allAdmin" className="text-white">
                                <FontAwesomeIcon icon={faUserPlus} /> <span> Our Admins</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addBook" className="text-white" >
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Book</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/doctor/setting" className="text-white" >
                                <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                            </Link>
                        </li>
                    </div>
                }
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default SideBar;