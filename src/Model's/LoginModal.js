import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { useUserContext } from "../Context/UserContext";

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
    email: "",
    password: "",
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
        "http://localhost:8080/users/login",
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
      <Modal.Header></Modal.Header>
      <Modal.Body className="LoginModalForm">
        <form onSubmit={handleLogIn} id="loginForm">
          <b>Email</b>{" "}
          <input
            type="email"
            placeholder="Email"
            className="LoginInput"
            required
            id="email"
            onChange={handleUserDetails}
          />
          <b>Password</b>{" "}
          <input
            type="password"
            placeholder="Password"
            className="LoginInput"
            required
            min={6}
            id="password"
            onChange={handleUserDetails}
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          type="submit"
          form="loginForm"
          disabled={load}
        >
          {load ? "Loading" : "Login"}
        </Button>
      </Modal.Footer>
    </>
  );
}
