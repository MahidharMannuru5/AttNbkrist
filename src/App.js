import './App.css';
import Attendance from './Pages/Attendance';
import MidMarks from './Pages/MidMarks';
import {Routes,Route,Link} from "react-router-dom"

function App() {
  return (
    <>
    <div className="App">

    <div className="container-fluid">
    <nav>
          <Link to="/">Attendance</Link>
          <Link to="/MidMarks">MidMarks</Link>
      </nav>
      
      </div>
      <br/>

    
    </div>
<div className='checking'>


</div>
      
        <Routes>
        <Route path="/" element={<Attendance/>}/>
        <Route path="/MidMarks" element={<MidMarks/>}/>
        </Routes>
    
      </>
  );
}

export default App;
