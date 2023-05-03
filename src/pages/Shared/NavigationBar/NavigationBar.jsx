import React, { useContext } from 'react';

import { Button, Container, Nav, Navbar } from 'react-bootstrap';
 import banner from '../../../assets/bengali-foods.jpg'
 import Banner from '../Banner/Banner';
 import { Link } from 'react-router-dom';
 import { NavLink } from 'react-router-dom';
 import styled from 'styled-components';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaRegUser, FaUser, FaUserCircle } from 'react-icons/fa';
import './NavigationBar.css';

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
             {/* {user && <FaUserCircle style={{fontSize: "2rem"}}></FaUserCircle>}  */}
             {/* {
                    user ? <>
                        <span>{user.photoURL}</span>
                        <button onClick={handleLogOut} className="btn btn-xs">Sign out</button>
                    </> : <Link to="/login">Login </Link>
                }
            */}
              {/* {user && <div>
                <h3>User: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>
            }  */}
        
        {/* {
                    user ? <>
                        <span className=" text-light">{user.email}</span>
                        <Button onClick={handleLogOut} variant="secondary">Logout</Button>
                    </> :  <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                } */}

{/* {user ? (
                <div className="d-flex align-items-center">
                  <FaUserCircle
                    onClick={handleLogOut}
                    style={{ fontSize: '2rem' }}
                    title={user.photoURL}
                    className="text-light me-2"
                  />
                 
                </div>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )} */}
              
              {user ? (
  <div className="d-flex align-items-center">
     <FaUserCircle
      onClick={handleLogOut}
      style={{ fontSize: '2rem' }}
      src={user.photoURL}
      className="text-light me-2"
    />
    <span className="text-light" title={user.displayName}>{user.name}</span>
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