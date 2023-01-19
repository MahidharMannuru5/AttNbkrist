import './App.css';
import Attendance from './Pages/Attendance';
import MidMarks from './Pages/MidMarks';
import SignUp from './Pages/SignUp';
import {Routes,Route,Link} from "react-router-dom"

function App() {
  return (
    <>
    <div className="App">

    <div className="container-fluid new">
    <nav>
          <Link to="/">Attendance</Link>
          <Link to="/MidMarks">MidMarks</Link>
          <Link to="/SignUp">Sign-Up</Link>
      </nav>
      
      </div>
      <br/>

    
    </div>
<div className='checking'>


</div>
      
        <Routes>
        <Route path="/" element={<Attendance/>}/>
        <Route path="/MidMarks" element={<MidMarks/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>


        </Routes>
    
      </>
  );
}

export default App;
