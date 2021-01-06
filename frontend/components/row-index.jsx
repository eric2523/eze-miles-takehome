import React from "react";
import RowItem from "./row-item"

export const RowIndex = ({ row, idx, rewards }) => {
  let r = [];

  row.forEach((categoryReward, colIdx) => {
    if (categoryReward !== null) {
      r.push(
        <RowItem
          key={categoryReward.id}
          categoryReward={categoryReward}
          row={idx}
          col={colIdx}
          rewards={rewards}
          draggable={true}
          empty={false}
        />
      );
    } else {
      r.push(<RowItem key={`${idx}-${colIdx}`} row={idx} col={colIdx} empty={true} draggable={false} />);
    }
  });

  return (
    <tr key={idx}>
      <td>{"R" + (idx + 1)}</td>
      {r}
    </tr>
  );
};
