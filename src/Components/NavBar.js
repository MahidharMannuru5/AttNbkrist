import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"

const NavBar=() =>{
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Link as={Link} to={"/"}>Home</Navbar.Link>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/ChatSystem"} >ChatSystem</Nav.Link>
            <Nav.Link as={Link} to={"/DataStore"}>DataStore</Nav.Link>
            <Nav.Link as={Link} to={"/Attendance"}>Attendance</Nav.Link>
            <Nav.Link as={Link} to={"/MidMarks"}>MidMarks</Nav.Link>
            <Nav.Link as={Link} to={"/SignUp"}>SignUp</Nav.Link>

            <Nav.Link as={Link} to={"/SignIn"}>SignIn</Nav.Link>
            <Nav.Link as={Link} to={"/CreatePost"}>CreatePost</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default NavBar;
