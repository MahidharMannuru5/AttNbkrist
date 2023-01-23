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
import {Routes,Route,Link} from "react-router-dom"
import NavBar from './Components/NavBar';
import { useEffect } from 'react';

function App() {
  const[uid,setUid]=useState("Nothing")
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid)
        setUid(auth.currentUser.displayName);
          
  
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
        <Route path="/ChatSystem" element={<ChatSystem/>}/>
        <Route path="/MakeAcall" element={<MakeAcall/>}/>

        <Route path="/Attendance" element={<Attendance/>}/>
        <Route path="/CreatePost" element={<CreatePost/>}/>
        <Route path="/MidMarks" element={<MidMarks/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/SignIn" element={<Signin/>}/>

        </Routes>
     </div>
      </>
  );
}

export default App;