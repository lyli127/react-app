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
        {user.loggedIn === null ? (
          " "
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/add-review" element={<CreateReview />} />
            <Route
              path="/my-reviews"
              element={<ViewAllReviewsPage user_id="1" />}
            />
            <Route path="/find-ramen" element={<FindRamen />} />
            <Route
              path="/reviews/:restaurantName"
              element={<ViewRestaurantReviews />}
            />
            <Route path="/restaurant" element={<ViewRestaurantReviews />} />
            {/* <Route element={<PrivateRoutes />}> */}
            <Route path="/review/edit/:id" element={<EditReviewPage />} />
            {/* </Route> */}
          </>
        )}
      </Routes>
    </>
  );
}

export { App };
