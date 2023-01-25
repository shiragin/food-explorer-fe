import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from "react-router-bootstrap";



export default function MainNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Food Explorer</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/search">
              <Nav.Link>Search</Nav.Link>
            </LinkContainer>
            <NavDropdown title="User" id="basic-nav-dropdown">
            <LinkContainer to="/myProfile">
              <Nav.Link>My profile</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/myRecipes">
              <Nav.Link>My Recipes</Nav.Link>
            </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/logIn">
              <Nav.Link>LogIn</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}