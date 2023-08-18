// React
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Custom Components
import { Review } from "./Review";
import { MainNav } from "./MainNav";
import { Footer } from "./Footer";

//Bootstrap
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import Spinner from "react-bootstrap/Spinner";

// Config
import { BASE_API_URL } from "../utils/config";

function ViewRestaurantReviews() {
  const [reviewList, setReviewList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { slug } = useParams();

  //get a list of all reviews on page load => save as state then loop over the list and display each one
  useEffect(() => {
    if (!isLoaded) {
      fetch(`${BASE_API_URL}/api/reviews/${slug}`)
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
