import React from 'react'
import {useState} from 'react';
import {Button} from 'react-bootstrap'
const CreatePost = () => {
    const[Title,setTitle]=useState(" ");
    const[Body,setBody]=useState(" ");
  return (
    <>
    <div className="createPost">
        <div >CreatePost</div>
        <input  type="text" placeholder='Title'/>
        <div className="PostContent">
        <textarea name="postContent" rows={4} cols={40} />
        </div>
        <Button>create</Button>
        </div>

    </>
  )
}

export default CreatePost