import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <>
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">BOOK LOVERS</Navbar.Brand>
          <Nav className="mr-auto">
          <LinkContainer  to="/add">
            <Nav.Link>ADD BOOK</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/library">
           <Nav.Link>LIBRARY</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/about">
            <Nav.Link>ABOUT US</Nav.Link>
          </LinkContainer>
            
          </Nav>
        </Container>
      </Navbar>
    </>

   
  )
}

export default Header