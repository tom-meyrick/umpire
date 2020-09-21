import React, { Component } from "react";
import Repeater from "../Repeater";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerNames: [],
      newPlayer: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { playerNames, newPlayer } = this.state;
    this.setState(
      {
        playerNames: [...playerNames, newPlayer],
      },
      () => {
        for (let val in newPlayer) {
          newPlayer[val] = "";
        }
        this.setState({ newPlayer });
      }
    );
  }

  render() {
    const { noPlayers } = this.props;
    const { newPlayer } = this.state;
    return (
      <div>
        <form>
          <label className="block">
            <Repeater count={noPlayers} />
          </label>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={this.handleClick}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
