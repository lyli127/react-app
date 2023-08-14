import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function MainNav(props) {
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
            <Nav.Link eventKey="link-1">Reviews</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Find Ramen</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Sign Up</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={props.handleAuthClick}>
              Log in? ({props.isLoggedIn ? "Yes" : "No"})
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}
