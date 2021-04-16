import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../../App';

const ProtectedPage = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    let email = loggedInUser.email;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                email ? (
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