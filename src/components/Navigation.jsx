import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';

export default function Navigation() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Derek Stanley-Howarth</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to='/'><Nav.Link>Home</Nav.Link></LinkContainer>
              <LinkContainer to='/About'><Nav.Link>About Me</Nav.Link></LinkContainer>
              <LinkContainer to='/Contact'><Nav.Link>Contact</Nav.Link></LinkContainer>
              <LinkContainer to='/Resume'><Nav.Link>Resume</Nav.Link></LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}