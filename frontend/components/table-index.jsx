import React, { useEffect } from "react";
import { connect } from "react-redux";
import CategorySubheader from "./category-subheader";

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
      // let name = rewards.byId[row].name;

      newTable[row - 1][col - 1] = rewardItem;
    }

    return newTable;
  };

  let table = fillTable(createTable(rowCount, colCount));

  const createContent = () => {
    let content = [];
    table.forEach((row, idx) => {
      let r = [];

      row.forEach((categoryReward, idx) => {
        if (categoryReward !== null){
          r.push(
            <td key={categoryReward.id}>
              {rewards.byId[categoryReward.rewardId].name}
            </td>
          );
        } else {
          r.push(
            <td key={ idx }></td>
          )
        }
      });

      content.push(
        <tr key={ idx } >
          <td>{"R" + idx}</td>
          {r}
        </tr>
      );
    });
    return content;
  };

  let content = createContent();

  useEffect(() => {
    table = fillTable(table);
    createContent();
  });

  return (
    <div>
      {/* <table onDragOver={this.handleDragOver}> */}
      <table>
        <thead>
          <CategorySubheader />
        </thead>
        <tbody id="test">{content}</tbody>
      </table>
    </div>
  );
};

const mSTP = (state) => {
  return {
    categories: state.entities.categories,
    rewards: state.entities.rewards,
    categoryRewards: state.entities.categoryRewards,
  };
};

export default connect(mSTP, null)(TableIndex);