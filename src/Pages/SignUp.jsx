import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../ConfigFirebase/Firebase';
import { Link } from 'react-router-dom';
const SignUp = () => {
  const[password,setPassword]=useState(" ");
  const[email,setEmail]=useState(" ");
  const[statusofcreation,setstatusofcreation]=useState(" ");
  const signUppp = async () => {

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setstatusofcreation("Account Created successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(error.message)
        const errorMessage = error.message;
        setstatusofcreation(errorMessage);
      });
    }
    
  return (
    <>
    <div className="container">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"   onChange={(event)=>{
  setEmail(event.target.value)}} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"   onChange={(event)=>{
  setPassword(event.target.value)}}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={signUppp}>
        CreateAccount
      </Button>
    </Form>
    <div className="container mt-3">
        <p>Already have an account? <Link to="/Signin">Sign in here</Link>.</p>
      </div>


    </div>

           <h4 className='accountcreation' >{statusofcreation}</h4>  
    </>
  )
}

export default SignUp