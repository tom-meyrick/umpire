import React, { Component } from "react";

class PlayerCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Initial state
    };
  }
  handleEvent = () => {
    this.setState({
      // Update state
    });
  };
  //Props - card colour, player name

  render(player, index) {
    return (
      <div
        key={this.props.key}
        className={"bg-red-400 h-64 w-64 flex justify-center"}
      >
        <p className="text-white">{this.props.player}</p>
      </div>
    );
  }
}

export default PlayerCard;
