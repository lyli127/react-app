//REACT
import "./App.css";
import { Routes, Route } from "react-router-dom";

//MY COMPONENTS
import Home from "./components/Home";
import FindRamen from "./components/FindRamen";
import ViewRestaurantReviews from "./components/ViewRestaurantReviews";
import ViewAllReviewsPage from "./components/ViewAllReviewsPage";
import { CreateReview } from "./components/CreateReview";
import ReviewSearchPage from "./components/ReviewSearchPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-review" element={<CreateReview />} />
        <Route path="/find-ramen" element={<FindRamen />} />
        <Route path="/all-reviews" element={<ViewAllReviewsPage />} />
        <Route path="/reviews/:slug" element={<ViewRestaurantReviews />} />
        <Route path="/search-reviews" element={<ReviewSearchPage />} />
      </Routes>
    </>
  );
}

export { App };
