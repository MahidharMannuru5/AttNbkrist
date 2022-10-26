
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useState ,useEffect} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import mid from "../images/mid.jpeg";
import Card from 'react-bootstrap/Card';
const columns = [
  "subShortForm",
  "mid1",
  "mid2",
  "lab",
  "practical"
];
export default function MidMarks() {
  const result=localStorage.getItem('rollno');
  const[rollno,setrollno]=useState(result);
  const [marks, setmarks] = useState([]);

  useEffect(() => {
    localStorage.getItem("rollno");
   },[rollno]);

  const marked = () => {
    setmarks([])
    axios
      .get(
        `https://att.nbkrist.org/attendance/Apps_ren/getAllMidMarksAsJSONGivenRollNo.php?q=${rollno}`
      )
      .then((response) => {
        setmarks(response.data);
      })
      
  };

  return (

      <>
    <div className="App"> 
        <div className="container">
        <Card border="primary" style={{ width: '22rem' }}>
        <Card.Header><label>
        RollNo:
      </label>
      
<input type="text" required size={10} value={rollno} onChange={(event)=>{
  setrollno(event.target.value.toLowerCase());
}} />
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
<Card border="primary" style={{ width: '22rem' }}>
        <Card.Header>RollNo:{rollno}</Card.Header>
        <Card.Body>
          <Table striped bordered hover variant="primary">
      <thead>
          <tr>           
            {columns.map((col) => (
              <td key={col}>{col}</td>
            ))}
            </tr>
            </thead>
                       {marks &&
            marks.map((row, i) => (
              <tbody>
              <tr>
                {columns.map((col) => (
                  <td key={`${col}-${i}`}>{row[col]}</td>
                ))}
              </tr>
              </tbody>
            ))}
              
               
               
            

            </Table>
          
        </Card.Body>
      </Card>
</div>

    </div>
    <div className='footer'>
      <h3>Trust The Process,Time has a Reply</h3>
    </div>
    <div className="help">
    <a href="https://www.hitwebcounter.com">
<img className="counter"src="https://hitwebcounter.com/counter/counter.php?page=8007496&style=0036&nbdigits=7&type=page&initCount=0" title="Free Counter" Alt="web counter"   border="0" /></a>                                    
                                    
    
    </div>
    </>
  );
}
