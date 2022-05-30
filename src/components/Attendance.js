import axios from "axios";
import React from "react";
import  { useState } from 'react';


export default function Attendance() {
  const[rollno,setrollno]=useState("");
  const [post, setPost] = useState();
  const [error, setError] = useState();
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
    <div className="container-fluid">
    <h3>NBKRIST Attendance</h3><h3>{rollno}</h3>
      </div>
      <br/>
    <div className="container1">
      <label>
        RollNo:
      </label>
      
<input type="text" required size={10} placeholder="lowercase" onChange={(event)=>{
  setrollno(event.target.value);
}} /> 
<div>
  <br>
  </br>
<button class="btn btn-primary" onClick={attendance}>Submit</button>
</div>
<br></br>
{post?.percent && <h3>Percentage:{post.percent}</h3>}
   {error?.percent && <h1>{error.percent}</h1>}
    </div>
    </>
  );
  
}
