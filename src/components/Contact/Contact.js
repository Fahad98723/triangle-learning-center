import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import contactImg from '../../images/undraw_Contract_re_ves9.png'
import Banner from '../Banner/Banner';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container py-5">
            <div className="row">
            <div className="col-lg-8">
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <button className="btn btn-danger">Send</button>
                </Form>
            </div>
            <div className="col-lg-4">
                <img className = 'img-fluid' src={contactImg} alt="" />
            </div>
        </div>
        <div className="contact-info text-center py-5">
           
           <Card>
            <div className="details py-5">
            <h1>Contact Info</h1>
                <p>Address : 34 Street Name, City Name Here, United States</p>
                <p>Phone:
                +1 242 4942 290</p>
                <p>Email:
                info@yourdomain.com
                </p>
            </div>
           </Card>
        </div>
    </div>
        </div>
    );
};

export default Contact;