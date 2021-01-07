import React from "react";
import { render, getByText, screen } from "./test-utils";
import App from "../frontend/components/app";
import { preloadedState } from "../frontend/preloaded-state";
import "@testing-library/jest-dom";
import { RowItem } from "../frontend/components/row-item";
import { connect } from "react-redux";
import configureStore from "../frontend/store/store";
import {
  receiveCategoryRewards,
  updateCategoryRewards,
  deleteCategoryRewards,
} from "../frontend/actions/category-rewards-actions";

describe("Table should be rendered", () => {
  it("Should have approriate headers and subheaders", () => {
    render(<App />, { initialState: preloadedState });

    expect(screen.getByTestId("main-table")).toBeInTheDocument();
    expect(screen.getByTestId("main-th-rew")).toHaveTextContent("rewards");
    expect(screen.getByTestId("main-th-cat")).toHaveTextContent("categories");
    expect(screen.getByTestId("main-table")).toHaveTextContent(
      "R1",
      "R2",
      "R3"
    );
  });

  describe("Cells should be draggable", () => {
    it("Should have data cells with draggable attributes", () => {
      render(<App />, { initialState: preloadedState });

      const nonEmpty = screen.getAllByTestId("row-item");
      nonEmpty.forEach((el) => {
        expect(el).toHaveAttribute("draggable");
      });

      const empty = screen.getAllByTestId("empty-row-item");
      empty.forEach((el) => {
        expect(el).toHaveAttribute("draggable");
      });
    });

    it("Empty cells should have false draggable attributes", () => {
      render(<App />, { initialState: preloadedState });

      const empty = screen.getAllByTestId("empty-row-item");
      empty.forEach((el) => {
        let val = el.getAttribute("draggable");
        expect(val).toEqual("false");
      });
    });

    it("Non-empty cells should have true draggable attributes", () => {
      render(<App />, { initialState: preloadedState });

      const nonEmpty = screen.getAllByTestId("row-item");
      nonEmpty.forEach((el) => {
        let val = el.getAttribute("draggable");
        expect(val).toEqual("true");
      });
    });
  });
});

describe("Dispatching actions", () => {
  const store = configureStore(preloadedState);
  it("Should be able to receive new categoryRewards", () => {
    store.dispatch(
      receiveCategoryRewards({
        id: 100,
        categoryId: 100,
        rewardId: 100,
      })
    );
    let newState = store.getState();
    expect(newState.entities.categoryRewards.byId[100]).not.toBeEmpty;
  });

  it("Should be able to update existing categoryRewards", () => {
    store.dispatch(
      updateCategoryRewards({
        id: 1,
        categoryId: 3,
        rewardId: 3,
      })
    );

    let newState = store.getState();
    expect(newState.entities.categoryRewards.byId[1].categoryId).toEqual(3);
    expect(newState.entities.categoryRewards.byId[1].rewardId).toEqual(3);
  });

  it("Should be able to delete existing categoryRewards", () => {
    store.dispatch(deleteCategoryRewards(1));

    let newState = store.getState();
    expect(newState.entities.categoryRewards.byId[1]).toBeEmpty;
  });
});
