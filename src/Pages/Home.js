import React, { useEffect } from 'react'
import {collection,query,orderBy,onSnapshot,deleteDoc,doc} from "firebase/firestore"
import {auth,db} from "../ConfigFirebase/Firebase"
import {useState} from "react"
import {Button} from "react-bootstrap"
import { GoTrashcan} from 'react-icons/go';
import { FiEdit} from 'react-icons/fi';
import {useNavigate,Link} from "react-router-dom"


const Home = () => {
  const navigate=useNavigate();
  const user=auth.currentUser
  const[contentpost,setcontentpost]=useState([]);
  const collectionReference=collection(db,"ContentPosts");
  const q=query(collectionReference,orderBy("timestamp","desc"));
  useEffect(() => {
    const FetchData = onSnapshot(q,(snapshot) => {
    const data = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {...data,Title: data.Title,timestamp: data.timestamp, Body: data.Body,username: data.username,Docid:doc.id};
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
    <h3 className="Blog-post-header">{post.Title}</h3>

    <div className="Deletemaner">
      {user && user.uid===post.userIdName ? 
        <Button className="deleteButton" variant="danger" onClick={() => {deletePost(post.Docid)}}>
          <GoTrashcan />
        </Button> : null}</div>
    <Link  to={`/UpdateBlog/${post.Docid}`}>

      {user && user.uid===post.userIdName ? 
        <Button >
          <FiEdit />
        </Button> : null}
    </Link>
    <p>{post.Body}</p>
    <img src={post.ImageUrl} />
    <h5> {post.username}<br />{post.timestamp && post.timestamp.toDate().toLocaleString()}</h5>
    <Link to={`/SinglePost/${post.Docid}`}>
    <Button variant="success" >ReadMore</Button>
    </Link>
  </div>

    </div>
 
))}

   </>
       )
 
}

export default Home