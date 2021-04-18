import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import BooksCard from './BooksCard/BooksCard';
import "animate.css/animate.min.css";
import Fade from 'react-reveal/Fade';


const FeaturedBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const url = "https://vast-waters-34536.herokuapp.com/AllBooks"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBooks(data)
                console.log(data);
            })
    }, [])
    return (
        <section className="container mt-5" id="featureBooks" >
            <Fade bottom duration={1000} distance="40px">
                <h2 className='text-center brandTexts' style={{ color: "rgba(98,171,0,255)" }}>Featured Products</h2>
                <div className="row">
                    {
                        books.length === 0 && <h2 className=" text-center mt-2">This Field Is Loading!!</h2>
                    }
                    {
                        books.map(bookData => <BooksCard bookData={bookData} key={bookData._id}> </BooksCard>)
                    }
                </div>
            </Fade>
        </section>
    );
};



export default FeaturedBooks;