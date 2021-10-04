import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import SimpleService from '../SimpleService/SimpleService';

const Service = () => {
    //State declare for all services show in service page
    const [services,setSevices] = useState([])
    useEffect(() => {
        fetch('./service.json')
        .then(res => res.json())
        .then(data => setSevices(data))
    },[])
    return (
        
        <div>
        <Banner>
            <Link to = '/contact'>
            <button  className = 'btn btn-warning fw-bold fs-4 px-3'>Contact Us</button>
            </Link>
        </Banner>
        <div className= 'container py-5'>
        <h1 className = 'text-center mb-4'>Our Services</h1>
        <Row xs={1} md={4} className="">
            {
                services.map(service => <SimpleService 
                    key = {service._id}
                    service = {service}
                    ></SimpleService>)
            }
            </Row>
        </div>
        </div>
    );
};

export default Service;