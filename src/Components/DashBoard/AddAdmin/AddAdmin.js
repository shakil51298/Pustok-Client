import React, {useState } from 'react';
import NavigationBar from '../../CommonComponents/NavigationBar/NavigationBar';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import { Zoom } from 'react-reveal';

const AddAdmin = () => {
    const [adminData, setadminData] = useState({})
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setadminData(data)


        const url = 'https://vast-waters-34536.herokuapp.com/addAdmin';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(adminData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }
        )
            .then(result => {
                alert(`you have added ${adminData.name} as a admin`)
            })
            .catch(err => {
                console.log(err);
            })
    };
    return (
        <div>
            <NavigationBar />
            <div className="row">
                <SideBar />
                <div className="border col-md-9" style={{ right: '0', position: 'absolute', backgroundColor: "#F4FDFB" }}>
                    <Zoom right cascade>
                        <h2 className="text-center mt-3" style={{ color: 'rgba(98,171,0,255)' }}>Add New Admin</h2>
                    </Zoom>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-1 mb-5">
                        <div className="form-group">
                            <label  htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" {...register("email")} />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Name</label>
                            <input type="text" className="form-control" {...register("name", { required: true })} />
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