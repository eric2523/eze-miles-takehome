import React from "react";
import { connect } from "react-redux";
import {
  updateCategoryRewards,
  deleteCategoryRewards,
  receiveCategoryRewards,
} from "../actions/category-rewards-actions";

export const RowItem = ({
  categoryReward,
  row,
  col,
  rewards,
  draggable,
  empty,
  dispatch,
}) => {
  
  const handleDragStart = () => {
    event.dataTransfer.clearData();
    event.dataTransfer.setData(
      "categoryRewardId",
      JSON.stringify(categoryReward)
    );
    event.dataTransfer.setData("fromCell", "true");
    event.dataTransfer.setData("fromRow", row + 1);
    event.target.classList.toggle("grabbing")
  };

  const handleDrop = () => {
    let fromCell = Boolean(event.dataTransfer.getData("fromCell") === "true");
    let targetRow = row + 1;
    let targetCol = col + 1;
    let fromRow = parseInt(event.dataTransfer.getData("fromRow"));

    if (fromRow === targetRow) {
      if (fromCell && empty) {
        let fromCategoryReward = JSON.parse(
          event.dataTransfer.getData("categoryRewardId")
        );
        // plus 1 to account for the headings
        // conditional checks if the cell is empty (falsy value)
        if (!categoryReward) {
          fromCategoryReward.categoryId = targetCol;
          fromCategoryReward.rewardId = targetRow;
          dispatch(updateCategoryRewards(fromCategoryReward));
        }
      } else {
        if (empty) {
          let newCategoryReward = {
            id: Math.random() * 10000,
            categoryId: targetCol,
            rewardId: targetRow,
          };

          dispatch(receiveCategoryRewards(newCategoryReward));
        }
      }
    }
    event.target.classList.toggle("grabbing")
  };

  const handleDragOver = () => {
    event.stopPropagation();
  };

  const handleClick = () => {
    dispatch(deleteCategoryRewards(categoryReward.id));
  };

  let content = null;

  if (!empty) {
    content = (
      <td
        className="table-item-filled grabbers"
        data-testid="row-item"
        key={categoryReward.id}
        draggable={draggable}
        onDragStart={handleDragStart}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {rewards.byId[categoryReward.rewardId].name}
        <span className="x-btn" data-testid="x-btn" onClick={handleClick}>
          X
        </span>
      </td>
    );
  } else {
    content = (
      <td
        className="table-item"
        data-testid="empty-row-item"
        key={col}
        draggable={draggable}
        onDrop={handleDrop}
      ></td>
    );
  }

  return content;
};

export default connect()(RowItem);
