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

const CreateReview = () => {
  const { setUser } = useContext(AccountContext);
  const navigate = useNavigate();

  const [fields, setFields] = useState({
    date_visited: "",
    restaurant_name: "",
    photo_url: "",
    dish_name: "",
    ramen_score: "",
    ramen_type: "",
    noodle_score: "",
    noodle_texture: "",
    broth_score: "",
    broth_type: "",
    chashu_score: "",
    chashu_type: "",
    ajitama_score: "",
    ajitama: "",
    other_notes: "",
  });

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(fields);
    fetch("http://localhost:3000/api/review", {
      method: "POST",
      body: JSON.stringify(fields),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (e) => {
    const newFields = { ...fields };
    newFields[e.target.name] = e.target.value;
    setFields(newFields);
  };

  return (
    <>
      <MainNav />
      <br />
      <br />

      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h2>Add Review</h2>
          </Col>
        </Row>
      </Container>

      <Form onSubmit={handleSubmission}>
        <Form.Group controlId="date_visited">
          <Form.Label>Date Visited</Form.Label>
          <Form.Control
            type="date"
            name="date_visited"
            // value={fields.date_visited}
            // value={new Date(fields.date_visited).toISOString().split("T")[0]}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="restaurant_name">
          <Form.Label>Restaurant Name</Form.Label>
          <Form.Control
            type="text"
            name="restaurant_name"
            value={fields.restaurant_name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="photo_url">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo_url"
            value={fields.photo_url}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="dish_name">
          <Form.Label>Dish Name</Form.Label>
          <Form.Control
            type="text"
            name="dish_name"
            value={fields.dish_name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="ramen_score">
          <Form.Label>Ramen Score</Form.Label>
          <Form.Control
            type="number"
            name="ramen_score"
            value={fields.ramen_score}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="ramen_type">
          <Form.Label>Ramen Type</Form.Label>
          <Form.Control
            type="text"
            name="ramen_type"
            value={fields.ramen_type}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="noodle_score">
          <Form.Label>Noodle Score</Form.Label>
          <Form.Control
            type="number"
            name="noodle_score"
            value={fields.noodle_score}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="noodle_texture">
          <Form.Label>Noodle Texture</Form.Label>
          <Form.Control
            type="text"
            name="noodle_texture"
            value={fields.noodle_texture}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="broth_score">
          <Form.Label>Broth Score</Form.Label>
          <Form.Control
            type="number"
            name="broth_score"
            value={fields.broth_score}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="broth_type">
          <Form.Label>Broth Type</Form.Label>
          <Form.Control
            type="text"
            name="broth_type"
            value={fields.broth_type}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="chashu_score">
          <Form.Label>Chashu Score</Form.Label>
          <Form.Control
            type="number"
            name="chashu_score"
            value={fields.chashu_score}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="chashu_type">
          <Form.Label>Chashu Type</Form.Label>
          <Form.Control
            type="text"
            name="chashu_type"
            value={fields.chashu_type}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="ajitama_score">
          <Form.Label>Ajitama Score</Form.Label>
          <Form.Control
            type="number"
            name="ajitama_score"
            value={fields.ajitama_score}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="ajitama">
          <Form.Label>Ajitama</Form.Label>
          <Form.Control
            type="text"
            name="ajitama"
            value={fields.ajitama}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="other_notes">
          <Form.Label>Other Notes</Form.Label>
          <Form.Control
            type="text"
            name="other_notes"
            value={fields.other_notes}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Footer />
    </>
  );
};

export { CreateReview };
