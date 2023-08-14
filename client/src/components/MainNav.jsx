//React
import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
//Bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//My Components
import { AccountContext } from "./AccountContext";

export function MainNav(props) {
  const { setUser } = useContext(AccountContext);
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" variant="dark" className="justify-content-center">
        <Nav activeKey="/home">
          <Navbar.Brand href="#home">
            <h1>NOODLE||NEXUS</h1>
            <h1 className="title">ラーメン</h1>
          </Navbar.Brand>
        </Nav>
      </Navbar>
      <Navbar bg="dark" variant="dark" className="justify-content-center">
        <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="link-1">Find Ramen</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="my-reviews">Reviews</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Sign Up</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={props.handleAuthClick}>
              Logged In? ({props.isLoggedIn ? "Yes" : "No"})
            </Nav.Link>
            {/* {user ? (
              <>
                <Nav.Item>
                  <Nav.Link eventKey="">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="">Sign Up</Nav.Link>
                </Nav.Item>
              </>
            ) : (
              <Nav.Item>
                <Nav.Link eventKey="logout" onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </Nav.Item>
            )} */}
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}
