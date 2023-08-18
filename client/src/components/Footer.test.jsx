// import RTL utilities
import { render, screen } from "@testing-library/react";
// import component under test
import { Footer } from "./Footer";

//test image is loaded
it("should show my image", () => {
  render(<Footer />);
  expect(screen.getByAltText("ramen logo")).toBeInTheDocument();

  expect(screen.getByRole("img")).toBeInTheDocument();
});

//test text is loaded
it("should show my text", () => {
  render(<Footer />);
  expect(screen.getByText("Lylibete Tennikoff © 2023")).toBeInTheDocument();
});
