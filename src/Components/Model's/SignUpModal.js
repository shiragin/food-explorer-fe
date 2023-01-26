import axios from 'axios';
import { useContext, useState } from 'react';
import { Button, Card, Form, Modal } from 'react-bootstrap';
import { useUserContext } from '../../Context/UserContext';
import '../../scss/Login.scss';

export default function SignUpModal() {
  const {
    load,
    setLoad,
    showLoginModel,
    setShowLoginModel,
    isLogin,
    setIsLogin,
    logUser,
    setLogUser,
    token,
    setToken,
  } = useUserContext();

  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repassword: '',
  });

  const handleUserDetails = (e) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      setLoad(true);
      const res = await axios.post(
        'http://localhost:8080/users/signup',
        userDetails
      );
      if (res.data.token) {
        setLogUser(res.data.user);
        setToken(res.data.token);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        setIsLogin(true);
        handleClose();
        setLoad(false);
      }
    } catch (err) {
      console.log(err);
      alert(err.response.data);
    }
  };

  const handleClose = () => setShowLoginModel(false);
  return (
    <>
      <Modal.Body className='LoginModalForm'>
        <Form onSubmit={handleSignUp} id='signupForm'>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='First Name'
              className='LoginInput'
              id='firstName'
              required
              onChange={handleUserDetails}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Last Name'
              className='LoginInput'
              id='lastName'
              required
              onChange={handleUserDetails}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Email'
              className='LoginInput'
              required
              id='email'
              onChange={handleUserDetails}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              className='LoginInput'
              required
              min={6}
              id='password'
              onChange={handleUserDetails}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm your password'
              required
              min={6}
              id='repassword'
              className='LoginInput'
              onChange={handleUserDetails}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button
          variant='primary'
          type='submit'
          form='signupForm'
          disabled={load}
        >
          {load ? 'Loading' : 'Sign Up'}
        </Button>
      </Modal.Footer>
    </>
  );
}
