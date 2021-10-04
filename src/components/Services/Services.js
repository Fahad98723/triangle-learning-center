import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SimpleService from '../SimpleService/SimpleService';

const Services = () => {
    //State declare for home page 4 services part shows
    const [services,setSevices] = useState([])
    useEffect(() => {
        fetch('./service.json')
        .then(res => res.json())
        .then(data => setSevices(data))
    },[])
    return (
        <div className='container py-5'>
            <h1 className = 'text-center mb-4'>Our Services</h1>
            <Row xs={1} md={4} className="">
            {
                services.slice(0,4).map(service => <SimpleService 
                    key = {service._id}
                    service = {service}
                    ></SimpleService>)
            }
           </Row>
        </div>
    );
};

export default Services;