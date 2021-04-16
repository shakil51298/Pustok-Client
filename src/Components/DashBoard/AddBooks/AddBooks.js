import React, { useState } from 'react';
import NavigationBar from '../../CommonComponents/NavigationBar/NavigationBar';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddBooks = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [booksImageUrl, setBooksImgUrl] = useState(null)
    console.log(booksImageUrl);
    const onSubmit = data => {
        console.log(data)

        const booksUploadingData = {
            booksImageUril: booksImageUrl,
            bookType: data.Btype,
            authorName: data.authorName,
            description: data.description,
            booksName: data.booksName,
            Discount: data.Discount,
            BooksPrice: data.bPrice
        }
        const url = 'http://localhost:5000/AddBookToShop';
        const method = {
            method: "POST",
            body: JSON.stringify(booksUploadingData),
            headers: { 'Content-type': 'application/json' }
        }
        fetch(url, method)
            .then(response => alert('Product uploaded successfully!!'));
    };


    const handleUploadImage = (e) => {
        const imageData = new FormData(); // object
        imageData.set('key', '21cfee598e026c818f39274461ec85b6');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                setBooksImgUrl(res.data.data.display_url)
            })
            .catch(error => {

                console.log(error)
            })
    }
    return (
        <section>
            <NavigationBar />
            <div className="row">
                <SideBar />
                <div className="border col-md-9" style={{ right: '0', position: 'absolute', backgroundColor: "#F4FDFB" }}>
                    <h3 className="mt-3 text-center  mb-3" style={{ color: 'rgba(98,171,0,255)' }}>Add New Books From Here</h3>
                    <form onSubmit={handleSubmit(onSubmit)} >

                        <input className="form-control " placeholder="Book Name" {...register("booksName")} />
                        {errors.booksName && <span>This field is required</span>}
                        <br />
                        <input className="form-control" placeholder="Author Name" {...register("authorName", { required: true })} />
                        {errors.authorName && <span>This field is required</span>}
                        <br />
                        <input className="form-control" type="number" min="0" placeholder="Price" {...register("bPrice", { required: true })} />
                        {errors.bPrice && <span>This field is required</span>}
                        <br />
                        <input className="form-control" placeholder="Description in 30 word" max="30" {...register("description", { required: true })} />
                        {errors.description && <span>This field is required</span>}
                        <br />
                        <input className="form-control" placeholder="" max="30" placeholder="Book Type" {...register("Btype", { required: true })} />
                        {errors.Btype && <span>This field is required</span>}
                        <br />
                        <input className="form-control" placeholder="Discount" {...register("Discount", { required: true })} />
                        {errors.Discount && <span>This field is required</span>}
                        <br />
                        <input onClick={handleUploadImage} className="form-control" type="file" placeholder="Upaload an Image" {...register("bookImage", { required: true })} />
                        {errors.bookImage && <span>This field is required</span>}
                        <br />
                        <div className="text-center mb-3">
                            <input className="btn btn-outline-success w-50" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddBooks; <h1>this is add Books Page</h1>