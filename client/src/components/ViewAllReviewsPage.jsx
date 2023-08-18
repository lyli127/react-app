// React
import { useEffect, useState } from "react";

//Custom Components
import { Review } from "./Review";
import { MainNav } from "./MainNav";
import { Footer } from "./Footer";

//Bootstrap
// import CardGroup from "react-bootstrap/CardGroup";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// Config
import { BASE_API_URL } from "../utils/config";

function ViewAllReviewsPage() {
  const [reviewList, setReviewList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  //get a list of all reviews on page load => save as state then loop over the list and display each one
  useEffect(() => {
    if (!isLoaded) {
      fetch(`${BASE_API_URL}/api/reviews/all`)
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
      <Container fluid="md">
        <Row className="justify-content-evenly">
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
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ViewAllReviewsPage;
