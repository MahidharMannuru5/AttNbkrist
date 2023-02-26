
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useState ,useEffect} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Footer from "../Components/Footer"
const Internalmarks= [
  "subShortForm",
  "mid1",
  "mid2"
  
];
const labs=["lab",
"practical"]
export default function MidMarks() {
  const result=localStorage.getItem('rollno');
  const [rollno,setrollno]=useState(result)
  const [marks, setmarks] = useState([]);

  useEffect(() => {
    localStorage.getItem("rollno");
   },[rollno]);

  const marked = () => {
    setmarks([])
    axios
      .get(
        `https://att.nbkrist.co.in/attendance/Apps_ren_Dummy/getAllMidMarksAsJSONGivenRollNo.php?q=${rollno}`
      )
      .then((response) => {
        setmarks(response.data);
      }).catch((error)=>
      console.log(error))
      
  };

  return (

      <>
    <div className="App"> 
        <div className="container">
        <Card border="info" style={{ minwidth: '18rem' }}>
        <Card.Header><label>
        RollNo:
      </label>
      
<input type="text" className='titleofpost' required size={10}  OnChange={(event)=>{
  setrollno(event.target.value.Lowercase())
}}/>
</Card.Header>

<Card.Body>
<Card.Title><div   className="new"  onClick={()=>{localStorage.setItem("rollno",rollno);}}>

      <input type="checkbox" name="tripType"/>Remember Me</div></Card.Title>
          <Card.Text>
          <button class="btn btn-primary" onClick={marked}>MidMarks</button>

          </Card.Text>
        </Card.Body>
      </Card>
      <br />       
     
       </div>

<div className="container">
          <Table striped bordered hover variant="primary">
      <thead>
          <tr>           
            {Internalmarks.map((col) => (
              <td key={col}>{col}</td>
            ))}
            </tr>
            </thead>
            <tbody>
                       {marks &&
            marks.filter(marks=> marks.subShortForm !=="").map((row, i) => (
             
              <tr>
                {Internalmarks.map((col) => (
                  <td key={`${col}-${i}`}>{row[col]}</td>
                ))}
              </tr>
           
            ))}
            </tbody> 
               
               
            

            </Table>
            <Table striped bordered hover variant="primary">
      <thead>
          <tr>           
            {labs.map((col) => (
              <td key={col}>{col}</td>
            ))}
            </tr>
            </thead>
            <tbody>
                       {marks &&
            marks.filter(marks=>marks.lab !=="").map((row, i) => (
            
              <tr>
                {labs.map((col) => (
                  <td key={`${col}-${i}`}>{row[col]}</td>
                ))}
              </tr>
            
            ))}
                </tbody>
               
               
            

            </Table>
          
          
      
</div>
<Footer/>

    </div>
    </>
  );
}
