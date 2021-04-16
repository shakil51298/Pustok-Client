import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavigationBar from '../../CommonComponents/NavigationBar/NavigationBar';
import SideBar from '../SideBar/SideBar';

const OrderList = () => {
    const [orders, setOrders] = useState([])
    const [status , setStatus] = useState(null)
    console.log(status);
    console.log();
    useEffect(() => {
        axios('http://localhost:5000/orders')
            .then(data => {
                setOrders(data.data);
            })
    }, [])

    const handleCheckStatus = (e , booksId) =>{
        setStatus(e.target.value )
        console.log(booksId);
    }
     return (
        <div>
            <NavigationBar />
            <div className="row">
                <SideBar />
                <div className="border col-md-9" style={{ right: '0', position: 'absolute', backgroundColor: "#F4FDFB" }}>
                    <h3 className="text-center mt-3" style={{ color: 'rgba(98,171,0,255)' }}>Total Orders {orders.length}</h3>
                    <table className="table">
                        <thead>
                            <tr>
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
                                    <td scope="row">{index + 1}</td>
                                    <td>{order.orderData.UserData.email}</td>
                                    <td>{order.orderData.books.booksName}</td>
                                    <td>Credit Card</td>
                                    <td>
                                        <form action="">
                                            <select onChange={(e)=>handleCheckStatus(e,order.orderData.books._id)} name="" id="" className="form-select form-select-lg mb-3" aria-label=".form-select-sm">
                                                <option  className="text-danger" value="pending">Pending</option>
                                                <option className="text-success" value="Done">Done</option>
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