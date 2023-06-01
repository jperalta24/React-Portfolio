import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

//test
const Navigation = ({ activeSection, onClick }) => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#aboutMe" onClick={() => onClick('AboutMe')} active={activeSection === 'AboutMe'}>About Me</Nav.Link>
          <Nav.Link href="#portfolio" onClick={() => onClick('Portfolio')} active={activeSection === 'Portfolio'}>Portfolio</Nav.Link>
          <Nav.Link href="#contact" onClick={() => onClick('Contact')} active={activeSection === 'Contact'}>Contact</Nav.Link>
          <Nav.Link href="#resume" onClick={() => onClick('Resume')} active={activeSection === 'Resume'}>Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
