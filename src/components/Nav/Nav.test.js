import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Nav from "./Nav.js";
import { reload } from "./Nav.js";

describe("Navigation Test", () => {
  it("should call the reload function when the title is pressed", () => {
    render(<Nav />);
    const spy = jest.spyOn(reload, "reload");
    const isReloading = reload.reload();
    const titleButton = screen.getByRole("button", {
      name: /All Around the World/i,
    });

    userEvent.click(titleButton);

    expect(spy).toBeCalled();
    expect(isReloading).toBe(true);
  });
});
