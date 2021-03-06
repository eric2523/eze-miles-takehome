import React from "react";
import RowItem from "./row-item"

export const RowTitleItem = ({ row, name }) => {
  const handleDragStart = () => {
    event.dataTransfer.clearData();
    event.dataTransfer.setData("fromCell", "false")
    event.dataTransfer.setData("fromRow", row)
  }

  return (
    <td className="row-subheader grabbers" draggable="true" onDragStart={handleDragStart}>
      {"R" + row + ": "}
      { name }
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
      <RowTitleItem row={idx + 1} name={ rewards.byId[idx + 1].name } />
      {r}
    </tr>
  );
};
