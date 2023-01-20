import './App.css';
import Attendance from './Pages/Attendance';
import MidMarks from './Pages/MidMarks';
import SignUp from './Pages/SignUp';
import Signin from './Pages/Signin';
import CreatePost from './Pages/CreatePost';
import Home from './Pages/Home';
import {Routes,Route,Link} from "react-router-dom"

function App() {
  return (
    <>
    <div className="App">

    <div className="container-fluid new">
    <nav>          
          <Link to="/">Home</Link>
          <Link to="/Attendance">Attendance</Link>
          <Link to="/MidMarks">MidMarks</Link>
          <Link to="/SignUp">Sign-Up</Link>
          <Link to="/Signin">SignIn</Link>
          <Link to="/CreatePost">CreatePost</Link>


      </nav>
      
      </div>
      <br/>

    
    </div>
<div className='checking'>


</div>
      
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Attendance" element={<Attendance/>}/>
        <Route path="/CreatePost" element={<CreatePost/>}/>
        <Route path="/MidMarks" element={<MidMarks/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/SignIn" element={<Signin/>}/>



        </Routes>
    
      </>
  );
}

export default App;
