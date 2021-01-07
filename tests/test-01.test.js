import React from "react";
import { render, screen } from "./test-utils";
import App from "../frontend/components/app";
import { preloadedState } from "../frontend/preloaded-state";
import "@testing-library/jest-dom";
import {
  receiveCategoryRewards,
  updateCategoryRewards,
  deleteCategoryRewards,
} from "../frontend/actions/category-rewards-actions";
import { fireEvent } from "@testing-library/dom";
import configureMockStore from "redux-mock-store";
import { Root } from "../frontend/components/root";

describe("Table", () => {
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

  describe("Table Data", () => {
    it("Should have draggable attributes", () => {
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

    it("Empty cells should have draggable=false", () => {
      render(<App />, { initialState: preloadedState });

      const empty = screen.getAllByTestId("empty-row-item");
      empty.forEach((el) => {
        let val = el.getAttribute("draggable");
        expect(val).toEqual("false");
      });
    });

    it("Non-empty cells should have draggable=true", () => {
      render(<App />, { initialState: preloadedState });

      const nonEmpty = screen.getAllByTestId("row-item");
      nonEmpty.forEach((el) => {
        let val = el.getAttribute("draggable");
        expect(val).toEqual("true");
      });
    });
  });
});

describe("Action Creators", () => {
  let store, mockStore

  beforeEach(() => {
    mockStore = configureMockStore();
    store = mockStore(preloadedState);
  })

  it("Able to receive new categoryRewards", () => {
    store.dispatch(
      receiveCategoryRewards({
        id: 100,
        categoryId: 100,
        rewardId: 100,
      })
    );

    expect(store.getActions()).toMatchSnapshot();
    expect(store.getState().entities.categoryRewards.present.byId[100]).not
      .toBeEmpty;
  });

  it("Able to update existing categoryRewards", () => {
    store.dispatch(
      updateCategoryRewards({
        id: 1,
        categoryId: 3,
        rewardId: 3,
      })
    );

    expect(store.getActions()).toMatchSnapshot();
  });

  it("Able to delete existing categoryRewards", () => {
    store.dispatch(deleteCategoryRewards(1));

    expect(store.getActions()).toMatchSnapshot();
  });
});

describe("User Interaction", () => {
  describe("X-Button", () => {
    it("X button should remove data entry", () => {
      render(<App />, { initialState: preloadedState });
  
      const buttons = screen.getAllByTestId("x-btn");
      buttons.forEach((button) => {
        fireEvent.click(button);
      });
      let filledCells = screen.queryAllByTestId("row-item");
      expect(filledCells).toBeEmpty;
    });
  })

  describe("Undo Button", () => {
    it("Should retrieve most recent action from past", () => {
      render(<App />, { initialState: preloadedState });
      const old = screen.getByTestId("main-table").innerHTML;
      const button = screen.getAllByTestId("x-btn")[0];
      const undoBtn = screen.getByTestId("undo-btn")
  
      // click x button to create new display
      fireEvent.click(button);
      // click undo to revert back to old display
      fireEvent.click(undoBtn)
      expect(screen.getByTestId("main-table").innerHTML).toEqual(old);
    });
  })

  describe("Redo Button", () => {
    it("Should retrieve most recent action from future", () => {
      render(<App />, { initialState: preloadedState });
      const redoBtn = screen.getByTestId("redo-btn")
      const undoBtn = screen.getByTestId("undo-btn")
      const button = screen.getAllByTestId("x-btn")[0];
  
      // click x button to create new display
      fireEvent.click(button)
      // save display
      const old = screen.getByTestId("main-table").innerHTML;
      // click undo
      fireEvent.click(undoBtn)
      // click redo
      fireEvent.click(redoBtn)
      // compare displays
      expect(screen.getByTestId("main-table").innerHTML).toEqual(old);
    });
  })
});
