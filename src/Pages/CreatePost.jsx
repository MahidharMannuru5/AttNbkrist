import React from 'react'
import {useState} from 'react';
import {Button} from 'react-bootstrap'
import {addDoc,collection} from 'firebase/firestore';
import {auth,db,storage} from '../ConfigFirebase/Firebase';
import Form from 'react-bootstrap/Form';
import {ref,uploadBytes,listAll,getDownloadURL } from "firebase/storage";
const CreatePost = () => {
    const[Title,setTitle]=useState(" ");
    const[Body,setBody]=useState(" ");
    const[Image,setImage]=useState(null)

    const[postStatus,setPostStatus]=useState(" ");
    const collectionReference=collection(db,"ContentPosts");
    const  addPostToFirebase = async()=>{
      if (Title===" " || Body===" " || Image===null) {
        alert("Please Fill the Fields");
        return;
      }
      else{
        const timestamp=new Date();
        const user=auth.currentUser;
        const imageRef=ref(storage,`images/${Image.name}`)

        setPostStatus("Hangon While we are creating");
         await uploadBytes(imageRef,Image).then(()=>{
           console.log("Image Uploaded")
         })
         
         const ImagedownloadRef=ref(storage,`images/${Image.name}`)
         await getDownloadURL(ImagedownloadRef)
           .then(async(url) => {
         await addDoc(collectionReference,{Title,Body,timestamp,username:user.email,ImageUrl:url,userIdName:user.uid})})
        setPostStatus("Post Added Successfully");
         setTitle(" ");
         setBody(" ");
         setImage(null)
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
          Pick title suits better for your Post between 5-10 words
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" value={Body} rows="4" placeholder="Description goes here Atleast 100 words"   onChange={(event)=>{
  setBody(event.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Control type="file"  placeholder="Title Goes Here"   onChange={(event)=>{
  setImage(event.target.files[0])}} />
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