import React, { Component } from "react";
import PlayerCard from "./PlayerCard";
import Shuffler from "./Shuffler";

class MatchCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
    };
  }

  render(key, players) {
    let arr = this.props.players;
    console.log(arr);
    return (
      <div className="mt-4 mb-4">
        <>
          <PlayerCard
            player={arr[0]}
            selected={this.state.selected === 1}
            handleClick={() => this.setState({ selected: 1 })}
          />
          <PlayerCard
            player={arr[1]}
            selected={this.state.selected === 2}
            handleClick={() => this.setState({ selected: 2 })}
          />
        </>
      </div>
    );
  }
}

export default MatchCard;
