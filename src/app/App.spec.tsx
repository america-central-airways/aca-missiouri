import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("app", () => {
  it("renders learn react link", () => {
    const component = (): JSX.Element => {
      return (
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
    };

    render(component());
    const linkElement = screen.getByText(/home page/iu);
    expect(linkElement).toBeInTheDocument();
  });
});
