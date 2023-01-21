import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { auth } from '../ConfigFirebase/Firebase';
import { sendSignInLinkToEmail } from "firebase/auth";

const actionCodeSettings = {
  url: 'https://mahidharmannuru5.github.io/AttNbkrist/',
  handleCodeInApp: true
};

const Signin = () => {
  const [Email, setEmail] = useState("");
  const Login = async () => {
    await sendSignInLinkToEmail(auth, Email, actionCodeSettings)
      .then(() => {
        console.log("Email sent.")
      })
      .catch((error) => {
        console.log(error)
      });
  }

  return (
    <>
      <div className="container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
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
