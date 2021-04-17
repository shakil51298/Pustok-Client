import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import NavigationBar from '../../CommonComponents/NavigationBar/NavigationBar';
import SideBar from '../SideBar/SideBar';
import {Zoom} from 'react-reveal';

const OrderList = () => {
    const [orders, setOrders] = useState([])
    const [status, setStatus] = useState(null)
    const [loggedInUser, setLoggedInUser] = useContext(userContext)


    useEffect(() => {
        const userEmail = loggedInUser.email;
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            body: JSON.stringify({ userEmail }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }
        )
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleCheckStatus = (e, booksId) => {
        setStatus(e.target.value)
        console.log(booksId);
    }
    return (
        <div>
            <NavigationBar />
            <div className="row">
                <SideBar />
                <div className="border col-md-9" style={{ right: '0', position: 'absolute', backgroundColor: "#F4FDFB" }}>
                    <Zoom right cascade>
                        <h2 className="text-center mt-3" style={{ color: 'rgba(98,171,0,255)' }}>Orders List</h2>                   </Zoom>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">Service</th>
                                <th scope="col">Pay With</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <tr>
                                    {
                                        console.log(order.orderData.books.booksName)
                                    }
                                    <td scope="row">{index + 1}</td>
                                    <td>{order.orderData.UserData.displayName}</td>
                                    <td>{order.orderData.UserData.email}</td>
                                    <td>{order.orderData.books.booksName}</td>
                                    <td>Credit Card</td>
                                    <td>
                                        <form action="">
                                            <select onChange={(e) => handleCheckStatus(e, order.orderData.books._id)} name="" id="" className="form-select form-select-lg mb-3" aria-label=".form-select-sm">
                                                <option className="text-danger"  value="pending">Pending</option>
                                                <option className="text-success" selected value="Done">Done</option>
                                                <option className="text-info" value="on going">On Going</option>
                                            </select>
                                        </form>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default OrderList;