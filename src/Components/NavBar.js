import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Home from "../Pages/Home"
import ChatSystem from "../Pages/ChatSystem";
import MakeAcall from "../Pages/MakeAcall";
import Attendance from "../Pages/Attendance";
import MidMarks from "../Pages/MidMarks";
import Signin from "../Pages/Signin";
import SignUp from "../Pages/SignUp";
import CreatePost from "../Pages/CreatePost";

const NavBar=()=> {
  return (
    <>
    {['sm'].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand className="justify-content-center"as={Link} to={"/"}>Home</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3 text-center">
                  <Nav.Link as={Link} to={"/ChatSystem"}>ChatSystem</Nav.Link>
                  <Nav.Link as={Link} to={"/MakeAcall"}>MakeAcall</Nav.Link>
                  <Nav.Link as={Link} to={"/Attendance"}>Attendance</Nav.Link>
                  <Nav.Link as={Link} to={"/MidMarks"}>MidMarks</Nav.Link>
                  <Nav.Link as={Link} to={"/SignUp"}>SignUp</Nav.Link>
                  <Nav.Link as={Link} to={"/Signin"}>SignIn</Nav.Link>
                  <Nav.Link as={Link} to={"/CreatePost"}>CreatePost</Nav.Link>




                 
                   
                </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    
    </>
  );
}

export default NavBar;