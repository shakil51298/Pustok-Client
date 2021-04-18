import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import NavigationBar from '../../CommonComponents/NavigationBar/NavigationBar';
import SideBar from '../SideBar/SideBar';
import { Zoom } from 'react-reveal';

const OrderList = () => {
    const [orders, setOrders] = useState([])
    const [isAdmin, setIsAdmin] = useState(false)
    console.log(orders);
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
            .then(data => {
                setOrders(data)
            })
    }, [])

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
            .then(isAdmindata => {
                setIsAdmin(isAdmindata);
            })
    }, [])

    const handleCheckStatus = (e, booksId) => {
        const statusValue = e.target.value;
        const methodPatch = {
            method: 'PATCH', // updating 
            body: JSON.stringify({ statusValue, booksId }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }

        fetch('http://localhost:5000/updtaeBoooksInfo', methodPatch)
            .then(res => res.json())
            .then(data => {
                console.log("updated");
            })
    }


    return (
        <div>
            <NavigationBar />
            <div className="row">
                <SideBar />
                <div className="border col-md-9" style={{ right: '0', position: 'absolute', backgroundColor: "#F4FDFB" }}>
                    <Zoom right cascade>
                        <h2 className="text-center mt-3" style={{ color: 'rgba(98,171,0,255)' }}>Orders List</h2>
                    </Zoom>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">User Img</th>
                                <th scope="col">Service</th>
                                <th scope="col">Pay With</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <tr>
                                    {
                                        console.log(order.orderData.orderStatus)
                                    }
                                    <td scope="row">{index + 1}</td>
                                    <td>{order.orderData.UserData.displayName}</td>
                                    <td>{order.orderData.UserData.email}</td>
                                    <td>{
                                        <img className="mt-3 rounded-circle" src={order.orderData.UserData.photoURL} width='40px' alt="" />
                                    }</td>
                                    <td>{order.orderData.books.booksName}</td>
                                    <td>Credit Card</td>
                                    <td>
                                        <form action="">
                                            {!isAdmin ? <div className="">
                                                {
                                                    order.orderData.orderStatus == "Pending" ? <p className="text-danger" style={{fontWeight:'1000'}}>Pending</p>
                                                        :
                                                    order.orderData.orderStatus == "Done" ? <p className="text-Success" style={{fontWeight:'1000'}}>Done</p>
                                                        :
                                                        <p className="text-info" style={{fontWeight:'1000'}}>On Going</p>

                                                }
                                            </div>
                                                :
                                                <select onChange={(e) => handleCheckStatus(e, order.orderData.books._id)} name="" id="" className="form-select form-select-lg mb-3" aria-label=".form-select-sm">
                                                    <option className="text-danger" selected={
                                                        order.orderData.orderStatus == "Pending"
                                                    } value="Pending" >Pending</option>
                                                    <option className="text-success"  selected={
                                                        order.orderData.orderStatus == "Done"
                                                    } value="Done">Done</option>
                                                    <option className="text-info" selected={
                                                        order.orderData.orderStatus == "OnGoing"
                                                    } value="OnGoing">On Going</option>
                                                </select>
                                            }
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




