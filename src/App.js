import './App.css';
import Attendance from './Pages/Attendance';
import MidMarks from './Pages/MidMarks';
import {HashRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
    <div className="App">
    
    <div className="container-fluid">
      <a href="/">Attendance</a>
      <a href="MidMarks">MidMarks</a>
      
      </div>
      <br/>
    </div>

 
        <Routes>
        <Route path="/" element={<Attendance/>}/>
        <Route path="/MidMarks" element={<MidMarks/>}/>
        </Routes>
    
      </>
  );
}

export default App;
