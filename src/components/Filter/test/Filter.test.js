import { render, screen, fireEvent } from "@testing-library/react";

import Filter from "../Filter.js";

//test for initial value of filter

//test for value to equal change value

describe("Tests for Filter", () => {
  it("the value for filter should be empty when the page loads", () => {
    render(<Filter />);

    const filter = screen.getByTestId(/input-for-filter/i);

    expect(filter.value).toBe("");
  });

  it("should call the handleChange function when filtered and the value should return the same as the user input", () => {
    const handle = jest.fn();
    render(<Filter onSaveRegion={handle} />);

    const filter = screen.getByTestId(/input-for-filter/i);

    fireEvent.change(filter, {
      target: { value: "Europe" },
    });

    expect(filter.value).toBe("Europe");
    expect(handle).toHaveBeenCalled();
  });
});
