import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavigationBar from '../../CommonComponents/NavigationBar/NavigationBar';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
    const [adminData, setadminData] = useState({})
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setadminData(data)
    };
    useEffect(() => {
        const url = 'http://localhost:5000/addAdmin';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(adminData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }
        )
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            })
    })
    return (
        <div>
            <NavigationBar />
            <div className="row">
                <SideBar />
                <div className="border col-md-9" style={{ right: '0', position: 'absolute', backgroundColor: "#F4FDFB" }}>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-3">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input className="form-control" {...register("email")} />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Name</label>
                            <input className="form-control" {...register("name", { required: true })} />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="text-center">
                            <input className="btn btn-outline-success" type="submit" />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddAdmin;