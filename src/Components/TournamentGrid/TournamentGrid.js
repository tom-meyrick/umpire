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
    //playerNames is passed in first.
    // dataFlow is empty until the first round is over, so is only used once players have been added
    let randomisePlayers = Shuffler(
      this.props.dataFlow.length > 0
        ? this.props.dataFlow
        : this.props.playerNames
    );

    // Players are randomised and split into a series of arrays of 2. This function is called on randomisePlayers each round
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

    //This functions takes the round and the number of players and returns either "final" or the round number - refactor this as it's quite confusing
    let findSqrt = (round, noPlayers) => {
      let sqrt = Math.ceil(Math.sqrt(noPlayers));
      if (round === 5 || noPlayers === 2) {
        return true;
      }
      return round % noPlayers === sqrt;
    };

    return (
      <>
        <div className="block">
          <div className="mt-12 flex justify-center align-center bg-red-300 pb-10 mb-10">
            <h1 className="text-2xl font-mono text-white w-100">
              {" "}
              {findSqrt(this.props.round, this.props.noPlayers)
                ? "Final"
                : "Round " + this.props.round}
            </h1>
          </div>
        </div>
        <div className="inline-block flex justify-center">
          <div>
            <div
              // Change the column structure based on the number of matchcards displayed
              className={`ml-2 mr-2 md:grid grid-cols-${
                this.props.dataFlow.length === 2 || this.props.noPlayers === 2
                  ? 1
                  : 2
              } gap-4 content-center`}
            >
              {/* Map over pairOffPlayers array and pass two players into each MatchCard */}
              {pairOffPlayers.map((players, index) => (
                <div key={index} className="mt-3 mb-3">
                  <MatchCard players={players} />
                </div>
              ))}
            </div>
            <div className="inline-block flex justify-center">
              <button
                className={`m-6 block bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-55 ${
                  (this.props.winner.length > 0 &&
                    this.props.winner.length ===
                      this.props.playerNames.length / 2) ||
                  (this.props.winner.length > 0 &&
                    this.props.winner.length === this.props.dataFlow.length / 2)
                    ? ""
                    : "pointer-events-none"
                } `}
                //Either redirect to "endgame" or click through to a new round
                onClick={
                  this.props.dataFlow.length === 1
                    ? this.setState({ referrer: "/endgame" })
                    : this.props.handleNextRound
                }
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TournamentGrid;
