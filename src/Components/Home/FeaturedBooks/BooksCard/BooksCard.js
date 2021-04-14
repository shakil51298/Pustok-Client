import React from 'react';

const BooksCard = ({ book }) => {
    const { booksName, discount, headLine, img, leteasePrice, priceWas, type } = book
    console.log(book.booksName);
    return (
        <div className="col-md-4 mt-5">
            <div className="shadow-lg card">
                <p className="text-center">{type}</p>
                <p className="text-center">{headLine}</p>
                <img height="270px" src={img} alt="" />
                <div className="card-body">
                    <h5 className="text-center">{booksName}</h5>
                    <div className="row">
                        <div className="col-md-4"><small style={{ color: "rgba(98,171,0,255)" }}>{leteasePrice}</small></div>
                        <div className="col-md-4"><small ><del>{priceWas}</del></small></div>
                        <div className="col-md-4"><small className="badge bg-danger text-white">{discount}</small></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksCard; <h1>card</h1>