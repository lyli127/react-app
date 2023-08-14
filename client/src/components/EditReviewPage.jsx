import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { MainNav } from "./MainNav";

function EditReviewPage(props) {
  const { id } = useParams();
  const dateSettings = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <>
      <MainNav
        isLoggedIn={props.isLoggedIn}
        handleAuthClick={props.handleAuthClick}
      />
      <h2>Edit Review</h2>

      <EditReviewForm id={id} />
    </>
  );
}

function EditReviewForm({ id }) {
  const [reviewData, setReviewData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      fetch(`http://localhost:3000/api/review/${id}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setReviewData(data);
          setIsLoading(false);
        });
    }
  }, []);

  const handleSubmission = (e) => {
    e.preventDefault();
    // console.log(reviewData);

    reviewData.user_id = 1;

    fetch(`http://localhost:3000/api/review/${id}`, {
      method: "PUT",
      body: JSON.stringify(reviewData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleInputChange = (e) => {
    const newReviewData = { ...reviewData };
    newReviewData[e.target.name] = e.target.value;
    setReviewData(newReviewData);
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Form onSubmit={handleSubmission}>
          <Form.Group controlId="date_visited">
            <Form.Label>Date Visited</Form.Label>
            <Form.Control
              type="date"
              name="date_visited"
              value={reviewData.date_visited.split("T")[0]}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="restaurant_name">
            <Form.Label>Restaurant Name</Form.Label>
            <Form.Control
              type="text"
              name="restaurant_name"
              value={reviewData.restaurant_name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="photo_url">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photo_url"
              value={reviewData.photo_url}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="dish_name">
            <Form.Label>Dish Name</Form.Label>
            <Form.Control
              type="text"
              name="dish_name"
              value={reviewData.dish_name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="ramen_score">
            <Form.Label>Ramen Score</Form.Label>
            <Form.Control
              type="number"
              name="ramen_score"
              value={reviewData.ramen_score}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="ramen_type">
            <Form.Label>Ramen Type</Form.Label>
            <Form.Control
              type="text"
              name="ramen_type"
              value={reviewData.ramen_type}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="noodle_score">
            <Form.Label>Noodle Score</Form.Label>
            <Form.Control
              type="number"
              name="noodle_score"
              value={reviewData.noodle_score}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="noodle_texture">
            <Form.Label>Noodle Texture</Form.Label>
            <Form.Control
              type="text"
              name="noodle_texture"
              value={reviewData.noodle_texture}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="broth_score">
            <Form.Label>Broth Score</Form.Label>
            <Form.Control
              type="number"
              name="broth_score"
              value={reviewData.broth_score}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="broth_type">
            <Form.Label>Broth Type</Form.Label>
            <Form.Control
              type="text"
              name="broth_type"
              value={reviewData.broth_type}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="chashu_score">
            <Form.Label>Chashu Score</Form.Label>
            <Form.Control
              type="number"
              name="chashu_score"
              value={reviewData.chashu_score}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="chashu_type">
            <Form.Label>Chashu Type</Form.Label>
            <Form.Control
              type="text"
              name="chashu_type"
              value={reviewData.chashu_type}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="ajitama_score">
            <Form.Label>Ajitama Score</Form.Label>
            <Form.Control
              type="number"
              name="ajitama_score"
              value={reviewData.ajitama_score}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="ajitama">
            <Form.Label>Ajitama</Form.Label>
            <Form.Control
              type="text"
              name="ajitama"
              value={reviewData.ajitama}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="other_notes">
            <Form.Label>Other Notes</Form.Label>
            <Form.Control
              type="text"
              name="other_notes"
              value={reviewData.other_notes}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="secondary-outline" href="/my-reviews">
            Cancel
          </Button>
        </Form>
      )}
    </>
  );
}

export default EditReviewPage;
