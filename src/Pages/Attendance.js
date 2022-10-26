
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import React from "react";
import attendace from "../images/attendance.jpeg"
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/esm/Table';
import  { useState ,useEffect} from 'react';


export default function Attendance() {
  const result=localStorage.getItem('rollno');
  const[rollno,setrollno]=useState(result);
  const [post, setPost] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    localStorage.getItem("rollno");
   },[rollno]);
   
  const attendance=()=>{
    axios.get(`https://att.nbkrist.org/attendance/Apps_ren/getSubwiseAttAsJSONGivenRollNo.php?q=${rollno}`).then((response) => {
      const { data } = response
      if(data) {
          setPost(response.data);
      
       } else {
          setError("NO data found")
      }

    }).catch(error=>{
      setPost({"percent":"No data found"}.data)
    })
  }
 
  

  return (
    <>

   <div className='App'>
    <div class="container">
    <Card border="primary" style={{ width: '16rem' }}>
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
          <button class="btn btn-primary" onClick={attendance}>Submit</button>
        <div class="percentage">
          <Card border="info" style={{ width: '16rem' }}>
        <Card.Header>Percentage:{post && post.percent}</Card.Header>
            </Card>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />       
      <Card border="primary" style={{ width: '16rem' }}>
        <Card.Header>RollNo:{rollno}</Card.Header>
        <Card.Body>
          <Card.Text>
          <Table striped bordered hover variant="primary">
      <thead>
          <tr>
            <th>
           Subject
            </th>
            <th>
             Classes
            </th>
            </tr>
            </thead>
           
            
          
               {post && Object.entries(post).map(([key,value])=>{
                return(
                    <>
                     <tbody>
                      <tr>
                  <td key={key}>{key}</td>
                  <td key={key}>{value}</td>
                 
                  </tr>
                  </tbody>
                  </>
                );
              })}
       
    

            </Table>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
    <div className="help">
    <a href="https://www.hitwebcounter.com">
<img className="counter"src="https://hitwebcounter.com/counter/counter.php?page=8007496&style=0036&nbdigits=7&type=page&initCount=0" title="Free Counter" Alt="web counter"   border="0" /></a>                                    
                                    
    
    </div>
    </div>
    <div className='footer'>
      <h3>Trust The Process,Time has a Reply</h3>
    </div>
    
    </>
  );
  
}
