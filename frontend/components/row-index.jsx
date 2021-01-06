import React from "react";

const RowItem = ({ categoryReward, idx, rewards, draggable, empty }) => {
  const handleDragStart = () => {
    event.dataTransfer.setData("categoryRewardId", categoryReward.id);
  };

  const handleDrop = () => {
    let fromId = event.dataTransfer.getData("categoryRewardId");
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
    content = 
    <td key={ idx } draggable={ draggable }>
    </td>
  }

  return content
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
          draggable={true}
          empty={false}
        />
      );
    } else {
      r.push(<RowItem key={idx} empty={true} draggable={ false }/>);
    }
  });

  return (
    <tr key={idx}>
      <td>{"R" + (idx + 1)}</td>
      {r}
    </tr>
  );
};
