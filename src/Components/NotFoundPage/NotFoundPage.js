import React from 'react';
import NavigationBar from '../CommonComponents/NavigationBar/NavigationBar';

const NotFoundPage = () => {
    return (
        <div className="">
            <NavigationBar/>
            <div className="container mt-5 text-center">
                <h1 className="mt-5">Page not found!!!!</h1>
                <h1>Error 404</h1>
            </div>
        </div>
    );
};

export default NotFoundPage;