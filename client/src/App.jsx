//REACT
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

//MY COMPONENTS
import Home from "./components/Home";
import ViewAllReviewsPage from "./components/ViewAllReviewsPage";
import FindRamen from "./components/FindRamen";
import ViewRestaurantReviews from "./components/ViewRestaurantReviews";
import { CreateReview } from "./components/CreateReview";

function App() {
  return (
    <>
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/add-review" element={<CreateReview />} />
          <Route path="/my-reviews" element={<ViewAllReviewsPage />} />
          <Route path="/find-ramen" element={<FindRamen />} />
          <Route
            path="/reviews/:restaurantName"
            element={<ViewRestaurantReviews />}
          />
          <Route path="/restaurant" element={<ViewRestaurantReviews />} />
        </>
      </Routes>
    </>
  );
}

export { App };
