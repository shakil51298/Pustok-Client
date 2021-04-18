import React, { useContext, useEffect, useState } from 'react';
import NavigationBar from '../../CommonComponents/NavigationBar/NavigationBar';
import SideBar from '../../DashBoard/SideBar/SideBar';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import MyCheckOutForm from '../MyCheckOutForm/MyCheckOutForm';
import { useParams } from 'react-router';
import { userContext } from '../../../App';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentGateWay = () => {
    const stripePromise = loadStripe('pk_test_51IgsQHHwkiS9dXtM7bhfbMwUxyIpyw2KTWhDa0dk12T8Yb6mHPIhgXQuAWAX5Kh5EGSG5Z2oefbZGYFtxiBwr38b00yoRYh8Y2');
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const { bookId, bookPrice } = useParams()
    const [bookInfo, setBookInfo] = useState({})
    useEffect(() => {
        const url = 'http://localhost:5000/AllBooks'
        axios(url)
            .then(data => {
                const BookData = data.data
                const FindFromDataBase = BookData.find(book => book._id == bookId)
                setBookInfo(FindFromDataBase);
            })
    }, [bookId])


    const paymentSuccess = payId => {
        const orderData = {
            books: bookInfo,
            paymentId: payId,
            orderTime: new Date(),
            UserData: loggedInUser,
            orderStatus : 'Pending'
        }
        const url = 'http://localhost:5000/addOrders'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ orderData }),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        })
            .then(result => {
                toast.success(('Your Order has been submitted!! Check Your Email'), {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <section>
            <NavigationBar />
            <div className="row">
                <SideBar />
                <div className="border col-md-9" style={{ right: '0', position: 'absolute', backgroundColor: "#F4FDFB" }}>
                    <h3 className="mt-3 text-center  mb-3" style={{ color: 'rgba(98,171,0,255)' }}>Payment</h3>
                    <Elements stripe={stripePromise}>
                        <MyCheckOutForm paymentSuccess={paymentSuccess} />
                    </Elements>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </section>
    );
};

export default PaymentGateWay;