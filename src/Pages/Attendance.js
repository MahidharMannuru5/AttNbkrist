import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import React from "react";
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
    setPost({})
    axios.get(`https://att.nbkrist.org/attendance/Apps_ren/getSubwiseAttAsJSONGivenRollNo.php?q=${rollno}`).then((response) => {
      const { data } = response
      if(data) {
          setPost(response.data);
      
       } else {
          setError("NO data found")
      }

    }).catch(error=>{
      console.log(error)
    })
  }
 
  

  return (
    <>

   <div className='App'>
    <div class="container">

    <Card border="info" style={{ minwidth: '18rem' }}>
  
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
          <Card border="info" style={{ minwidth: '16rem' }}>
        <Card.Header>Percentage:{post && post.percent}  ({post&&post.percent_breakup})</Card.Header>
            </Card>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      
  <br/>
      
          <Table striped bordered hover variant="primary">
      <thead>
          <tr>
            <th>
           Subject
            </th>
            <th>
             LastUpdated
            </th>
            <th>
              Classes
              </th>
            </tr>
          
           </thead>
           <tbody>
            {post && Object.entries(post).filter(([key,value])=> (key!=="Labs" && key!=="percent" && key!=="percent_breakup")).map(([name, { LastUpdatedOn, Attendance }]) => (
              
    
            <tr>
              <td>{name}</td>
              <td>{LastUpdatedOn}</td>
              <td>{Attendance}</td>
            </tr>
         
            
          ))}
          
          </tbody>   
       
    </Table>

          
    
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
