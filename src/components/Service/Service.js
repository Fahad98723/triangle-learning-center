import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'
const Service = (props) => {
    const {name,image,price} = props.service
    return (
        <div>
            <Col>
            <Card>
                <Card.Img className = 'card-image' variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {price}
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </div>
    );
};

export default Service;