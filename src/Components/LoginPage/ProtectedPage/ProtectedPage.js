import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../../App';

const ProtectedPage = ({ children, ...rest }) => {
    const getlocalStorageUid = sessionStorage.getItem('userEmail') 
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    let email = loggedInUser.email;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                (email || getlocalStorageUid) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default ProtectedPage;