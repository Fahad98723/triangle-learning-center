import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Teacher from '../Teacher/Teacher';

const About = () => {
    const [teachers , setTeachers] = useState([])
    useEffect(() => {
        fetch('./teacher.json')
        .then(res => res.json())
        .then(data => setTeachers(data))
    },[])
    return (
        <div>
            <h4>The Team</h4>
            <h1>Meet Our Team</h1>
            <p> ‘A teacher is one who makes himself progressively unnecessary.’ –Thomas Carruthers</p>
            <Row xs={1} md={3} className="">
                {
                    teachers.map(teacher => <Teacher teacher = {teacher}></Teacher>)
                }
            </Row>
        </div>
    );
};

export default About;