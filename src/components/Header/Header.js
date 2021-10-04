import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
           <Navbar fixed = 'top' bg="dark" variant="dark" className = 'navigation'>
                <Container>
                    <NavLink className='fs-2 logo' to="/home">Triangle  LC</NavLink>
                    <Nav className="ms-auto">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/service">Service</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar> 
        </div>
    );
};

export default Header;