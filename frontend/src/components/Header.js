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
        <LinkContainer  to="/books">
        <Nav.Link><Navbar.Brand>BOOK LOVERS</Navbar.Brand></Nav.Link>
          </LinkContainer>
          <Nav className="mr-auto">
          <LinkContainer  to="/add">
            <Nav.Link>ADD BOOK</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/books">
           <Nav.Link>BOOKS</Nav.Link>
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