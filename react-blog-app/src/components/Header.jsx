import { faBlog } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="#home"><FontAwesomeIcon icon={faBlog} bounce />Blog App</Navbar.Brand>
        
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link  href="#memes">Blog</Nav.Link>
            <Nav.Link  href="#memes">New Blog</Nav.Link>
            <Nav.Link  href="#memes">Contact</Nav.Link>
          </Nav>
        
      </Container>
    </Navbar>
  )
}

export default Header
