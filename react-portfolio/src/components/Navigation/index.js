import React from 'react';
import { Navbar, Nav} from 'react-bootstrap'




const Navigation = ({ onClick }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#aboutMe" onClick={() => onClick('About Me')}>
            About Me
          </Nav.Link>
          <Nav.Link href="#portfolio" onClick={() => onClick('Portfolio')}>
            Portfolio
          </Nav.Link>
          <Nav.Link href="#contact" onClick={() => onClick('Contact')}>
            Contact
          </Nav.Link>
          <Nav.Link href="#resume" onClick={() => onClick('Resume')}>
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};


export default Navigation;
