import React from 'react'
import {useState,useEffect} from 'react';
import {Button} from 'react-bootstrap'
import {doc,getDoc,updateDoc} from 'firebase/firestore';
import {db} from '../ConfigFirebase/Firebase';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
const CreatePost = () => {
    const{Docid}=useParams();
    const[Title,setTitle]=useState(" ");
    const[Body,setBody]=useState(" ");

    const[postStatus,setPostStatus]=useState(" ");
    const collectionReference=doc(db,"ContentPosts",Docid);
    const  UpdateToFirebase = async()=>{
      if (Title===" " || Body===" ") {
        alert("Please Fill the Fields");
        return;
      }
      else{
       
         setPostStatus("Hangon while we are updating")
         await updateDoc(collectionReference,{Title,Body})
         setPostStatus("Post updated Successfully");
        
       }
        
      };
     useEffect(()=>{
        Docid && FetchBlog();

     },[Docid])
     const FetchBlog=async()=>{
        const docreference=doc(db,"ContentPosts",Docid);
        const docdata=await getDoc(docreference);
        setTitle(docdata.data().Title)
        setBody(docdata.data().Body)
     }
  return (
    <>
    <div className="container">
     <Form>
      <Form.Group className="mb-3">
        <Form.Label>UpdatePost</Form.Label>
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
      

      <Button variant="primary" type="submit" onClick={UpdateToFirebase}>
        UpdatePost
      </Button>
      </Form>
      <h4 className='accountcreation' >{postStatus}</h4>
</div>
    </>
  )
}

export default CreatePost