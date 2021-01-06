import React from "react";
import RowItem from "./row-item"

const RowTitleItem = ({ row }) => {
  const handleDragStart = () => {
    event.dataTransfer.clearData();
    event.dataTransfer.setData("fromCell", "false")
  }

  return (
    <td draggable="true" onDragStart={handleDragStart}>
      {"R" + row}
    </td>
  )
}

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
      <RowTitleItem row={idx + 1} />
      {r}
    </tr>
  );
};
