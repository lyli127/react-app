// import RTL utilities
import { render, screen } from "@testing-library/react";
// Import deps
import { BrowserRouter } from "react-router-dom";
// import component under test
import ViewAllReviewsPage from "./ViewAllReviewsPage";

//nav bar is present
it("should show my nav text", () => {
  render(<ViewAllReviewsPage />, { wrapper: BrowserRouter });
  expect(screen.queryByText("Home")).toBeInTheDocument();
  expect(screen.queryByText("Find Ramen")).toBeInTheDocument();
  expect(screen.queryByText("Reviews")).toBeInTheDocument();
});

//Footer is present
it("should show my footer", () => {
  render(<ViewAllReviewsPage />, { wrapper: BrowserRouter });
  expect(screen.getByText("Lylibete Tennikoff © 2023")).toBeInTheDocument();
});

//test if review is loaded
it("should show my review", () => {
  render(<ViewAllReviewsPage />, { wrapper: BrowserRouter });
  // expect(screen.getByRole("button")).toBeInTheDocument();
  // expect(screen.getByRole("img")).toBeInTheDocument();
  // expect(screen.getAllByDisplayValue("Visited")).toBeInTheDocument();
  // expect(screen.getAllByAltText(/ramen/i)).toBeInTheDocument();
});
