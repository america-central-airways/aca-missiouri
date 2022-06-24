import { render, screen } from "@testing-library/react";
import FirstPage from "./FirstPage";

describe("first page", () => {
  it("has correct text class on is primary", () => {
    render(<FirstPage isPrimary />);

    expect(screen.getByText(/first page/iu)).toHaveClass("has-text-primary");
  });

  it("has correct text class on is primary false", () => {
    render(<FirstPage isPrimary={false} />);

    expect(screen.getByText(/first page/iu)).toHaveClass("has-text-success");
  });
});
