// import RTL utilities
import { render, screen } from "@testing-library/react";
// import component under test
import { MainNav } from "./MainNav";

//test text is loaded
it("should show my nav text", () => {
  render(<MainNav />);
  expect(screen.getByText("Noodle||Nexus")).toBeInTheDocument();
  expect(screen.getByText("ラーメン")).toBeInTheDocument();
  expect(screen.getByText("Find Ramen")).toBeInTheDocument();
});

it("should show my logo text", () => {
  render(<MainNav />);
  expect(screen.getByText("Noodle||Nexus")).toBeInTheDocument();
  expect(screen.getByText("ラーメン")).toBeInTheDocument();
});
