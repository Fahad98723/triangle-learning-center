import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Teacher = (props) => {
    const {name,position,details,image} = props.teacher
    return (
      <Col className= 'mb-5'>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title> <h3>{name}</h3> </Card.Title>
          <Card.Title>{position}</Card.Title>
          <Card.Text>
           {details}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Teacher;