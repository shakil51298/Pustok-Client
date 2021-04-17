import React, { useContext, useEffect, useState } from 'react';
import NavigationBar from '../../CommonComponents/NavigationBar/NavigationBar';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import { userContext } from '../../../App';
import {Zoom} from 'react-reveal';

const CoustomerReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [userReview, setUserReview] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        setUserReview(data)

        const review = { review: userReview, email: loggedInUser.email, userImg: loggedInUser.photoURL }
        const url = 'http://localhost:5000/review';
        const methodSend = {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }
        fetch(url, methodSend)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };



    return (
        <section>
            <NavigationBar />
            <div className="row">
                <SideBar />
                <div className="border col-md-9" style={{ right: '0', position: 'absolute', backgroundColor: "#F4FDFB" }}>
                    <Zoom right cascade>
                        <h2 className="text-center mt-3" style={{ color: 'rgba(98,171,0,255)' }}>Review</h2>
                    </Zoom>
                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Your Name</label>
                            <br />
                            <input type='text' className="form-control" placeholder="Md Khalid hossain" {...register("UserName")} />
                            {errors.UserName && <span>This field is required</span>}
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Occupation</label>
                            <br />
                            <input type='text' placeholder="Doctor" className="form-control" {...register("Occupation", { required: true })} />
                            {errors.Occupation && <span>This field is required</span>}
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                            <br />
                            <textarea className="form-control" {...register("description", { required: true })} />
                            {errors.description && <span>This field is required</span>}
                        </div>
                        <div className="text-center mb-3">
                            <input className="btn btn-outline-success w-25" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CoustomerReview;