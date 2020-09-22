import React, { Component } from "react";

class PlayerCard extends Component {
  render(player, key, selected, handleClick) {
    return (
      <div
        key={this.props.key}
        className={`bg-${
          this.props.selected ? "blue-400" : "red-400"
        } h-64 w-64 flex justify-center shadow-xl focus:shadow-outline`}
        onClick={this.props.handleClick}
      >
        <p className="text-white">{this.props.player}</p>
      </div>
    );
  }
}

export default PlayerCard;
