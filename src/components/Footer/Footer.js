import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
       <div className = 'bg-dark text-white'>
            <div className = 'container py-5'>
            <div className="row align-items-center">
                <div className="col-lg-4">
                    <h3>About Us</h3>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. And if she hasn’t been rewritten, then they are still using her..</p>
                    <div className="email">
                        <input className= 'py-1' type="email" name="" id="" /> <button className = 'btn btn-danger rounded'>Send</button>
                    </div>
                </div>
                <div className="col-lg-4 navigation text-center">
                    <div className="footer-navigation">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/service">Service</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h3>Contact</h3>
                    <h4><i className="fas fa-phone"></i> : 0645031350</h4>
                    <h4><i className="fas fa-phone"></i> : 100031350</h4>
                    <h4><i className="fas fa-map-marked-alt"></i> : 3D.Road,Ishfahan,Iran</h4>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Footer;