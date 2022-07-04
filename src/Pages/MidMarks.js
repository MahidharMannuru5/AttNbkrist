import "../index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const keys_to_render = ["mid1", "mid2"];
export default function MidMarks() {
    const result=localStorage.getItem('rollno');
  const[rollno,setrollno]=useState(result);
  const [marks, setmarks] = useState({});
  const marked = () => {
    axios
      .get(
        `https=${rollno}`
      )
      .then((response) => {
        setmarks(response.data);
      });
  };

  return (

      
    <div className="App">
        <div className="container1">
      
      <label>
        RollNo:
      </label>
     
<input type="text" required size={10} value={rollno} onChange={(event)=>{
  setrollno(event.target.value.toLowerCase());
}} /> 
</div>
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

      {Object.entries(marks).map(([key, value]) => (
      
            <tbody>
          <tr>
          <td key={key} >{key}</td>
          {Object.entries(value)
            .filter(([k]) => keys_to_render.includes(k))
            .map(([key, value]) => {
              return (
                <td key={key}>
                  {key}: {value}
                </td>
         
              );
            })}
          
                   </tr>
                   </tbody>
     
      ))}

</Table>
</div>

    </div>
  );
}
