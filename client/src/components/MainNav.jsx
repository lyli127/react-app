//React
import { React, useContext } from "react";
import { Link } from "react-router-dom";
//Bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

export function MainNav() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="justify-content-center">
        <Nav activeKey="/home">
          <Navbar.Brand href="/home">
            <h1>NOODLE||NEXUS</h1>
            <h1 className="title">ラーメン</h1>
          </Navbar.Brand>
        </Nav>
      </Navbar>
      <Navbar bg="dark" variant="dark" className="justify-content-center">
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-evenly">
            <Navbar.Text>
              <Link to={`/`}>Home</Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to={`/find-ramen`}>Find Ramen</Link>
            </Navbar.Text>
            <NavDropdown title="Reviews" id="basic-nav-dropdown">
              <NavDropdown.Item href="/search-reviews">Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/add-review">Add Review</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/all-reviews">
                All Reviews
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
