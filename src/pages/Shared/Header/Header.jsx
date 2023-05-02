 import React from 'react';
 import { Button, Container, Nav, Navbar } from 'react-bootstrap';
 import banner from '../../../assets/bengali-foods.jpg'
 import Banner from '../Banner/Banner';
 import { Link } from 'react-router-dom';
 import { NavLink } from 'react-router-dom';
  import './Header.css';

// const Header = () => {
//     return (
//         <Container className='mt-4'>
           
//             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
//                 <Container>
//                 <Navbar.Brand href="#home">Bengal Food</Navbar.Brand>
//                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                     <Navbar.Collapse id="responsive-navbar-nav">
//                         {/* <Nav className="mx-auto ">
//                             <Link to="/">Home</Link>
//                             <Link to="blog">Blog</Link>
                          
//                         </Nav> */}
//                         <Nav className="mx-auto ">
//   <NavLink exact to="/" activeClassName="active">
//     Home
//   </NavLink>
//   <NavLink to="/blog" activeClassName="active">
//     Blog
//   </NavLink>
// </Nav>

//                         <Nav>
//                             <Nav.Link href="#deets">Profile</Nav.Link>
//                             <Nav.Link eventKey={2} href="#memes">
//                                 <Button variant="secondary">Login</Button>
//                             </Nav.Link>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
           
//         </Container>
//     );
// };

// export default Header;

import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <Container className='mt-4'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#home">Bengal Food</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto ">
              <StyledLink exact to="/" activeClassName="active">
                Home
              </StyledLink>
              <StyledLink to="/blog" activeClassName="active">
                Blog
              </StyledLink>
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