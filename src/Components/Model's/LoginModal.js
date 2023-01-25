import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Form, Button, Card, Modal } from 'react-bootstrap';
import { useUserContext } from '../../Context/UserContext';
import '../../scss/Login.scss';

export default function LoginModal() {
  const {
    load,
    setLoad,
    showLoginModel,
    setShowLoginModel,
    isLogin,
    setIsLogin,
  } = useUserContext();
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });

  const handleUserDetails = (e) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      setLoad(true);
      const userInfo = {
        email: userDetails.email,
        password: userDetails.password,
      };
      const res = await axios.post(
        'http://localhost:8080/users/login',
        userInfo
      );
      if (res.data.ok) {
        setIsLogin(true);
        setLoad(false);

        handleClose();
      }
    } catch (err) {
      console.log(err);

      setLoad(false);
    }
  };

  const handleClose = () => setShowLoginModel(false);

  return (
    <>
      <Modal.Body className='LoginModalForm'>
        <Form onSubmit={handleLogIn} id='loginForm'>
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
              placeholder='Password'
              className='LoginInput'
              required
              min={6}
              id='password'
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
          form='loginForm'
          disabled={load}
        >
          {load ? 'Loading' : 'Login'}
        </Button>
      </Modal.Footer>
    </>
  );
}
