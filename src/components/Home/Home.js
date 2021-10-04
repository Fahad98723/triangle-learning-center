import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import SimpleAbout from '../SimpleAbout/SimpleAbout';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SimpleAbout></SimpleAbout>
            <Services></Services>
        </div>
    );
};

export default Home;