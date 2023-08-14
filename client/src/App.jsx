//REACT
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { createContext, useContext, useMemo, useState } from "react";

//MY COMPONENTS
import { useLocalStorage } from "./utils/useLocalStorage";
import Home from "./components/Home";
import { Login } from "./components/Login";
import SignUp from "./components/SignUp";
import ViewAllReviewsPage from "./components/ViewAllReviewsPage";
import EditReviewPage from "./components/EditReviewPage";
import FindRamen from "./components/FindRamen";
import ViewRestaurantReviews from "./components/ViewRestaurantReviews";
import { UserContext } from "./components/AccountContext";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);

  const navigate = useNavigate();
  //call this function when you want to authenticate the user
  async function login(data) {
    setUser(data);
    navigate("/");
  }
  //call this function to sign out logged in user
  function logout() {
    setUser(null);
    navigate("/", { replace: true });
  }
  //memoization
  const value = useMemo(() => {
    user, login, logout;
  }, [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return useContext(AuthContext);
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  function handleAuthClick() {
    if (isLoggedIn) {
      // User is loggin out. Go to hompage.
      navigate("/");
    } else {
      // User is logging in. Go to /my-reviews
      navigate("/my-reviews");
    }

    setIsLoggedIn(() => !isLoggedIn);
  }

  return (
    <>
      <UserContext>
        <Routes>
          <Route
            path="/"
            element={
              <Home isLoggedIn={isLoggedIn} handleAuthClick={handleAuthClick} />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/my-reviews"
            element={
              <ViewAllReviewsPage
                isLoggedIn={isLoggedIn}
                handleAuthClick={handleAuthClick}
                user_id="1"
              />
            }
          />
          <Route path="/review/edit/:id" element={<EditReviewPage />} />
          <Route path="/find-ramen" element={<FindRamen />} />
          <Route
            path="/reviews/${restaurantName}"
            element={<ViewRestaurantReviews />}
          />
        </Routes>
      </UserContext>
    </>
  );
}

export { App, AuthContext };
