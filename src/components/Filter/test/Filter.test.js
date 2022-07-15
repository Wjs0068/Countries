import { render, screen, fireEvent } from "@testing-library/react";

import Filter from "../Filter.js";

describe("Tests for Filter", () => {
  it("the value for filter should be empty when the page loads", () => {
    render(<Filter />);

    const filter = screen.getByTestId(/input-for-filter/i);

    expect(filter.value).toBe("");

    // fireEvent.change(filter, {
    //   target: { value: "Europe" },
    // });

    // expect(filter.value).toBe("Europe");
  });

  // it("Value for region should update when the user filters a region", () => {

  // });
});
