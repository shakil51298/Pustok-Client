import React, { useContext, useState } from 'react';
import NavigationBar from '../../CommonComponents/NavigationBar/NavigationBar';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import { userContext } from '../../../App';
import { Zoom } from 'react-reveal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CoustomerReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [userReview, setUserReview] = useState({})
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        setUserReview(data)

        const review = { review: userReview, email: loggedInUser.email, userImg: loggedInUser.photoURL }
        const url = 'https://vast-waters-34536.herokuapp.com/review';
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
                toast.success('Thanks For Your Review', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
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
                            <input required type='text' className="form-control" placeholder="Md Khalid hossain" {...register("UserName")} />
                            {errors.UserName && <span>This field is required</span>}
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Occupation</label>
                            <br />
                            <input required type='text' placeholder="Doctor" className="form-control" {...register("Occupation", { required: true })} />
                            {errors.Occupation && <span>This field is required</span>}
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                            <br />
                            <textarea required className="form-control" {...register("description", { required: true })} />
                            {errors.description && <span>This field is required</span>}
                        </div>
                        <div className="text-center mb-3">
                            <input className="btn btn-outline-success w-25" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default CoustomerReview;