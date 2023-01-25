import axios from 'axios';
import { useContext, useState } from 'react';
import { Button, Card, Form, Modal } from 'react-bootstrap';
import { useUserContext } from '../Context/UserContext';

export default function SignUpModal() {
  const {
    load,
    setLoad,
    showLoginModel,
    setShowLoginModel,
    isLogin,
    setIsLogin,
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
      if (res.data.ok) {
        alert('please login');
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
      <Modal.Header>
        <h5> Please fill in your Information to register as a user</h5>
      </Modal.Header>
      <Modal.Body className='LoginModalForm'>
        <form onSubmit={handleSignUp} id='signupForm'>
          <b>First Name</b>{' '}
          <input
            type='text'
            placeholder='First Name'
            className='LoginInput'
            id='firstName'
            required
            onChange={handleUserDetails}
          />
          <b>Last Name</b>
          <input
            type='text'
            placeholder='Last Name'
            className='LoginInput'
            id='lastName'
            required
            onChange={handleUserDetails}
          />
          <b>Email</b>
          <input
            type='email'
            placeholder='Email'
            className='LoginInput'
            required
            id='email'
            onChange={handleUserDetails}
          />
          <b>Password</b>
          <input
            type='password'
            placeholder='Password'
            className='LoginInput'
            required
            min={6}
            id='password'
            onChange={handleUserDetails}
          />
          <b>RePassword</b>
          <input
            type='password'
            placeholder='RePassword'
            required
            min={6}
            id='repassword'
            className='LoginInput'
            onChange={handleUserDetails}
          />
        </form>
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
          {load ? 'Loading' : 'SignUp'}
        </Button>
      </Modal.Footer>
    </>
  );
}
