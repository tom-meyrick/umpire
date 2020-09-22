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
    this.setState({
      noPlayers: this.state >= 2 ? this.state.noPlayers - 2 : 2,
    });
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.handleSubmit({ ...this.state });
    this.setState({
      noPlayers: 2,
    });
  };

  render() {
    const { handleClick, increment, decrement } = this.props;
    const { noPlayers } = this.state;
    return (
      <>
        <div className="p-2 inline-block flex justify-center m-5">
          <div className="flex-col">
            <div>
              <span className="text-6xl px-10">{noPlayers}</span>
            </div>
            <div className="pt-8 pb-8">
              <button
                className="h-10 w-10 text-2xl m-4"
                onClick={this.decrement}
              >
                -
              </button>
              <button
                className="h-10 w-10 text-2xl m-4"
                onClick={this.increment}
              >
                +
              </button>
            </div>

            <button
              className="m-6 block bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-55"
              onClick={this.handleClick}
            >
              Submit
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default NumberInput;