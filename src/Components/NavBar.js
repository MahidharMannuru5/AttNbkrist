import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from "../Pages/Home"
import ChatSystem from "../Pages/ChatSystem";
import DataStore from "../Pages/DataStore";
import Attendance from "../Pages/Attendance";
import MidMarks from "../Pages/MidMarks";
import Signin from "../Pages/Signin";
import SignUp from "../Pages/SignUp";
import CreatePost from "../Pages/CreatePost";

const NavBar=()=> {
  return (
    <>
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-0 text-center"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/ChatSystem"}>ChatSystem</Nav.Link>
            <Nav.Link as={Link} to={"/DataStore"}>DataStore</Nav.Link>
            <Nav.Link as={Link} to={"/Attendance"}>Attendance</Nav.Link>
            <Nav.Link as={Link} to={"/MidMarks"}>MidMarks</Nav.Link>
            <Nav.Link as={Link} to={"/Signin"}>SignIn</Nav.Link>
            <Nav.Link as={Link} to={"/SignUp"}>SignUp</Nav.Link>
            <Nav.Link as={Link} to={"/CreatePost"}>CreatePost</Nav.Link>


          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  );
}

export default NavBar;