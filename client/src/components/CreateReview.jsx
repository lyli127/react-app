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
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h2>Add Review</h2>
          </Col>
        </Row>
      </Container>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form onSubmit={handleSubmission} style={{ width: "70%" }}>
          <Form.Group controlId="restaurant_name" className="mb-3">
            <FloatingLabel label="Restaurant Name">
              <Form.Select
                aria-label="restaurant-name"
                name="restaurant_name"
                value={fields.restaurant_name}
                onChange={handleInputChange}
              >
                <option></option>
                {restaurantList.map((restaurantName) => {
                  return (
                    <option value={restaurantName} key={restaurantName}>
                      {restaurantName}
                    </option>
                  );
                })}
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId="date_visited" className="mb-3">
            <FloatingLabel label="Date Visited">
              <Form.Control
                type="date"
                name="date_visited"
                // value={fields.date_visited}
                // value={new Date(fields.date_visited).toISOString().split("T")[0]}
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </Form.Group>
          {/* Loop through restaurant names to add them to the dropdown  */}

          <Form.Group controlId="photo_url" className="mb-3">
            {/* <Form.Label>Photo URL</Form.Label> */}
            <FloatingLabel label="Photo URL">
              <Form.Control
                type="text"
                name="photo_url"
                value={fields.photo_url}
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId="dish_name" className="mb-3">
            {/* <Form.Label>Dish Name</Form.Label> */}
            <FloatingLabel label="Dish Name">
              <Form.Control
                type="text"
                name="dish_name"
                value={fields.dish_name}
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId="ramen_score" className="mb-3">
            <FloatingLabel label="Ramen Score">
              <Form.Control
                type="number"
                name="ramen_score"
                value={fields.ramen_score}
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId="ramen_type" className="mb-3">
            <FloatingLabel label="Ramen Type">
              <Form.Control
                type="text"
                name="ramen_type"
                value={fields.ramen_type}
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId="noodle_score" className="mb-3">
            <FloatingLabel label="Noodle Score">
              <Form.Control
                type="number"
                name="noodle_score"
                value={fields.noodle_score}
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId="noodle_texture" className="mb-3">
            <FloatingLabel label="Noodle Texture">
              <Form.Select
                aria-label="noodle-texture"
                name="noodle_texture"
                value={fields.noodle_texture}
                onChange={handleInputChange}
              >
                <option></option>
                <option value="Very Soft">Very Soft</option>
                <option value="Soft">Soft</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
                <option value="very Hard">Very Hard</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId="broth_score" className="mb-3">
            <FloatingLabel label="Broth Score">
              <Form.Control
                type="number"
                name="broth_score"
                value={fields.broth_score}
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId="broth_type" className="mb-3">
            <FloatingLabel label="Broth Type">
              <Form.Control
                type="text"
                name="broth_type"
                value={fields.broth_type}
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId="chashu_score" className="mb-3">
            <FloatingLabel label="Chashu Score">
              <Form.Control
                type="number"
                name="chashu_score"
                value={fields.chashu_score}
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId="chashu_type" className="mb-3">
            <FloatingLabel label="Chashu Type">
              <Form.Select
                aria-label="chashu_type"
                name="chashu_type"
                value={fields.chashu_type}
                onChange={handleInputChange}
              >
                <option></option>
                <option value="Pork">Pork</option>
                <option value="Chicken">Chicken</option>
                <option value="Vegan">Vegan</option>
                <option value="Other">Other</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId="ajitama_score" className="mb-3">
            <FloatingLabel label="Ajitama Score">
              <Form.Control
                type="number"
                name="ajitama_score"
                value={fields.ajitama_score}
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId="ajitama" className="mb-3">
            <FloatingLabel label="Ajitama">
              <Form.Control
                type="text"
                name="ajitama"
                value={fields.ajitama}
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId="other_notes" className="mb-3">
            <FloatingLabel label="Other Notes">
              <Form.Control
                type="text"
                name="other_notes"
                value={fields.other_notes}
                onChange={handleInputChange}
              />
            </FloatingLabel>
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
