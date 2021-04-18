import React from 'react';
import NavigationBar from '../../CommonComponents/NavigationBar/NavigationBar';
import SideBar from '../SideBar/SideBar';
import Zoom from 'react-reveal';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";



const ManageShop = () => {
    const [shopProducts, setShopProducuts] = useState([])

    useEffect(() => {
        axios('https://vast-waters-34536.herokuapp.com/AllBooks')
            .then(data => {
                setShopProducuts(data.data);
            })
    }, [])

    const handleDeleteProdcut = (id) => {

        const url = `https://vast-waters-34536.herokuapp.com/productDelete/${id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => {
                alert('deleted successfully!!')
                console.log(res);
            })
        console.log(id);
    }
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
                                <th scope="col">Price</th>
                                <th scope="col">Author</th>
                                <th scope="col">Type</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Book Name</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                shopProducts.map((product, index) => <tr>
                                    <td>{index + 1}</td>
                                    <td>{product.BooksPrice}</td>
                                    <td>{product.authorName}</td>
                                    <td>{product.bookType}</td>
                                    <td><img src={product.booksImageUril} alt="" width='50px' /></td>
                                    <td>{product.booksName}</td>
                                    <motion.td whileTap={{scale:0.8}}>
                                        <FontAwesomeIcon icon={faTrashAlt} className="text-danger ml-3" onClick={() => handleDeleteProdcut(product._id)} style={{ fontSize: '20px', cursor: "pointer" }} />
                                    </motion.td>

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