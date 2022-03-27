import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas';
import FormControl from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


const Layout = () => {
  return (
    <>
      <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#"><b>To-do Application</b></Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Todo's</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1"> <Link to="/">Home</Link></Nav.Link>
          <Nav.Link href="#action2"><Link to="/addtodo">Add Todo</Link></Nav.Link>
          <Nav.Link href="#action3"><Link to="/contact">Contact</Link></Nav.Link>
          <Nav.Link href="#action4"><Link to="/testpage">TestPage</Link></Nav.Link>
          <Nav.Link href="#action4"><Link to="/testuseeffect">TestUseEffect</Link></Nav.Link>

          <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
      <Outlet />
    </>
  )
};

export default Layout;