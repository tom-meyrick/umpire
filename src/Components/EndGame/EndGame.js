import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class EndGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      referrer: null,
    };
  }
  //Click handler for clearing game data and setting refferer to homepage
  handleClick = (e) => {
    e.preventDefault();
    this.props.handleNextRound();
    this.setState({ referrer: "/" });
  };

  render() {
    let { dataFlow } = this.props;
    let { referrer } = this.state;
    // If referrer is truthy, redirect to homepage
    if (referrer) return <Redirect to={referrer} />;
    return (
      <>
        <div className="flex justify-center">
          <div className="mt-20 mb-20">
            <div className="mt-12 flex justify-center align-center bg-red-400 pb-10 mb-10 p-10 shadow-xl focus:shadow-outline">
              <h1 className="text-2xl font-mono text-white">
                {" "}
                <p>Congratulations {dataFlow[0]} -</p>
                <p>You are a ping pong champion!</p>
              </h1>
            </div>
          </div>
        </div>
        <div className="inline-block flex justify-center">
          <div>
            <button
              className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              onClick={this.handleClick}
            >
              Play again
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default EndGame;
