import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { useUserContext } from '../../Context/UserContext';
import LoginModal from "../Model's/LoginModal";
import SignUpModal from "../Model's/SignUpModal";
import Switch from '../Switch/Switch';
import '../../scss/Navbar.scss';
import { BiWorld } from 'react-icons/bi';

export default function MainNavbar() {
  const {
    showLoginModel,
    setShowLoginModel,
    isLogin,
    setIsLogin,
    logUser,
    setLogUser,
    token,
  } = useUserContext();

  // useEffect(() => {
  //   axios.post("http://localhost:8080/users", {
  //     headers: { authorization: `Bearer ${token}` },
  //   }).then((res)=>{
  //     if (res.data.ok) {
  //       setLogUser(res.data.user)
  //     }
  //   });
  // }, []);
  useEffect(() => {
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    setLogUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  const handleClose = () => setShowLoginModel(false);
  const handleLogOut = () => {
    setIsLogin(false);
    setLogUser({});
    localStorage.clear();
  };

  return (
    <Navbar bg='light' expand='sm'>
      <Container className='nav'>
        <LinkContainer to='/'>
          <Navbar.Brand className='logo'>
            Food
            <BiWorld />
            <span>Explorer</span>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <LinkContainer to='/search'>
              <Nav.Link>Search</Nav.Link>
            </LinkContainer>

            {isLogin && (
              <LinkContainer to="/my-recipes">
                <Nav.Link>Recipes</Nav.Link>
              </LinkContainer>
            )}
            {isLogin ? (
              <Button
                className='login'
                variant='primary'
                onClick={handleLogOut}
              >
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
        {/* </div> */}
      </Container>
    </Navbar>
  );
}
