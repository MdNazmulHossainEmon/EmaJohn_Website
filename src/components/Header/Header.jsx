import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../images/Logo.svg"
import "./Header.css"

const Header = () => {
    return (
        <Navbar className='navbar px-5' expand="lg" >
            <Container fluid>
                <img src={logo} alt="" />
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='text-white' href="#action1">Order</Nav.Link>
                        <Nav.Link className='text-white' href="#action1">Order Review</Nav.Link>
                        <Nav.Link className='text-white' href="#action1">Manage Inventory</Nav.Link>
                        <Nav.Link className='text-white' href="#action1">Login</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
        //    className="bg-body-tertiary"
    );
};

export default Header;