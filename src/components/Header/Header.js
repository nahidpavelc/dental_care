import React from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import logo1 from '../../images/logo/logo1.png';

const Header = () => {
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <Nav.Link href="/About us">About us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"><Button variant="outline-success">Login</Button>{' '}</Nav.Link>
                            <Nav.Link href="#deets"><Button variant="outline-warning">Signup</Button>{' '}</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;