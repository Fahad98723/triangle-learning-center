import React from 'react';
import './Banner.css'
const Banner = (props) => {
    return (
        <div className = 'banner-container d-flex align-items-center justify-content-end'>
            <div className="container">
            <div className="row ">
                <div className="col">
                    <h1 className = 'mb-3'>Your Kids <span className = 'text-warning'>Triangle Learning Centre</span></h1>
                    <p>We will help your child to make a great and best future for him or her we will always help[ them we provide our best for childrens best and a greate future For making their futuure best we will do our best </p>
                    {props.children}
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;