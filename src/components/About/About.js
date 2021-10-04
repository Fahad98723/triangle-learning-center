import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SimpleAbout from '../SimpleAbout/SimpleAbout';
import Teacher from '../Teacher/Teacher';
import img1 from '../../images/avel-chuklanov-5iseEuoW7mw-unsplash.jpg'
import img2 from '../../images/ben-white-83tkHLPgg2Q-unsplash.jpg'
import img3 from '../../images/neonbrand-zFSo6bnZJTw-unsplash.jpg'
import img4 from '../../images/ben-mullins-je240KkJIuA-unsplash.jpg'
import './About.css'
import Banner from '../Banner/Banner';
const About = () => {
    //state use for teachers or team members details show 
    const [teachers , setTeachers] = useState([])
    useEffect(() => {
        fetch('./teacher.json')
        .then(res => res.json())
        .then(data => setTeachers(data))
    },[])
    return (
        <div>
            <Banner></Banner>
            <div className = 'container py-5'>
            <SimpleAbout></SimpleAbout>
            <div className="about-heading text-center">
                <h4>The Team</h4>
                <h1>Meet Our Team</h1>
                <p> ‘A teacher is one who makes himself progressively unnecessary.’ –Thomas Carruthers</p>
            </div>

            
            <Row xs={1} md={3} className="">
                {
                    teachers.map(teacher => <Teacher teacher = {teacher}></Teacher>)
                }
            </Row>


            <div className="gallery py-3 text-center">
                <h1>Students Gallery</h1>
                <div className="row g-0 mt-3">
                    <div className="col-lg-3">
                        <img className= 'img-fluid' src={img1} alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img className= 'img-fluid' src={img2} alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img className= 'img-fluid' src={img3} alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img className= 'img-fluid' src={img4} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;