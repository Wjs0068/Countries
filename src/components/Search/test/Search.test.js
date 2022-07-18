import { render, screen, fireEvent } from "@testing-library/react";

import Search from "../Search.js";

describe("Search Tests", () => {
  it("should have an empty string in its initial state", () => {
    render(<Search />);

    const searchInput = screen.getByTestId(/input-for-search/i);

    expect(searchInput.value).toBe("");
  });

  it("should call the function on change and the text field value should match the input from the user", () => {
    const changes = jest.fn();

    render(<Search onSaveSearch={changes} />);

    const searchInput = screen.getByTestId(/input-for-search/i);

    fireEvent.change(searchInput, {
      target: {
        value: "United",
      },
    });

    expect(searchInput.value).toBe("United");

    expect(changes).toHaveBeenCalled();
  });
});
