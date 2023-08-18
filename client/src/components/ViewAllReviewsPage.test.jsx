// import RTL utilities
import { render, screen } from "@testing-library/react";
// import component under test
import { ViewAllReviewsPage } from "./Review";

//test if review is loaded
it("should show my review", () => {
  render(<ViewAllReviewsPage />);
  expect(screen.getByText("Date Visited")).toBeInTheDocument();
  expect(screen.getByText("Restaurant")).toBeInTheDocument();
  expect(screen.getByText("Dish Name")).toBeInTheDocument();
  expect(screen.getByText("Ramen Score")).toBeInTheDocument();
  expect(screen.getByText("Ramen Type")).toBeInTheDocument();
  expect(screen.getByText("Noodle Texture")).toBeInTheDocument();
  expect(screen.getByText("Noodle Score")).toBeInTheDocument();
  expect(screen.getByText("Broth Type")).toBeInTheDocument();
  expect(screen.getByText("Broth Score")).toBeInTheDocument();
  expect(screen.getByText("Chashu Type")).toBeInTheDocument();
  expect(screen.getByText("Chashu Score")).toBeInTheDocument();
  expect(screen.getByText("Ajitama")).toBeInTheDocument();
  expect(screen.getByText("Ajitama Score")).toBeInTheDocument();
  expect(screen.getByText("Other Notes")).toBeInTheDocument();
  expect(screen.getByText("Submit")).toBeInTheDocument();
});
