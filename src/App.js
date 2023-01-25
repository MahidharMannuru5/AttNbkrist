import './App.css';
import Attendance from './Pages/Attendance';
import {auth} from "./ConfigFirebase/Firebase"
import { onAuthStateChanged } from "firebase/auth";
import {useState} from "react"
import MidMarks from './Pages/MidMarks';
import SignUp from './Pages/SignUp';
import Signin from './Pages/Signin';
import CreatePost from './Pages/CreatePost';
import Home from './Pages/Home';
import MakeAcall from './Pages/MakeAcall';
import ChatSystem from './Pages/ChatSystem';
import {Routes,Route,Link, Navigate} from "react-router-dom"
import NavBar from './Components/NavBar';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const[uid,setUid]=useState("Nothing")
  const[user,setUser]=useState(null)
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid)
        setUid(auth.currentUser.displayName);
        setUser(user);
          
  
      } else {
        console.log("no user")
          setUid("no user")
      }
    });
    
  }, [])
  return (
    <>

<div className="App">
    <NavBar/>
     {uid}
  </div>
 <br/>
          <div ClassName="container-f">
      <Routes>
        
        <Route path="/" element={<Home/>}/>
          <>
            <Route path="/ChatSystem" element={<ChatSystem/>}/>
            <Route path="/MakeAcall" element={<MakeAcall/>}/>
            <Route path="/Attendance" element={<Attendance/>}/>
            <Route path="/CreatePost" element={<CreatePost/>}/>
            <Route path="/MidMarks" element={<MidMarks/>}/>
          </>        
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
     </div>
      </>
  );
}

function isUserAuthenticated(user) {
  return user !== null;
}

export default App;
