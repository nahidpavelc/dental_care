import userEvent from '@testing-library/user-event';
import React from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import logo1 from '../../images/logo/logo1.png';
import Login from '../Login/Login';

const Header = () => {
    const { user, logout } = useFirebase();

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
                            {user?.email && <button type="button" class="btn btn-secondary btn-lg">{user.displayName}</button>}
                            <Nav.Link as={Link} to="/login"><Button variant="outline-success">Signup/login</Button>{' '}</Nav.Link>
                            <span></span>
                            <Nav.Link as={Link} to="/">
                                {user?.email && <Button onClick={logout} variant="outline-warning">Logout</Button>}
                            </Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;