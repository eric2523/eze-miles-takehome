import React from "react";

const RowItem = ({ categoryReward, idx, rewards }) => {
  return (
    <td key={categoryReward.id}>
      {rewards.byId[categoryReward.rewardId].name}
    </td>
  );
};

export const RowIndex = ({ row, idx, rewards }) => {
  let r = [];

  row.forEach((categoryReward, idx) => {
    if (categoryReward !== null) {
      r.push(
        <RowItem
          key={categoryReward.id}
          categoryReward={categoryReward}
          idx={idx}
          rewards={rewards}
        />
      );
    } else {
      r.push(<td key={idx}></td>);
    }
  });

  return (
    <tr key={idx}>
      <td>{"R" + (idx + 1)}</td>
      {r}
    </tr>
  );
};