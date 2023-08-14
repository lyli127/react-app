import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { createContext, useContext, useMemo, useState } from "react";
import { useLocalStorage } from "./utils/useLocalStorage";
import Home from "./components/Home";
import { Login } from "./components/Login";
import SignUp from "./components/SignUp";
import ViewReview from "./components/ViewReview";
import ViewAllReviewsPage from "./components/ViewAllReviewsPage";
import EditReviewPage from "./components/EditReviewPage";
import FindRamen from "./components/FindRamen";
import ViewRestaurantReviews from "./components/ViewRestaurantReviews";
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
