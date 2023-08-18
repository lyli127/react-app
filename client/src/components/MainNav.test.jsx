// import RTL utilities
import { render, screen } from "@testing-library/react";
// Import deps
import { BrowserRouter } from "react-router-dom";
// import component under test
import { MainNav } from "./MainNav";

//test text is loaded
it("should show my nav text", () => {
  render(<MainNav />, { wrapper: BrowserRouter });
  expect(screen.queryByText("Home")).toBeInTheDocument();
  expect(screen.queryByText("Find Ramen")).toBeInTheDocument();
  expect(screen.queryByText("Reviews")).toBeInTheDocument();
});
