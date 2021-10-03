import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
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
                services.slice(0,4).map(serivce => <Service 
                    key = {serivce._id}
                    service = {serivce}
                    ></Service>)
            }
           </Row>
        </div>
    );
};

export default Services;