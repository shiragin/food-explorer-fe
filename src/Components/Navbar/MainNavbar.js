import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { useUserContext } from '../../Context/UserContext';
import LoginModal from "../Model's/LoginModal";
import SignUpModal from "../Model's/SignUpModal";
import Switch from '../Switch/Switch';
import '../../scss/Navbar.scss';

export default function MainNavbar() {
  const { showLoginModel, setShowLoginModel, isLogin } = useUserContext();

  const [showSignUp, setShowSignUp] = useState(false);

  const handleClose = () => setShowLoginModel(false);
  const handleLogOut = () => {};

  return (
    <Navbar bg='light' expand='lg'>
      <Container className='nav'>
        <LinkContainer to='/'>
          <Navbar.Brand className='logo'>
            Food <span>Explorer</span>
          </Navbar.Brand>
        </LinkContainer>
        <div>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <LinkContainer to='/search'>
                <Nav.Link>Search</Nav.Link>
              </LinkContainer>
              {isLogin && (
                <NavDropdown title='User' id='basic-nav-dropdown'>
                  <LinkContainer to='/myProfile'>
                    <Nav.Link>My profile</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/myRecipes'>
                    <Nav.Link>My Recipes</Nav.Link>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
          <Modal
            show={showLoginModel}
            onHide={handleClose}
            keyboard={false}
            centered={true}
            backdrop='static'
          >
            <Switch
              falseName={'Log In'}
              trueName={'Sign Up'}
              state={showSignUp}
              setState={setShowSignUp}
            />

            {showSignUp ? <SignUpModal /> : <LoginModal />}
          </Modal>{' '}
          {isLogin ? (
            <Button className='login' variant='primary' onClick={handleLogOut}>
              Logout
            </Button>
          ) : (
            <Button
              variant='primary'
              className='login'
              onClick={() => {
                setShowLoginModel(true);
              }}
            >
              Log In
            </Button>
          )}
        </div>
      </Container>
    </Navbar>
  );
}
