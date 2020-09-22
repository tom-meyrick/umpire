import React, { Component } from "react";
import PlayerCard from "./PlayerCard";
import Shuffler from "./Shuffler";

class MatchCard extends Component {
  render(key, players) {
    return (
      <div className="mt-4 mb-4">
        {this.props.players.map((player, index) => (
          <>
            <PlayerCard key={index} player={player} />
          </>
        ))}
      </div>
    );
  }
}

export default MatchCard;
