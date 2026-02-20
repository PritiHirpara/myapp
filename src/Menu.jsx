import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
export function Menu() {

  return (<>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to="dashboard">Dashboard</Link>
            <Link className='nav-link' to="contact">Contact</Link>
            <Link className='nav-link' to="about">About</Link>
            <Link className='nav-link' to="GetProduct_Api">GetEmployee</Link>
            <Link className='nav-link' to="login">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>)

}