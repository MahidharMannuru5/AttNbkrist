import './App.css';
import Attendance from './Pages/Attendance';
import MidMarks from './Pages/MidMarks';
import SignUp from './Pages/SignUp';
import Signin from './Pages/Signin';
import CreatePost from './Pages/CreatePost';
import Home from './Pages/Home';
import DataStore from './Pages/DataStore';
import ChatSystem from './Pages/ChatSystem';
import {Routes,Route,Link} from "react-router-dom"
import NavBar from './Components/NavBar';

function App() {
  return (
    <>

    <div className="App">
    <NavBar/>
     
  </div>
 <br/>
          <div ClassName="container-f">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ChatSystem" element={<ChatSystem/>}/>
        <Route path="/DataStore" element={<DataStore/>}/>

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