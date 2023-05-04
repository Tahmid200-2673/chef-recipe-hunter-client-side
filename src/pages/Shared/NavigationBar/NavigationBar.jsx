import React, { useContext } from 'react';

import { Button, Container, Nav, Navbar } from 'react-bootstrap';
 import banner from '../../../assets/bengali-foods.jpg'
 import Banner from '../Banner/Banner';
 import { Link } from 'react-router-dom';
 import { NavLink } from 'react-router-dom';
 import styled from 'styled-components';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaRegUser, FaUser, FaUserCircle } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import './NavigationBar.css';
import ReactRoundedImage from "react-rounded-image"

const StyledLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    text-decoration: underline;
  }
`;



const NavigationBar = () => {
    const {user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <Container className='mt-4'>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#home">Bengal Food</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto ">
              <StyledLink exact to="/" activeClassName="active" style={{ marginRight: '10px' }}>
                Home
              </StyledLink>
              <StyledLink to="/blog" activeClassName="active">
                Blog
              </StyledLink>
            </Nav>
            <Nav>
           
              
              {user ? (
  <div className="d-flex align-items-center">
    
    <a id="my-anchor-element">
    
    <ReactRoundedImage
 
  image={user.photoURL}
  roundedColor="#FFFFFF"
  imageWidth="50"
  imageHeight="50"
  roundedSize="13"
  hoverColor="#DD1144"
/>
    </a> 
  <Tooltip 
  anchorSelect="#my-anchor-element" 
  content={user.displayName} 
/>
<Button onClick={handleLogOut} variant="secondary" className='mx-3'>Logout</Button>
  </div>
) : (
  <Link to="/login">
    <Button variant="secondary">Login</Button>
  </Link>
)} 



            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </Container>
    );
};

export default NavigationBar;