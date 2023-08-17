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

function ViewAllReviewsPage(props) {
  const [reviewList, setReviewList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  function handleDelete(reviewId) {
    // 1. Call your API to delete this review
    // 2. If successful:
    //    - Get the current `reviewList`
    //    - Remove the review with the matching `reviewId`
    //    - Use `setReviewList` to send the updated list
  }

  //get a list of all reviews on page load => save as state then loop over the list and display each one
  useEffect(() => {
    if (!isLoaded) {
      fetch(`http://localhost:3000/api/review/${props.user_id}/all`)
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
            <Review data={review} className="review-card" key={review.id}>
              <div className="button" style={{ padding: "1%" }}>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/review/edit/${review.id}`)}
                >
                  Edit Review
                </Button>
                {"      "}
                <Button variant="secondary" onClick={handleDelete(review.id)}>
                  Delete
                </Button>
              </div>
            </Review>
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

export default ViewAllReviewsPage;
