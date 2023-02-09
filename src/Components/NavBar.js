import { useEffect, useState } from 'react';
import { auth } from '../ConfigFirebase/Firebase';
import { onAuthStateChanged ,signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
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
        
                    <>
                      <Nav.Link as={Link} to={"/ChatSystem"}>ChatSystem</Nav.Link>
                      <Nav.Link as={Link} to={"/MakeAcall"}>MakeAcall</Nav.Link>
                      <Nav.Link as={Link} to={"/Attendance"}>Attendance</Nav.Link>
                      <Nav.Link as={Link} to={"/MidMarks"}>MidMarks</Nav.Link>
                      <Nav.Link as={Link} to={"/CreatePost"}>CreatePost</Nav.Link>
                    </>
                 
                    <Nav.Link as={Link} to={"/Signin"}>SignIn</Nav.Link>
                  
                  <Nav.Link as={Link} to={"/SignUp"}>SignUp</Nav.Link>
                </Nav>
                {user ?<Button className="justify-content-end" onClick={SignOut}>SignOut</Button>:null}

                </Offcanvas.Body>

            </Navbar.Offcanvas>

          </Container>
        </Navbar>
      ))}
    </>
  );
}



export default NavBar;
