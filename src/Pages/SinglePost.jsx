import React from 'react'
import { getDoc, doc } from "firebase/firestore"
import { db } from "../ConfigFirebase/Firebase"
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import "../Styles/SinglePost.css"
const SinglePost = () => {
  const [blogdata, setblogdata] = useState({})
  const { Docid } = useParams();
  useEffect(() => {
    Docid && GetdataofBlog();
  }, [Docid]);

  const GetdataofBlog = async () => {
    const docreference = doc(db, "ContentPosts", Docid);
    const docdata = await getDoc(docreference);
    setblogdata(docdata.data())
  }

  return (
    <div className="single-post-container">
      <h1>{blogdata.Title}</h1>
      <div className="image-container">
        <img src={blogdata.ImageUrl} />
      </div>
      <div className="body-text">{blogdata.Body}</div>
      
    </div>
  )
}

export default SinglePost
