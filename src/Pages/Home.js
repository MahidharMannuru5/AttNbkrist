import React, { useEffect } from 'react'
import {getDocs,collection,query,orderBy,onSnapshot} from "firebase/firestore"
import {auth,db} from "../ConfigFirebase/Firebase"
import {useState} from "react"
import {Button} from "react-bootstrap"
import { GoTrashcan} from 'react-icons/go';
import { FiEdit} from 'react-icons/fi';


const Home = () => {
  const user=auth.currentUser
  const[contentpost,setcontentpost]=useState([]);
  const collectionReference=collection(db,"ContentPosts");
  const q=query(collectionReference,orderBy("timestamp","desc"));
  useEffect(() => {
    const FetchData = onSnapshot(q,(snapshot) => {
    const data = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {...data,Title: data.Title,timestamp: data.timestamp, Body: data.Body,username: data.username,Docid:data.docId};
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
    <h3>{post.Title} <FiEdit/><GoTrashcan/>
</h3>
    <p>{post.Body}</p>
    <p>{auth && user.uid=== post.docId ? "Hello":null}</p>
    <h5> {post.username}<br/>{post.timestamp && post.timestamp.toDate().toLocaleString()}</h5>
  </div>
  </div>
 
))}

   </>
       )
 
}

export default Home