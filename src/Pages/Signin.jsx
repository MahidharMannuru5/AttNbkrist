import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { auth } from '../ConfigFirebase/Firebase';
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();

  const [Email, setEmail] = useState(localStorage.getItem('Email'));
  const [password, setPassword] = useState(localStorage.getItem('password'));
  const [UseName, setUseName] = useState("");
  useEffect(() => {
    const user = auth.currentUser;
if (user !== null) {
  const displayName = user.displayName;
  setUseName(displayName);
}

  }, [UseName]);
  const Login = async () => {

    await signInWithEmailAndPassword(auth, Email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        onAuthStateChanged(auth, (user) => {
          if (user) {
          
            const uid = user.uid;
            const email = user.email;
            setUseName(email);
            setEmail(" ");
            setPassword(" ");
            console.log(email);
            navigate("/");
          } else {
            console.log("No user is signed in.");
          
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <>
      <div className="container">
        <Form>
          <>
          {auth.currentUser ? <h1>Welcome</h1> : <h5>Please Login</h5>}
          </>
          <>
          </>
          <Form.Group className="mb-3 justify-content-center" controlId="formBasicEmail">
            <Form.Label>Email address{UseName}</Form.Label>
            <Form.Control type="email" value={Email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}  onChange={(event)=>{
                  setPassword(event.target.value)}}/>
      </Form.Group>
      <div   className="new"  onClick={()=>{localStorage.setItem("password",password)
        localStorage.setItem("Email", Email);
        ;}}>

      <input type="checkbox" name="tripType"/>Remember Me</div>
          <Button variant="primary" type="submit" onClick={Login}>
            Login
          </Button>
        </Form>
        <div className="container mt-3">
        <p>Don't have an account? <Link to="/SignUp">Sign up here</Link>.</p>
        </div>
      </div>
    </>
  )
}

export default Signin
