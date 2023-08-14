import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { MainNav } from "./MainNav";
import { Footer } from "./Footer";

function Login() {
  return (
    <>
      <MainNav />
      <br />
      <br />

      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h2>Login</h2>
          </Col>
        </Row>
      </Container>

      <Form>
        <Form.Group
          as={Row}
          className="mb-3 justify-content-md-center"
          controlId="formPlaintextEmail"
        >
          <Col xs={6}>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 justify-content-md-center"
          controlId="formPlaintextPassword"
        >
          <Col xs={6}>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" />
              <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </Form.Text>
            </FloatingLabel>
            <br />
            <div className="d-grid gap-2">
              <Button
                as="input"
                type="submit"
                value="Login"
                size="md"
                variant="primary"
              />{" "}
              <Form.Text id="signupHelper">
                Don't have an account? <a href="/signup">Sign up here.</a>
              </Form.Text>
            </div>
          </Col>
        </Form.Group>
      </Form>
      <Footer />
    </>
  );
}

export { Login };
