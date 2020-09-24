import React, { Component } from "react";
import MatchCard from "../MatchCard";
import Shuffler from "../Shuffler";
import { Redirect } from "react-router-dom";

class TournamentGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refresh: !this.props.refresh,
      referrer: null,
    };
  }
  render() {
    let { referrer } = this.state;
    if (referrer) return <Redirect to={referrer} />;

    let randomisePlayers = Shuffler(
      this.props.dataFlow.length > 0
        ? this.props.dataFlow
        : this.props.playerNames
    );

    let pairOffPlayers = randomisePlayers.reduce(function (
      result,
      value,
      index,
      array
    ) {
      if (index % 2 === 0) result.push(array.slice(index, index + 2));
      return result;
    },
    []);
    console.log(this.props.round % this.props.noPlayers);
    let findSqrt = (value1, value2) => {
      return value1 % value2 === Math.sqrt(value2);
    };
    return (
      <>
        <h2 className="inline-block flex justify-center">
          {findSqrt(this.props.round, this.props.noPlayers)
            ? "Final"
            : "Round " + this.props.round}
        </h2>
        <div className="inline-block flex justify-center">
          <div>
            <div className="ml-2 mr-2 md:grid grid-cols-2 gap-4 content-center">
              {pairOffPlayers.map((players, index) => (
                <div key={index} className="mt-3 mb-3">
                  <MatchCard players={players} />
                </div>
              ))}
            </div>
            <div className="inline-block flex justify-center">
              {this.props.dataFlow.length === 1 ? (
                <button
                  className="m-6 block bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-55"
                  onClick={this.setState({ referrer: "/endgame" })}
                >
                  Final
                </button>
              ) : (
                <button
                  className="m-6 block bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-55"
                  onClick={this.props.handleNextRound}
                >
                  Next Round
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TournamentGrid;
