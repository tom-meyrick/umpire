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

  render() {
    return (
      <div className="bg-red-600 h-64 w-64 flex justify-center">
        <p className="text-white">Player1</p>
      </div>
    );
  }
}

export default PlayerCard;
