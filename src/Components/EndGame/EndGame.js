import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class EndGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      referrer: null,
    };
  }
  handleClick = (e) => {
    e.preventDefault();
    this.props.handleNextRound();
    this.setState({ referrer: "/" });
  };

  render() {
    let { handleClick } = this.props;
    let { referrer } = this.state;
    if (referrer) return <Redirect to={referrer} />;

    return (
      <>
        <div className="inline-block flex justify-center">
          <div className="mt-20 inline-block mb-20">
            <p>
              Congratulations {this.props.dataFlow[0]} - you are the tournament
              champion
            </p>
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
