import React from "react";

class RewardItem extends React.Component {
  constructor(props){
    super(props)
    this.handleDragStart = this.handleDragStart.bind(this)
    this.handleDragOver = this.handleDragOver.bind(this)
  }

  handleDragStart(){
    const target = event.target;
    event.dataTransfer.setData("categoryRewardId", this.props.id)
  };

  handleDragOver(){
    event.stopPropagation();
  };

  render(){
    return (
      <div
        key={this.props.id}
        className="draggables"
        onDragStart={this.handleDragStart}
        onDragOver={this.handleDragOver}
        onDrop={this.props.handleDrop(this.props.id)}
        draggable={this.props.draggable}
      >
        {this.props.name}
      </div>
    );
  }
}

export default RewardItem;
