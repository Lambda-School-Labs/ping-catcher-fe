import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App.js", () => {
  test("renders Loading...", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Loading.../i);
    expect(linkElement).toBeInTheDocument();
  });
});
