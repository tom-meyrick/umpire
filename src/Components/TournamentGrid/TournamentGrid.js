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
    //Sets up routing on to next round
    let { referrer } = this.state;
    if (referrer) return <Redirect to={referrer} />;

    //Passes dataFlow or playerNames into Shuffler function.
    //playerNames is passed in first, dataFlow after once players have been added
    let randomisePlayers = Shuffler(
      this.props.dataFlow.length > 0
        ? this.props.dataFlow
        : this.props.playerNames
    );

    //Splits players into arrays of 2
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

    //Checks whether the modulus of two passed in values is equal to the sqrt of the second value
    let findSqrt = (value1, value2) => {
      let sqrt = Math.ceil(Math.sqrt(value2));
      if (value1 === 5) {
        return true;
      }
      return value1 % value2 === sqrt;
    };

    return (
      <>
        <div className="block">
          <div className="mt-12 ml-12 flex justify-center align-center bg-yellow-300 pb-10 mb-10">
            <h1 className="text-6xl font-mono text-white w-100">
              {" "}
              {findSqrt(this.props.round, this.props.noPlayers)
                ? "Final"
                : "Round " + this.props.round}
            </h1>
          </div>
        </div>
        <div className="inline-block flex justify-center">
          <div>
            <div className="ml-2 mr-2 md:grid grid-cols-2 gap-4 content-center">
              {/* Map over pairOffPlayers array and pass two players into each MatchCard */}
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
