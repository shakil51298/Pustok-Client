import { motion } from 'framer-motion';
import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const BooksCard = ({ bookData }) => {
    const { BooksPrice, Discount, authorName, bookType, booksImageUril, booksName, description, _id } = bookData
    const history = useHistory()
    const handleBooksDetails = () => {
        history.push(`/checkOut/${_id}`)
    }
    return (
        <motion.div className="col-md-4 mt-5 " style={{ cursor: 'pointer' }} onClick={handleBooksDetails} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9 }}>
            <div className="shadow-lg card">
                <p className="text-center mt-2">{bookType}</p>
                <Link><p className="text-center text-uppercase">{description}</p></Link>
                <img height="270px" src={booksImageUril} alt="" />
                <div className="card-body">
                    <h5 className="text-center">{booksName}</h5>
                    <h6 className="text-center">{authorName}</h6>
                    <div className="row">
                        <div className="col-md-4"><small style={{ color: "rgba(98,171,0,255)" }}>{BooksPrice} $</small></div>
                        <div className="col-md-4"><small ><del> 50$</del></small></div>
                        <div className="col-md-4">Offer
                        <h1 className="badge bg-danger text-white"> {Discount}%</h1>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default BooksCard; <h1>card</h1>