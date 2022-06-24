import { render, screen } from "@testing-library/react";
import SecondPage from "./SecondPage";

describe("second page", () => {
  it("renders properly", () => {
    render(<SecondPage />);

    expect(screen.getByText(/second page/iu)).toBeInTheDocument();
  });
});
