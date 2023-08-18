// import RTL utilities
import { render, screen } from "@testing-library/react";
// import component under test
import HomePage from "./Home";

//test if navbar is present
it("should show my navbar", () => {
  render(<HomePage />);
  expect(screen.getByRole("nav")).toBeInTheDocument();
});

//test if main image is present
it("should show my image", () => {
  render(<HomePage />);
  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(screen.getByAltText("ramen image")).toBeInTheDocument();
});

//test if footer is present
it("should show my footer", () => {
  render(<HomePage />);
  expect(screen.getByText("Lylibete Tennikoff © 2023")).toBeInTheDocument();
  expect(screen.getByAltText("ramen logo")).toBeInTheDocument();
});
