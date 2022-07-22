import { render, screen } from "@testing-library/react";
import Countries from "../Countries.js";

describe("Countries Tests", () => {
  it("initial state should have data loaded", async () => {
    render(<Countries />);

    const countries = await screen.findAllByRole("img", {
      name: "wait",
      hidden: true,
    });

    expect(countries).toHaveLength(2);
  });
});
