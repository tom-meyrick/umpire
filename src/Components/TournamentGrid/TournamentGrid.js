import React, { Component } from "react";
import MatchCard from "../MatchCard";
import Shuffler from "../Shuffler";

class TournamentGrid extends Component {
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
              <MatchCard key={index} players={players} />
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default TournamentGrid;
