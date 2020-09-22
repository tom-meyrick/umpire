import React, { Component } from "react";
import MatchCard from "../MatchCard";
import Shuffler from "../Shuffler";

class TournamentGrid extends Component {
  handleMatchCard(value) {
    console.log(value);
  }
  render(playerNames) {
    let shuffled = Shuffler(this.props.playerNames);

    let newArr = shuffled.reduce(function (result, value, index, array) {
      if (index % 2 === 0) result.push(array.slice(index, index + 2));
      return result;
    }, []);

    console.log(newArr);

    return (
      <div className="inline-block flex justify-center">
        <div className="ml-2 mr-2">
          {newArr.map((players, index) => (
            <>
              <MatchCard
                key={index}
                players={players}
                handleWinner={this.handleMatchCard}
              />
            </>
          ))}
          <div className="inline-block flex justify-center">
            <button
              className="m-6 block bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-55"
              onClick={this.handleClick}
            >
              {shuffled > 2 ? "Next Round" : "Final"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TournamentGrid;
