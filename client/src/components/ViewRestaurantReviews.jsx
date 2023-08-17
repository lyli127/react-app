// React
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Custom Components
import { Review } from "./Review";
import { MainNav } from "./MainNav";
import { Footer } from "./Footer";

//Bootstrap
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ViewRestaurantReviews({ restaurantName }) {
  const [reviewList, setReviewList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  //get a list of all reviews on page load => save as state then loop over the list and display each one
  useEffect(() => {
    if (!isLoaded) {
      fetch(`http://localhost:3000/api/reviews/all`)
        .then((response) => response.json())
        .then((data) => {
          setReviewList(data);
          setIsLoaded(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  //map over the list of reviews and display each one
  return (
    <>
      <MainNav />

      <CardGroup>
        {isLoaded ? (
          reviewList.map((review) => (
            <Review
              data={review}
              className="review-card"
              key={review.id}
            ></Review>
          ))
        ) : (
          <>
            <div className="justify-content-center">
              <Spinner animation="border" size="lg" />
            </div>
          </>
        )}
      </CardGroup>
      <Footer />
    </>
  );
}

export default ViewRestaurantReviews;
