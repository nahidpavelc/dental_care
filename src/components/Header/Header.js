import React from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo1 from '../../images/logo/logo1.png';

const Header = () => {
    return (
        <>
            <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt="Logo"
                            src={logo1}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Dental Care
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/About">About us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/login"><Button variant="outline-success">Signup/login</Button>{' '}</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;