// import RTL utilities
import { render, screen } from "@testing-library/react";
// Import deps
import { BrowserRouter } from "react-router-dom";
// import component under test
import { CreateReview } from "./CreateReview";

//test form is loaded
it("should show my form", () => {
  render(<CreateReview />, { wrapper: BrowserRouter });
  expect(screen.getByText("Date Visited")).toBeInTheDocument();
  expect(screen.getByText("Restaurant")).toBeInTheDocument();
  expect(screen.getByText("Photo URL")).toBeInTheDocument();
  expect(screen.getByText("Dish Name")).toBeInTheDocument();
  expect(screen.getByText("Ramen Score")).toBeInTheDocument();
  expect(screen.getByText("Ramen Type")).toBeInTheDocument();
});
