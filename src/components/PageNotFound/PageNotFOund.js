import React from 'react';
import './PageNotFound.css'
const PageNotFOund = () => {
    return (
        <div className = 'notfound-section text-center text-danger d-flex justify-content-center align-items-center'>
            <div>
            <h3 className = 'fs-1'>404</h3>
            <h3>Oops! Sorry Page Not Found</h3>
            </div>
        </div>
    );
};

export default PageNotFOund;