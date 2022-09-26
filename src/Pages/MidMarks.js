import "../index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useState ,useEffect} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import mid from "../images/mid.jpeg";
const keys_to_render = ["mid1", "mid2"];
export default function MidMarks() {
  const result=localStorage.getItem('rollno');
  const[rollno,setrollno]=useState(result);
  const [marks, setmarks] = useState({});
  const [post, setPost] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    localStorage.getItem("rollno");
   },[rollno]);
   useEffect(()=>{
    axios.get(`https://att.nbkrist.org/attendance/Apps_ren/getSubwiseMarksAsJSONGivenRollNo.php?q=${rollno}`).then((response) => {
      const { data } = response
      if(data) {
          setPost(response.data);
      
       } else {
          setError("NO data found")
      }
  
    }).catch(error=>{
      setPost({"percent":"No data found"}.data)
    })
  })
  const marked = () => {
    setmarks({});
    axios
      .get(
        `https://att.nbkrist.org/attendance/Apps_ren/getSubwiseMarksAsJSONGivenRollNo.php?q=${rollno}`
      )
      .then((response) => {
        setmarks(response.data);
      });
  };

  return (

      <>
    <div className="App">
  
     
    
   <br/>
        <div className="container1">
      
      <label>
        RollNo:
      </label>
     
<input type="text" required size={10} value={rollno} onChange={(event)=>{
  setrollno(event.target.value.toLowerCase());
}} /> 
</div>
<br>
  </br>
<div   className="new"  onClick={()=>{localStorage.setItem("rollno",rollno);

}}>

<input
  type="checkbox"
 
  name="tripType"
 
/>Remember Me
</div>
<div className="btn">
<button class="btn btn-primary" onClick={marked}>Marks</button>
</div>
<br/>
<br/>
<div className="container">
      <Table striped bordered hover variant="primary">
      <thead>
          <tr>
            <th>
           Subject
            </th>
            <th>
             MID 1
            </th>
          <th>
            MID 2
          </th>
          </tr>
        </thead>

      {Object.entries(marks).map(([key, value]) => (
       
      
            <tbody>
          <tr>
          <td key={key} >{key}</td>
          {Object.entries(value)
            .filter(([k]) => keys_to_render.includes(k))
            .map(([key, value]) => {
              return (
                <td key={key}>
                   {value}
                </td>
         
              );
            })}
          
                   </tr>
                   </tbody>
     
      ))}

</Table>
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
