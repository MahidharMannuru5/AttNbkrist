import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

  apiKey: "AIzaSyCXTPwbFIvqeINd-siPJ9b41iwzwYekHtM",
  authDomain: "test-91e32.firebaseapp.com",
  projectId: "test-91e32",
  storageBucket: "test-91e32.appspot.com",
  messagingSenderId: "608298492927",
  appId: "1:608298492927:web:9b3e45ad65ba0a7ebb3dca"

// Initialize Firebase

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const SignUp = () => {
  const[password,setPassword]=useState(" ");
  const[email,setEmail]=useState(" ");
  const signUppp = () => {

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
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
      <h4>Dont have an account?</h4>
    </Form>
    </div>
    </>
  )
}

export default SignUp