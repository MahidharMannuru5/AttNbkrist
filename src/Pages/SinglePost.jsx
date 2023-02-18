import React from 'react'
import {getDoc,doc} from "firebase/firestore"
import {db} from "../ConfigFirebase/Firebase"
import { useParams } from 'react-router-dom'
import {useState,useEffect} from "react"

const SinglePost = () => {
    const[blogdata,setblogdata]=useState({})
    const {Docid}=useParams();
    useEffect(() => {
        Docid && GetdataofBlog();
    }, [Docid]);
      
    const GetdataofBlog=async()=>{
        const docreference=doc(db,"ContentPosts",Docid);
        const docdata=await getDoc(docreference);
        setblogdata(docdata.data())
        console.log(blogdata)
    }
  return (
      <>
        <div>
         {blogdata.Title}
        </div>
        <div>
         {blogdata.Body}
        </div>

         <div className="justify-content-center">
        <img src={blogdata.ImageUrl} />
        </div>
        </>
  )
}

export default SinglePost