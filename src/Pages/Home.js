import React, { useEffect } from 'react'
import {getDocs,collection,query,orderBy,onSnapshot} from "firebase/firestore"
import {db} from "../ConfigFirebase/Firebase"
import {useState} from "react"
import {GoTrashcan} from "react-icons/go"
import {Button} from "react-bootstrap"



const Home = () => {
  const[contentpost,setcontentpost]=useState([]);
  const collectionReference=collection(db,"ContentPosts");
  const q=query(collectionReference,orderBy("timestamp","desc"));
  useEffect(() => {
    const FetchData = onSnapshot(q,(snapshot) => {
    const data = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {...data,Title: data.Title,timestamp: data.timestamp, Body: data.Body,username: data.username};
    });
    console.log(data);
    setcontentpost(data);
    });
    return () => FetchData();
    }, []);

  return (
    <>
  
    
    {contentpost.map((post) => (
    
  <div key={post.id}>
    <div className="Blog-post">
    <h3>{post.Title}</h3>


    </div>
    <p>{post.Body}</p>
    <h5> {post.username}<br/>{post.timestamp && post.timestamp.toDate().toLocaleString()}</h5>
  </div>
  
  </div>
))}

   </>
       )
 
}

export default Home