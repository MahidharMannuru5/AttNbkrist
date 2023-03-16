import { useEffect, useState } from 'react';
import { auth } from '../ConfigFirebase/Firebase';
import { onAuthStateChanged ,signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {MdLogout} from "react-icons/md"
import "../Styles/Navbar.css"
const NavBar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  const SignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    });
    
  }

  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="Blue" expand={expand} className="mb-3">
          <Container>
            <Navbar.Brand>Education Sprint</Navbar.Brand>
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
                <Nav className="justify-content-center flex-grow-1 pe-3 text-center">
        
                    <>            
                      <Nav.Link  as={Link} to={"/"}>Blogs</Nav.Link>
                      <Nav.Link as={Link} to={"/ChatSystem"}>ChatSystem</Nav.Link>
                      <Nav.Link as={Link} to={"/Attendance"}>Attendance</Nav.Link>
                      <Nav.Link as={Link} to={"/MidMarks"}>MidMarks</Nav.Link>
                      <Nav.Link as={Link} to={"/CreatePost"}>CreatePost</Nav.Link>                      
                    </>
                   
                </Nav>
              <Nav className="justify-content-end">
              <Nav.Link >
                       {user ?
                          <>
                          <MdLogout onClick={SignOut}/>Logout</>
                          :
                          <>
                          <Nav.Link as={Link} to={"/Signin"}>SignIn</Nav.Link>
                          </>}
                       </Nav.Link>
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
