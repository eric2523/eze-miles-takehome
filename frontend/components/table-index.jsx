import React, { useEffect } from "react";
import { connect } from "react-redux";
import CategorySubheader from "./category-subheader";
import { RowIndex } from "./row-index";

const TableIndex = ({ categories, rewards, categoryRewards }) => {
  let rowCount = rewards.allIds.length;
  let colCount = categories.allIds.length;

  const createTable = (rowCount, colCount) => {
    const grid = [];

    for (let i = 0; i < rowCount; i++) {
      let row = [];

      for (let j = 0; j < colCount; j++) {
        row.push(null);
      }
      grid.push(row);
    }
    return grid;
  };

  const fillTable = (table) => {
    let newTable = table.map((arr) => arr.slice());

    for (const id in categoryRewards.byId) {
      let rewardItem = categoryRewards.byId[id];
      let row = rewardItem.rewardId;
      let col = rewardItem.categoryId;

      newTable[row - 1][col - 1] = rewardItem;
    }

    return newTable;
  };

  let table = fillTable(createTable(rowCount, colCount));

  const createContent = () => {
    let content = [];
    table.forEach((row, idx) => {
      let r = [];

      content.push(
        <RowIndex key={idx} row={row} idx={idx} rewards={rewards} />
      );
    });
    return content;
  };

  let content = createContent();

  useEffect(() => {
    table = fillTable(table);
    createContent();
  });

  const handleDragOver = () => {
    event.preventDefault();
  };

  return (
    <div className="table-div">
      <table data-testid="main-table" onDragOver={handleDragOver}>
        <thead>
          <tr>
            <th data-testid="main-th-rew">
              <h1>rewards</h1>
            </th>
            <th data-testid="main-th-cat">
              <h1>categories</h1>
            </th>
          </tr>
        </thead>
        <thead className="subheader">
          <CategorySubheader />
        </thead>
        <tbody className="table-body" id="test">{content}</tbody>
      </table>
    </div>
  );
};

const mSTP = (state) => {
  return {
    categories: state.entities.categories,
    rewards: state.entities.rewards,
    categoryRewards: state.entities.categoryRewards.present,
  };
};

export default connect(mSTP, null)(TableIndex);
