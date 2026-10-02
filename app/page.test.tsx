/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("renders the home page", () => {
  render(<Page />);
  expect(
    screen.getByRole("heading", { name: /welcome to next\.js!/i }),
  ).toBeInTheDocument();
});
