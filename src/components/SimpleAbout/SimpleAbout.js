import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../images/andrew-ebrahim-zRwXf6PizEo-unsplash.jpg'
import img2 from '../../images/santi-vedri-O5EMzfdxedg-unsplash.jpg'
import img3 from '../../images/stephen-andrews-u0zTce7KNlY-unsplash.jpg'
const SimpleAbout = () => {
    return (
        <div className="about-section">
                <div className="container">
                    <div className="row  py-5">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img className = 'img-fluid' src={img1} alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <img className = 'img-fluid' src={img2} alt="" />
                                </div>
                                <div className="col-lg-12 mt-4">
                                    <img className = 'img-fluid' src={img3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="about-details text-center">
                                <h1>About Us</h1>
                                <h4>We Are Here To Bring Fun Life To Your Kids</h4>
                                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.
                                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. And if she hasn’t been rewritten, then they are still using her.</p>
                                <Link to= './about'>
                                <button className = 'btn btn-success fs-4 px-3'>More About Us</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default SimpleAbout;