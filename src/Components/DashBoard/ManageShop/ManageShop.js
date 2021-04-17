import React from 'react';
import NavigationBar from '../../CommonComponents/NavigationBar/NavigationBar';
import SideBar from '../SideBar/SideBar';
import Zoom from 'react-reveal';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';



const ManageShop = () => {
    const [shopProducts , setShopProducuts] = useState([])

    useEffect(()=>{
        axios('http://localhost:5000/AllBooks')
        .then(data => {
            setShopProducuts(data.data);
        })
    },[])

    return (
        <div>
            <NavigationBar />
            <div className="row">
                <SideBar />
                <div className="border col-md-9" style={{ right: '0', position: 'absolute', backgroundColor: "#F4FDFB" }}>
                    <Zoom right cascade>
                        <h2 className="text-center mt-3" style={{ color: 'rgba(98,171,0,255)' }}>Manage Shop</h2>
                    </Zoom>
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
                                shopProducts.map( (product , index) =><tr>
                                    {   
                                        console.log(product)
                                    }
                                <td>{product.BooksPrice}</td>
                                <td>{product.authorName}</td>
                                <td>{product.bookType}</td>
                                <td><img src={product.booksImageUril} alt="" width='50px'/></td>
                                <td>{product.booksName}</td>
                                <td>
                                    <FontAwesomeIcon icon={faTrashAlt} className="text-danger ml-3" style={{fontSize:'20px'}}/>
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

export default ManageShop;