import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import FeaturedBooksDate from "../../../FakeData/FeaturedBooksData" 
import BooksCard from './BooksCard/BooksCard';


const FeaturedBooks = () => {
    const [books , setBooks] = useState([])
    useEffect(()=>{
        setBooks(FeaturedBooksDate)
    })
    return (
        <section className="container mt-5">
            <h2 className='text-center brandTexts' style={{color: "rgba(98,171,0,255)"}}>Featured Products</h2>
            <div className="row">
                {
                    books.map(book => <BooksCard book = {book}> </BooksCard>)
                }
            </div>
        </section>
    );
};

export default FeaturedBooks;