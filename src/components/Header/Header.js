import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';
import './Header.css'
const Header = () => {
    return (
        <div>
           <Navbar bg="dark" variant="dark" className = 'navigation'>
                <Container>
                    <Navbar.Brand className='fs-2' to="/home">Triangle</Navbar.Brand>
                    <Nav className="ms-auto">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/service">Service</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar> 
            <Banner></Banner>
        </div>
    );
};

export default Header;