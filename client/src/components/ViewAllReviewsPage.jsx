// import ViewReview from "./ViewReview";
import { Review } from "./Review";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { MainNav } from "./MainNav";
import { Footer } from "./Footer";

import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import Spinner from "react-bootstrap/Spinner";

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

  // return (
  //   <div>
  //     {isLoaded ? (
  //       reviewList.map((review) => (
  //         <>
  //           <p>{review.date_visited}</p>
  //           <h3 key={review.id}>{review.restaurant_name}</h3>
  //           <img src={review.photo_url} alt="dish photo" />
  //           <p>{review.dish_name}</p>
  //           <p>{review.ramen_score}</p>
  //           <p>{review.ramen_type}</p>
  //           <p>{review.noodle_score}</p>
  //           <p>{review.noodle_texture}</p>
  //           <p>{review.broth_score}</p>
  //           <p>{review.broth_type}</p>
  //           <p>{review.chashu_score}</p>
  //           <p>{review.chashu_type}</p>
  //           <p>{review.ajitama_score}</p>
  //           <p>{review.ajitama}</p>
  //           <p>{review.other_notes}</p>
  //         </>
  //       ))
  //     ) : (
  //       <p>Loading...</p>
  //     )}
  //   </div>
  // );
  return (
    <>
      <MainNav
        isLoggedIn={props.isLoggedIn}
        handleAuthClick={props.handleAuthClick}
      />

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
          <Spinner animation="border" size="lg" />
        )}
      </CardGroup>
      <Footer />
    </>
  );
}

export default ViewAllReviewsPage;
