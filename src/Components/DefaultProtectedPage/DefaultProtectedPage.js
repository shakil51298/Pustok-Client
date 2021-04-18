import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../App';

const DefaultProtectedPage = ({ children, ...rest }) => {
    const [isAdmin, setIsAdmin] = useState(true)
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    useEffect(() => {
        const url = 'http://localhost:5000/isAdmin'
        const loggedinuserEmial = loggedInUser.email;
        const postMethod = {
            method: 'POST',
            body: JSON.stringify({ loggedinuserEmial }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }

        fetch(url, postMethod)
            .then(res => res.json())
            .then(isAdmindata =>{
                setIsAdmin(isAdmindata);
            })
    }, [loggedInUser.email])

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAdmin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/*",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default DefaultProtectedPage;
