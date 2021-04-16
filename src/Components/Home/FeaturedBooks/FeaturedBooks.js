import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import BooksCard from './BooksCard/BooksCard';


const FeaturedBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
       const url = "http://localhost:5000/AllBooks"
       axios(url)
       .then(data => {  
        setBooks(data.data)})
    },[])
    return (
        <section className="container mt-5">
            <h2 className='text-center brandTexts' style={{ color: "rgba(98,171,0,255)" }}>Featured Products</h2>
            <div className="row">
                {
                    books.map(bookData => <BooksCard bookData={bookData} key={bookData._id}> </BooksCard>)
                }
            </div>
        </section>
    );
};

export default FeaturedBooks;