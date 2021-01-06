import React from "react";
import { connect } from "react-redux";
import { updateCategoryRewards } from "../actions/category-rewards-actions";

const RowItem = ({ categoryReward, row, col, rewards, draggable, empty, dispatch }) => {
  const handleDragStart = () => {
    event.dataTransfer.setData("categoryRewardId", JSON.stringify(categoryReward));
  };

  const handleDrop = () => {
    let fromCategoryReward = JSON.parse(event.dataTransfer.getData("categoryRewardId"));
    // plus 1 to account for the headings 
    let targetRow = row + 1
    let targetCol = col + 1
    if (!categoryReward){
      fromCategoryReward.categoryId = targetCol
      fromCategoryReward.rewardId = targetRow
      dispatch(updateCategoryRewards(fromCategoryReward))
    }
  };

  const handleDragOver = () => {
    event.stopPropagation();
  };

  let content = null;

  if (!empty) {
    content = (
      <td
        key={categoryReward.id}
        draggable={draggable}
        onDragStart={handleDragStart}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {rewards.byId[categoryReward.rewardId].name}
      </td>
    );
  } else {
    content = <td key={col} draggable={draggable} onDrop={ handleDrop }></td>;
  }

  return content;
};

export default connect()(RowItem)