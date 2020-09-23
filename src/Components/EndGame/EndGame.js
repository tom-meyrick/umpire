import React, { Component } from "react";

class EndGame extends Component {
  render() {
    return (
      <div className="flex justify-center">
        <div className="inline-block">
          <p>Congratulations {this.props.champion} - you are the winner</p>
        </div>
        <button className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Play again
        </button>
      </div>
    );
  }
}

export default EndGame;
