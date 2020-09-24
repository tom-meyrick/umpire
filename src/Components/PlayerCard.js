import React, { Component } from "react";

class PlayerCard extends Component {
  render() {
    return (
      <div
        key={this.props.key}
        //If playerCard is selected, change colour to blue
        className={`bg-${
          this.props.selected ? "blue-400" : "red-400"
        } mt-1 mb-1 h-64 w-64 flex justify-center shadow-xl focus:shadow-outline`}
        //Use handleClick function passed in from MatchCard
        onClick={this.props.handleClick}
      >
        <p className="text-white">{this.props.player}</p>
      </div>
    );
  }
}

export default PlayerCard;
