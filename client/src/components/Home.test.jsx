// import RTL utilities
import { render, screen } from "@testing-library/react";
// Import deps
import { BrowserRouter } from "react-router-dom";
// import component under test
import HomePage from "./Home";

//test if navbar is present
it("should show my navbar", () => {
  render(<HomePage />, { wrapper: BrowserRouter });
  expect(screen.queryByText("Home")).toBeInTheDocument();
  expect(screen.queryByText("Find Ramen")).toBeInTheDocument();
  expect(screen.queryByText("Reviews")).toBeInTheDocument();
});

//test if main image is present
it("should show my image", () => {
  render(<HomePage />, { wrapper: BrowserRouter });
  // expect(screen.getByRole("h3")).toBeInTheDocument();
  // expect(screen.getAllByAltText(/ramen/i)).toBeInTheDocument();
});

//test if footer is present
it("should show my footer", () => {
  render(<HomePage />, { wrapper: BrowserRouter });
  expect(screen.getByText("Lylibete Tennikoff © 2023")).toBeInTheDocument();
  expect(screen.getByAltText("ramen logo")).toBeInTheDocument();
});
