import { useNavigate } from 'react-router-dom';
import './App.css';
import Attendance from './Pages/Attendance';
import { auth } from "./ConfigFirebase/Firebase"
import { onAuthStateChanged } from "firebase/auth";
import UpdateBlog from "./Pages/UpdateBlog"
import Individualchat from './Pages/Individualchat';
import { useState } from "react"
import MidMarks from './Pages/MidMarks';
import SignUp from './Pages/SignUp';
import Signin from './Pages/Signin';
import CreatePost from './Pages/CreatePost';
import Home from './Pages/Home';
import SinglePost from "./Pages/SinglePost"
import ChatSystem from './Pages/ChatSystem';
import { Routes, Route} from "react-router-dom"
import NavBar from './Components/NavBar';
import { useEffect } from 'react';

function App() {
  const [uid, setUid] = useState("Nothing")
  const [user, setUser] = useState(null)
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
        navigate('/Signin', { replace: true });
      }
    });
  }, [])

  const signOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <>
      <div className="App">
        <NavBar />
      </div>
      <br />
      <div className="container-f">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/SinglePost/:Docid" element={<SinglePost/>} />
          <Route path="/UpdateBlog/:Docid" element={<UpdateBlog/>} />
          <Route path="ChatSystem/Individualchat/:UserId/:UserName" element={<Individualchat/>}/>


          {user ?
            <>
        <Route path="/ChatSystem" element={<ChatSystem  auth={auth}/>} />
        <Route path="/Attendance" element={<Attendance />} />
        <Route path="/CreatePost" element={<CreatePost />} />
        <Route path="/MidMarks" element={<MidMarks />} />
        </>
        :<Route path="*" element={<Signin/>} />}      
         <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
