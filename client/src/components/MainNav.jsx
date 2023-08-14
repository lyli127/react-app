//React
import { React, useContext } from "react";
import { Link } from "react-router-dom";
//Bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

//My Components
import { AccountContext } from "./AccountContext";

export function MainNav(props) {
  const { user, setUser } = useContext(AccountContext);

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
              <Link to={`/find-ramen`}>Find Ramen</Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to={`/my-reviews`}>Reviews</Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to={`/signup`}>Sign Up</Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to={`/login`}>Login ({`${user.loggedIn}`})</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
