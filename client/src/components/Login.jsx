//React
import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
//My Components
import { MainNav } from "./MainNav";
import { Footer } from "./Footer";
import { AccountContext } from "./AccountContext";

function Login() {
  const { setUser } = useContext(AccountContext);
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  function handleFieldChange(event) {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(fields);
    fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify(fields),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(...data);
        navigate("/my-reviews");
      })
      .catch((error) => {
        console.log(error);
        if (response.status >= 400 && response.status < 600) {
          throw new Error("Bad response from server");
        }
        return response.json();
      });
  }

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

      <Form onSubmit={handleSubmit}>
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
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={handleFieldChange}
                autoComplete="email"
                required
              />
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
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handleFieldChange}
                autoComplete="current-password"
                required
              />
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
