import React, { Component } from "react";

class EndGame extends Component {
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

  render() {
    return (
      <>
        <p>Congratulations player - you are the winner</p>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Play again
        </button>
      </>
    );
  }
}

export default EndGame;
