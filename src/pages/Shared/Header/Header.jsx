import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import banner from '../../../assets/bengali-foods.jpg'
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <Container className='mt-4'>
           
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container>
                <Navbar.Brand href="#home">Bengal Food</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                          
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="secondary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           
        </Container>
    );
};

export default Header;