import React, { useEffect } from 'react'
import {getDocs,collection} from "firebase/firestore"
import {db} from "../ConfigFirebase/Firebase"
import {useState} from "react"
const Home = () => {
  const[contentpost,setcontentpost]=useState([]);
  const collectionReference=collection(db,"ContentPosts");
  useEffect(()=>{
    const getPosts=async()=>{
      const docRef=await getDocs(collectionReference);
      const data=docRef.docs.map((doc)=>doc.data());
      setcontentpost(data);
      console.log(data);
    }
    getPosts();
  },[])

  return (
    <>
  
    
    {contentpost.map((post) => (
    
  <div key={post.id}>
      <div className="Blog-post">
    <h3>{post.Title}</h3>
    <p>{post.Body}</p>
    <h5>@MahidharMannuru</h5>
  </div>
  
  </div>
))}

   </>
       )
 
}

export default Home