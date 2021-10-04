import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SimpleService.css'
const SimpleService = (props) => {
    //home page service section 4 items
    const {name,image,price,details} = props.service
    return (
        <div>
            <Col className = 'my-4'>
            <Card>
                <Card.Img className = 'card-image' variant="top" src={image} />
                <Card.Body>
                    <Card.Title class='fs-4'>{name}</Card.Title>
                    <Card.Text>
                    {details}
                    </Card.Text>
                    <Card.Footer>{price}</Card.Footer>
                    <button className= 'btn btn-success mt-3'>Enrole Now</button>
                </Card.Body>
            </Card>
            </Col>
        </div>
    );
};

export default SimpleService;