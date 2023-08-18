//React
import { React, useEffect, useState } from "react";

//Bootstrap
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//My Components
import { MainNav } from "./MainNav";
import { Footer } from "./Footer";
import { Review } from "./Review";

// Config
import { BASE_API_URL } from "../utils/config";

const ReviewSearchPage = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const [restaurant, setRestaurant] = useState({
    restaurant_name: "",
  });

  useEffect(() => {
    fetch(`${BASE_API_URL}/api/restaurants/all`)
      .then((response) => response.json())
      .then((restaurants) => {
        // console.log(data);
        //pluck the names from the restaurants to add to the state
        setRestaurantList(
          restaurants.map((r) => {
            return { restaurantName: r.name, slug: r.slug };
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleInputChange = (e) => {
    const newRestaurant = { ...restaurant };
    newRestaurant[e.target.name] = e.target.value;
    setRestaurant(newRestaurant);
    fetch(`${BASE_API_URL}/api/reviews/${e.target.value}`)
      .then((response) => response.json())
      .then((data) => {
        setReviewList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //PAGE COMPONENT
  return (
    <>
      <MainNav />
      <br />
      <br />
      {/* Loop through restaurant names to add them to the dropdown  */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form.Group controlId="restaurant_name">
          <Form.Select
            aria-label="restaurant-name"
            name="restaurant_name"
            value={restaurant.restaurant_name}
            onChange={handleInputChange}
          >
            <option>Choose Restaurant</option>
            {restaurantList.map((restaurantObj) => {
              return (
                <option value={restaurantObj.slug} key={restaurantObj.slug}>
                  {restaurantObj.restaurantName}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
      </div>
      <br />
      <br />
      <div>
        <Container fluid="md">
          <Row className="justify-content-evenly">
            {reviewList.map((review) => (
              <Review
                data={review}
                className="review-card"
                key={review.id}
              ></Review>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ReviewSearchPage;
