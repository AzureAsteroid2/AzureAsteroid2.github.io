import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <>
    <Navbar bg="light" expand="lg" className="fixed-top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="/">
            {/*<img src={logo} width={30} height={30} alt="Logo" /> {title}*/}
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="tabs" className="me-auto">
            <Nav.Item>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            </Nav.Item>
            <Nav.Item>
            <LinkContainer to="/banana">
              <Nav.Link>Banana</Nav.Link>
            </LinkContainer>
            </Nav.Item>
            <Nav.Item>
            <LinkContainer to="/visual">
              <Nav.Link>Visual Novel</Nav.Link>
            </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;
