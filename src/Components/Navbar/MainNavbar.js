import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { useUserContext } from "../../Context/UserContext";
import LoginModal from "../../Model's/LoginModal";
import SignUpModal from "../../Model's/SignUpModal";
import Switch from "../Switch/Switch";

export default function MainNavbar() {
  const {
    load,
    setLoad,
    showLoginModel,
    setShowLoginModel,
    isLogin,
    setIsLogin,
  } = useUserContext();

  const [showSignUp, setShowSignUp] = useState(false);


  const handleClose = () => setShowLoginModel(false);
  const handleLogOut =()=>{

  }

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
            {isLogin && <NavDropdown title="User" id="basic-nav-dropdown">
              <LinkContainer to="/myProfile">
                <Nav.Link>My profile</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/myRecipes">
                <Nav.Link>My Recipes</Nav.Link>
              </LinkContainer>
            </NavDropdown>}
          </Nav>
          <Modal
            show={showLoginModel}
            onHide={handleClose}
            keyboard={false}
            centered={true}
            backdrop="static"
          >
            <Switch
              falseName={"Login"}
              trueName={"SignIn"}
              state={showSignUp}
              setState={setShowSignUp}
            />

            {showSignUp ? <SignUpModal /> : <LoginModal />}
          </Modal>{" "}
          {isLogin ? (
            <Button variant="primary" onClick={handleLogOut}>
              Logout
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                setShowLoginModel(true);
              }}
            >
              Login
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
