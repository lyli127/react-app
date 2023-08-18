// import RTL utilities
import { render, screen } from "@testing-library/react";
// import component under test
import { CreateReview } from "./CreateReview";

//test form is loaded
it("should show my form", () => {
  render(<CreateReview />);
  expect(screen.getByText("Date Visited")).toBeInTheDocument();
  expect(screen.getByText("Restaurant")).toBeInTheDocument();
  expect(screen.getByText("Photo URL")).toBeInTheDocument();
  expect(screen.getByText("Dish Name")).toBeInTheDocument();
  expect(screen.getByText("Ramen Score")).toBeInTheDocument();
  expect(screen.getByText("Ramen Type")).toBeInTheDocument();
});

// // test that text is not present when showMyProp boolean is `false`
// it("should not show myProp", () => {
//     render(<MyComponent showMyProp={false} myProp="hello" />);
//     // different RTL utility `screen.queryByText` (`screen.findByText` throws error if text not present)
//     const myProp = screen.queryByText("hello");
//     // assert no element in document with text
//     expect(myProp).toBeNull();
//   });
