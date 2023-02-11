import React from 'react'
import {useState} from 'react';
import {Button} from 'react-bootstrap'
import {addDoc,collection} from 'firebase/firestore';
import {auth,db} from '../ConfigFirebase/Firebase';
import Form from 'react-bootstrap/Form';

const CreatePost = () => {
    const[Title,setTitle]=useState(" ");
    const[Body,setBody]=useState(" ");
    const[postStatus,setPostStatus]=useState(" ");
    const collectionReference=collection(db,"ContentPosts");
    const  addPostToFirebase = async()=>{
      if (Title===" " || Body===" ") {
        alert("Please Fill the Fields");
        return;
      }
      else{
        const timestamp=new Date();
        const user=auth.currentUser;
         await addDoc(collectionReference,{Title,Body,timestamp,username:user.email,userIdName:user.uid})
        setPostStatus("Post Added Successfully");
         setTitle(" ");
         setBody(" ");
       }
        
      };
     
  return (
    <>
    <div className="container">
     <Form>
      <Form.Group className="mb-3">
        <Form.Label>CreatePost</Form.Label>
        <Form.Control type="text" value={Title} placeholder="Title Goes Here"   onChange={(event)=>{
  setTitle(event.target.value)}} />
        <Form.Text className="text-muted">
          Pick title suits better for your Post
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" value={Body} rows="4" placeholder="Description goes here"   onChange={(event)=>{
  setBody(event.target.value)}}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={addPostToFirebase}>
        SubmitPost
      </Button>
      </Form>
      <h4 className='accountcreation' >{postStatus}</h4>
</div>
    </>
  )
}

export default CreatePost