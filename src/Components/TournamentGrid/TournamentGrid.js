import React, { Component } from "react";
import MatchCard from "../MatchCard";
import Shuffler from "../Shuffler";

class TournamentGrid extends Component {
  render() {
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

    return (
      <div className="inline-block flex justify-center">
        <div className="ml-2 mr-2">
          {pairOffPlayers.map((players, index) => (
            <>
              <MatchCard key={index} players={players} />
            </>
          ))}
          <div className="inline-block flex justify-center">
            <button
              className="m-6 block bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-55"
              onClick={this.props.handleNextRound}
            >
              Next Round
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TournamentGrid;
