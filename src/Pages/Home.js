import React, { useEffect } from 'react'
import {getDocs,collection,query,orderBy,onSnapshot,deleteDoc,doc} from "firebase/firestore"
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
    const deletePost=async(id)=>{
      const delReference=doc(db,"ContentPosts",id)
      await deleteDoc(delReference)
    }

  return (
    <>
  
    
    {contentpost.map((post) => (
     
  <div key={post.id}>
    <div className="Blog-post">
    <h3>{post.Title} {user && user.uid=== auth && post.docId ? <button onClick={()=>{deletePost(post.Docid)}}><GoTrashcan/></button>:null}
</h3>
    <p>{post.Body}</p>
    <h5> {post.username}<br/>{post.timestamp && post.timestamp.toDate().toLocaleString()}</h5>
  </div>
  </div>
 
))}

   </>
       )
 
}

export default Home