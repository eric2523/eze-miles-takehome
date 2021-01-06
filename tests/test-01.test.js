import React from "react";
import { render, getByText, screen } from "./test-utils";
import App from "../frontend/components/app";
import { preloadedState } from "../frontend/preloaded-state";
import "@testing-library/jest-dom";
import { RowTitleItem } from "../frontend/components/row-index"

test("renders a table with approriate headers and subheaders", () => {
  render(<App />, { initialState: preloadedState });

  expect(screen.getByTestId("main-table")).toBeInTheDocument();
  expect(screen.getByTestId("main-th-rew")).toHaveTextContent("rewards");
  expect(screen.getByTestId("main-th-cat")).toHaveTextContent("categories");
  expect(screen.getByTestId("main-table")).toHaveTextContent("R1", "R2", "R3")
});
