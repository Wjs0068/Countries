import { render, screen } from "@testing-library/react";
import Nav from "./Nav.js";

describe("Nav Tests", () => {
  test("should first", () => {
    render(<Nav />);
    const buttonElement = screen.findAllByText(/All Around the World/i);
    expect(buttonElement);
  });
});
