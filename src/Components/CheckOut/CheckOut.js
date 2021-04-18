import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { userContext } from '../../App';
import NavigationBar from '../CommonComponents/NavigationBar/NavigationBar';
import SideBar from '../DashBoard/SideBar/SideBar';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const { booksId } = useParams()
    const [book, setBook] = useState({})
    console.log(book);
    const history = useHistory()

    useEffect(() => {
        const url = 'http://localhost:5000/AllBooks'
        axios(url)
            .then(data => {
                const BookData = data.data
                const FindFromDataBase = BookData.find(book => book._id == booksId)
                setBook(FindFromDataBase);
            })
    }, [booksId])
    
    const handSubmitConfrimOrder = (e) =>{
        history.push(`/payment/${book._id}/${book.BooksPrice}`)
        e.preventDefault()
    }
    return (
        <div>
            <NavigationBar />
            <div className="row">
                <SideBar />
                <div className="border col-md-9" style={{ right: '0', position: 'absolute', backgroundColor: "#F4FDFB" }}>
                    <form className="p-3" onSubmit={handSubmitConfrimOrder}>
                        <h5 className="text-center mt-2">Check Out</h5>
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control"  value={loggedInUser.email} name="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="text" value={loggedInUser.displayName} className="form-control" name="name" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Book Name</label>
                            <input type="text" className="form-control" name="name" disabled value={book.booksName} placeholder="Books Name" />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-outline-success w-50">Confirm Order</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;