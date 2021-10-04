import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import SimpleAbout from '../SimpleAbout/SimpleAbout';

const Home = () => {
    return (
        <div>
            <Banner>
                    <Link to = '/contact'>
                    <button  className = 'btn btn-warning fw-bold fs-4 px-3'>Contact Us</button>
                    </Link>
            </Banner>
            <SimpleAbout></SimpleAbout>
            <Services></Services>
        </div>
    );
};

export default Home;