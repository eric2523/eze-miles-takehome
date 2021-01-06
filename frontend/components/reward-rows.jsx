import React from "react";
import { connect } from "react-redux";

const RewardsRow = ({ rewards, row, idx }) => {
  let data = [];
  row.forEach( rewardItem => {
    data.push(
      <td key={rewardItem.props.id}>
          { rewardItem }
      </td>
    );
  });

  // debugger
  return (
    <tr>
      <td key={ idx }>{ "R" + (idx + 1) }</td>
      { data }
    </tr>);
};

const mSTP = (state) => {
  return {
    rewards: state.entities.rewards,
  };
};

export default connect(mSTP, null)(RewardsRow);
