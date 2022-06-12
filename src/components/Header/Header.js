import React from 'react';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import logo1 from '../../images/logo/logo1.png';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();

    return (

        <>
            <Navbar className='py-0 fixed-top' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img
                        alt="Logo"
                        src={logo1}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    /> {' '}
                    Dental Care
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto" id="d-flex align-items-center nav-3">
                            <Nav.Link className='link-3 text-white' as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link className='link-3 text-white' as={HashLink} to="/services#services">Services</Nav.Link>
                            <Nav.Link className='link-3 text-white' as={HashLink} to="/About">About us</Nav.Link>
                        </Nav>

                        <Nav id="nav-3">

                            {/* {user?.email && <Nav.Link as={HashLink} to="/addservice" className=" text-danger d-flex align-items-center link-3" style={{}}>
                                <span className="text-white">ADMIN</span>
                            </Nav.Link>} */}

                            {user?.email ?
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto" id="nav-3">
                                        <NavDropdown
                                            title={
                                                <div className="pull-left">
                                                    <img className="rounded-circle"
                                                        src={user.photoURL}
                                                        alt="user pic"
                                                        height="40"
                                                        width="40"
                                                    />
                                                    {user.username}
                                                </div>
                                            }
                                            id="basic-nav-dropdown">

                                            <Nav.Link className='link-3'>
                                                <span className="text-danger fw-bold">{user.displayName}</span>
                                            </Nav.Link>

                                            <NavDropdown.Divider />
                                            <Nav.Link className='link-3' as={HashLink} to="/Services">
                                                <span className="text-dark">Order now</span>
                                            </Nav.Link>
                                            <Nav.Link className='link-3' as={HashLink} to="/myOrder">
                                                <span className="text-dark">My Orders</span>
                                            </Nav.Link>
                                            <Nav.Link className='link-3' as={HashLink} to="/MyCart">
                                                <span className="text-dark">Manage-Orders</span>
                                            </Nav.Link>
                                            <Nav.Link as={HashLink} to="/">
                                                <Button onClick={logout} variant="warning">Logout</Button>
                                            </Nav.Link>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                                :
                                <Nav.Link as={HashLink} to="/Login">
                                    <Button className="btn btn-success">Login</Button>
                                </Nav.Link>
                            }




                            {/* <Nav.Link as={HashLink} to="/MyCart">
                                <Button className="btn btn-success"><img className="ms-1" style={{ width: "25px" }} src={logo2} alt="" />My Orders</Button>
                            </Nav.Link>
                            <Nav.Link as={HashLink} to="/AddService">
                                <Button className="btn btn-danger"><img style={{ width: "25px" }} src={logo3} alt="" />Admin</Button>
                            </Nav.Link> */}

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>


        // <>
        //     <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
        //         <Container>
        //             <Navbar.Brand href="#home">
        //                 <img
        //                     alt="Logo"
        //                     src={logo1}
        //                     width="30"
        //                     height="30"
        //                     className="d-inline-block align-top"
        //                 />{' '}
        //                 Dental Care
        //             </Navbar.Brand>
        //             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //             <Navbar.Collapse id="responsive-navbar-nav">

        //                 <Nav className="me-auto">
        //                     <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
        //                     <Nav.Link as={HashLink} to="/services">Services</Nav.Link>
        //                     <Nav.Link as={HashLink} to="/About">About us</Nav.Link>
        //                 </Nav>
        //                 <Nav>
        //                     {/* {user?.email && <span >{user.photoURL}</span>} */}
        //                     {user?.email && <button type="button" class="btn btn-secondary btn-lg">{user.displayName}</button>}

        //                     {user.email ?
        //                         <Nav.Link as={HashLink} to="/">
        //                             <Button onClick={logout} variant="outline-warning">Logout</Button>
        //                         </Nav.Link> :
        //                         <Nav.Link as={HashLink} to="/login">
        //                             <Button variant="outline-success">Signup</Button>
        //                         </Nav.Link>
        //                     }



        //                 </Nav>

        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>
        // </>
    );
};

export default Header;