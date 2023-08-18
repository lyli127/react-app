//React
import { React, useEffect, useState } from "react";
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
// Config
import { BASE_API_URL } from "../utils/config";

const CreateReview = () => {
  const navigate = useNavigate();
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetch(`${BASE_API_URL}/api/restaurants/all`)
      .then((response) => response.json())
      .then((restaurants) => {
        // console.log(data);
        //pluck the names from the restaurants to add to the state
        setRestaurantList(restaurants.map((r) => r.name));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
    fetch(`${BASE_API_URL}/api/review`, {
      method: "POST",
      body: JSON.stringify(fields),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          navigate(`/all-reviews`);
        }
      })
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
      <div></div>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h2>Add Review</h2>
          </Col>
        </Row>
      </Container>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form onSubmit={handleSubmission} style={{ width: "70%" }}>
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
          {/* Loop through restaurant names to add them to the dropdown  */}
          <Form.Group controlId="restaurant_name">
            <Form.Label>Restaurant</Form.Label>
            <Form.Select
              aria-label="restaurant-name"
              name="restaurant_name"
              value={fields.restaurant_name}
              onChange={handleInputChange}
            >
              <option>Choose Restaurant</option>
              {restaurantList.map((restaurantName) => {
                return (
                  <option value={restaurantName} key={restaurantName}>
                    {restaurantName}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="photo_url">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photo_url"
              value={fields.photo_url}
              onChange={handleInputChange}
              placeholder="Enter photo URL"
            />
          </Form.Group>
          <Form.Group controlId="dish_name">
            <Form.Label>Dish Name</Form.Label>
            <Form.Control
              type="text"
              name="dish_name"
              value={fields.dish_name}
              onChange={handleInputChange}
              placeholder="Enter dish name"
            />
          </Form.Group>
          <Form.Group controlId="ramen_score">
            <Form.Label>Ramen Score</Form.Label>
            <Form.Control
              type="number"
              name="ramen_score"
              value={fields.ramen_score}
              onChange={handleInputChange}
              placeholder="Enter overall score"
            />
          </Form.Group>
          <Form.Group controlId="ramen_type">
            <Form.Label>Ramen Type</Form.Label>
            <Form.Control
              type="text"
              name="ramen_type"
              value={fields.ramen_type}
              onChange={handleInputChange}
              placeholder="Enter ramen type"
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
            <Form.Select
              aria-label="noodle-texture"
              name="noodle_texture"
              value={fields.noodle_texture}
              onChange={handleInputChange}
            >
              <option>Choose Noodle Texture</option>
              <option value="Very Soft">Very Soft</option>
              <option value="Soft">Soft</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
              <option value="very Hard">Very Hard</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="broth_score">
            <Form.Label>Broth Score</Form.Label>
            <Form.Control
              type="number"
              name="broth_score"
              value={fields.broth_score}
              onChange={handleInputChange}
              placeholder="Enter broth score"
            />
          </Form.Group>
          <Form.Group controlId="broth_type">
            <Form.Label>Broth Type</Form.Label>
            <Form.Control
              type="text"
              name="broth_type"
              value={fields.broth_type}
              onChange={handleInputChange}
              placeholder="Miso, Shoyu, Tonkotsu..."
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
            <Form.Select
              aria-label="chashu_type"
              name="chashu_type"
              value={fields.chashu_type}
              onChange={handleInputChange}
            >
              <option>Choose Chashu Type</option>
              <option value="Pork">Pork</option>
              <option value="Chicken">Chicken</option>
              <option value="Vegan">Vegan</option>
              <option value="Other">Other</option>
            </Form.Select>
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
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
          {"    "}
          <Button
            //Cancel button should navigate back to the restaurant page
            variant="secondary"
            onClick={() => navigate(`/`)}
          >
            Cancel
          </Button>
        </Form>
      </div>
      <Footer />
    </>
  );
};

export { CreateReview };
