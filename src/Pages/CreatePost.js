import React from 'react'
import {useState} from 'react';
import {Button} from 'react-bootstrap'
import {addDoc,collection} from 'firebase/firestore';
import {auth,db} from '../ConfigFirebase/Firebase';


const CreatePost = () => {
    const[Title,setTitle]=useState(" ");
    const[Body,setBody]=useState(" ");
    const collectionReference=collection(db,"ContentPosts");
    const  addPostToFirebase=async()=>{
      await addDoc(collectionReference,{Title,Body})
    }
  return (
    <>
    <div className="createPost">
        <div >CreatePost</div>
        <input  type="text" onchange={(event)=>{
          setTitle(event.target.value)
        }}placeholder='Title'/>
        <div className="PostContent">
        <textarea name="postContent" onchange={(event)=>{
          setBody(event.target.value)
        }} rows={4} cols={40} />
        </div>
        <Button onClick={addPostToFirebase}>create</Button>
        </div>

    </>
  )
}

export default CreatePost