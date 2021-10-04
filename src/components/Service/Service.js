import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';

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
                services.map(service => (<Col className = 'my-4'>
                <Card>
                    <Card.Img className = 'card-image' variant="top" src={service.image} />
                    <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text>
                        {service.price}
                        </Card.Text>
                        <button className= 'btn btn-success'>Enrole Now</button>
                    </Card.Body>
                </Card>
                </Col>))
            }
            </Row>
        </div>
        </div>
    );
};

export default Service;