import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from '../../firebase.config';
import { userContext } from '../../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavigationBar from '../CommonComponents/NavigationBar/NavigationBar';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const LoginPage = () => {


    let history = useHistory();
    let location = useLocation();

    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    console.log(loggedInUser.uid);
    let { from } = location.state || { from: { pathname: "/" } };
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                setLoggedInUser(user);
                history.replace(from);
            })
            .catch((error) => {
                var errorMessage = error.message;
                toast.error(errorMessage, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            });
    }
    const handleGooglelogout = () => {
        firebase.auth().signOut().then(() => {
            setLoggedInUser('')
        }).catch((error) => {
            // An error happened.
        });

    }


    const handleSubmitForm = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <NavigationBar />
            <div className="text-center mt-5">
                <Link to="/" className="navBrand" style={{ color: 'rgba(98,171,0,255)', fontSize: '35px', fontWeight: '1000' }}>
                    <FontAwesomeIcon className="pr-2" icon={faBookOpen} />
                PUSTOK</Link>
            </div>
            <div className="container-fluid mt-5" style={{ maxWidth: '50%' }}>
                <form action="" onSubmit={handleSubmitForm}>
                    <input disabled placeholder="email" type="email" className="form-control" />
                    <br />
                    <input disabled placeholder="password" type="password" className="form-control" />
                    <br />
                    <div className="text-center">
                        {
                            !loggedInUser.email ? <button onClick={handleGoogleSignIn} className=" btn btn-outline-success w-50">Continue With Google</button>
                                :
                                <button onClick={handleGooglelogout} className=" btn btn-outline-success w-50 m-1">Log Out</button>
                        }
                        <p className="mt-2">Dont have an account? <a href="#">Create an account</a> </p>
                    </div>
                </form>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};
export default LoginPage;