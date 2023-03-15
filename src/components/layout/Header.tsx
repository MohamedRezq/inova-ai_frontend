import React from "react";
import { Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Person } from "react-bootstrap-icons";
const CustomToggle = React.forwardRef<any, any>(
  ({ children, onClick }, ref) => (
    <div
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      style={{marginLeft: '10px'}}
    >
      {children}
    </div>
  )
);

const Header = () => {
  return (
    <Navbar bg="white" expand="md" className='navbar'>
      <Container fluid className='navbar-container'>
        <Navbar.Brand href="/">
          <img src="/inovaai.png" id="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$'md'`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-$'md'`}
          aria-labelledby={`offcanvasNavbarLabel-expand-$'md'`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <img src="/inovaai.png" id="logo-img" />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="search..."
                className="me-2"
                aria-label="Search"
                size="sm"
                color="gray"
              />
              <Button size="sm" variant="success">Search</Button>
            </Form>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Blogs</Nav.Link>
              <Nav.Link href="#action2">inova-ai</Nav.Link>
              <Dropdown className="header-links">
                <Dropdown.Toggle
                  as={CustomToggle}
                  id="dropdown-custom-components"
                >
                  {false ? (
                    <img src="/inovaai.png" id="logo-img" />
                  ) : (
                    <Person size={30} title='Account' color="gray" style={{border: 'solid 1px black', borderRadius: '9999px', padding: '5px'}}/>
                  )}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
