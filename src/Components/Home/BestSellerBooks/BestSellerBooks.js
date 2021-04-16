import React from 'react';
import './bestSeller.css'
import bestSellerAuthor from '../../../images/best-seller-author.jpg'
import { useState } from 'react';
import { useEffect } from 'react';
import FeaturedBooksDate from '../../../FakeData/FeaturedBooksData/FeaturedBooksData';
const BestSellerBooks = () => {
    const sliceFormFeaturedBooksDate = FeaturedBooksDate.slice(5, 7)
    const [books, setBooks] = useState([])
    useEffect(() => {
        setBooks(sliceFormFeaturedBooksDate)
    },[])
    return (
        <div className="bestSeller mt-5 mb-5 container">
            <h1 className="text-white text-center p-2 mb-3 text-uppercase brandTexts">best seller books</h1>
            <div className="row">
                <div className="d-flex align-items-center">
                    <div className="col-md-6 col-sm-12">
                        <img className="ml-5" src={bestSellerAuthor} alt="/public" />
                    </div>
                    <div className="col md-6">
                        <div className="row">
                            {
                                books.map(book => <div className="card m-2">
                                    <div className="col-md-12">
                                        <div className="d-flex justify-content-end">
                                            <img src={book.img} alt="" width="120px" />
                                            <div className="text">{book.headLine}
                                                <br />
                                                <small className="badge bg-danger">{book.discount}</small><br />
                                                <small className="">{book.priceWas}</small>
                                                <br />
                                                <small>{book.type}</small>
                                                <button className="btn btn-sm btn-outline-success ml-3">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSellerBooks; <h1>best seller books</h1>