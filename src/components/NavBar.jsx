import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div>
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">FlipKart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">
              <Link to="/contact"> Contact</Link>
              </Nav.Link>
            <Nav.Link href="#pricing">
             <Link to="/about" >About us</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default NavBar