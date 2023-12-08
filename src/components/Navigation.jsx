// react-bootstrap recommends importing components individually, to save on the amount of code you send to the client
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
// special component for making bootstrap and router work together (see below)
import {LinkContainer} from 'react-router-bootstrap';

// bring in the currentPage state variable from Header to adjust css
export default function Navigation({currentPage, setCurrentPage}) {
    return (
      // react-bootstrap navbar components
        <Navbar expand="lg" data-bs-theme="dark" bg="dark">
        <Container>
          <Navbar.Brand>Derek Stanley-Howarth</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* We wrap bootstrap links in a link container so they can use router 'to' props */}
                <LinkContainer to='/'>
                  <Nav.Link 
                  // Each Nav link includes a change to the currentPage state variable, and a corresponding change to the CSS
                  // to mark the current active page's nav link. 
                    onClick={() => setCurrentPage('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} >
                    About Me
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/Portfolio'>
                  <Nav.Link 
                    onClick={() => setCurrentPage('Portfolio')}  
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} >
                    Portfolio
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/Resume'>
                  <Nav.Link 
                    onClick={() => setCurrentPage('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} >
                    Resume
                  </Nav.Link>
                </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}