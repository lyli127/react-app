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
import Alert from "react-bootstrap/Alert";
//My Components
import { MainNav } from "./MainNav";
import { Footer } from "./Footer";
import { AccountContext } from "./AccountContext";

function SignUp() {
  const { setUser } = useContext(AccountContext);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const [fields, setFields] = useState({
    name: "",
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
    fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify(fields),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // if (!data) {
        //   return console.log(
        //     "No data returned from server. See SignUp.jsx, line 45"
        //   );
        // }

        setUser({ loggedIn: data.loggedIn });

        if (data.status) {
          setError(data.status);
        } else if (data.loggedIn) {
          navigate("/my-reviews");
        }
        navigate("/find-ramen");
      });
    // .catch((error) => {
    //   console.log(error);
    //   if (response.status >= 400 && response.status < 600) {
    //     throw new Error("Bad response from server");
    //   }
    //   return response.json();
    // });
  }

  return (
    <>
      <MainNav />
      <br />
      <br />

      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h2>Sign Up</h2>
          </Col>
        </Row>
      </Container>
      {/* <Alert key="warning" variant="warning">
        {error}
      </Alert> */}
      <Form onSubmit={handleSubmit}>
        <Form.Group
          as={Row}
          className="mb-3 justify-content-md-center"
          controlId="formPlaintextName"
        >
          <Col xs={6}>
            <FloatingLabel label="Name" className="mb-3">
              <Form.Control
                type="name"
                placeholder="Your Name"
                onChange={handleFieldChange}
                autoComplete="name"
                name="name"
                required
              />
            </FloatingLabel>
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 justify-content-md-center"
          controlId="formPlaintextEmail"
        >
          <Col xs={6}>
            <FloatingLabel label="Email address" className="mb-3">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={handleFieldChange}
                autoComplete="email"
                name="email"
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
                autoComplete="new-password"
                name="password"
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
                value="Sign Up"
                size="md"
                variant="primary"
              />{" "}
              <Form.Text id="loginHelper">
                Already have an account? <a href="/login">Login here.</a>
              </Form.Text>
            </div>
          </Col>
        </Form.Group>
      </Form>
      <Footer />
    </>
  );
}

export default SignUp;
