import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import { auth } from '../ConfigFirebase/Firebase';
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
            console.log(email);

            
          } else {
          
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
          {auth.currentUser ? <h1>Welcome To OneStopEd</h1> : <h5>Please Login</h5>}
          </>
          <>
          </>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address{UseName}</Form.Label>
            <Form.Control type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"   onChange={(event)=>{
  setPassword(event.target.value)}}/>
      </Form.Group>
          <Button variant="primary" type="submit" onClick={Login}>
            Login
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Signin
