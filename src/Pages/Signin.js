import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { auth } from '../ConfigFirebase/Firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Signin = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Login = async () => {

    const auth = getAuth();
    await signInWithEmailAndPassword(auth, Email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
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
          {auth.currentUser ? <h1>Logged In</h1> : <h1>Not Logged In</h1>}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
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
