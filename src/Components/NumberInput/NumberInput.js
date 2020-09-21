import React, { Component } from "react";

class NumberInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noPlayers: 2,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ noPlayers: this.state.noPlayers + 2 });
  }

  decrement() {
    this.setState({ noPlayers: this.state.noPlayers - 2 });
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.handleSubmit({ ...this.state });
    this.setState({
      noPlayers: 0,
    });
  };

  render() {
    const { handleClick, increment, decrement } = this.props;
    const { noPlayers } = this.state;
    return (
      <div>
        <p>{noPlayers}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={this.handleClick}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default NumberInput;
