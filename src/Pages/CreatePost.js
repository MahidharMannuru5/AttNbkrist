import React from 'react'
import {useState} from 'react';
import {Button} from 'react-bootstrap'
import {addDoc,collection} from 'firebase/firestore';
import {auth,db} from '../ConfigFirebase/Firebase';
import Form from 'react-bootstrap/Form';

const CreatePost = () => {
    const[Title,setTitle]=useState(" ");
    const[Body,setBody]=useState(" ");
    const collectionReference=collection(db,"ContentPosts");
    const  addPostToFirebase=async()=>{
      await addDoc(collectionReference,{Title,Body})
      setTitle(" ");
      setBody(" ");
     
    }
  return (
    <>
    <div className="container">
     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>CreatePost</Form.Label>
        <Form.Control type="text" placeholder="Title Goes Here"   onChange={(event)=>{
  setTitle(event.target.value)}} />
        <Form.Text className="text-muted">
          Pick title suits better for your Post
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows="4" placeholder="Description goes here"   onChange={(event)=>{
  setBody(event.target.value)}}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={addPostToFirebase}>
        SubmitPost
      </Button>
      </Form>
</div>
    </>
  )
}

export default CreatePost