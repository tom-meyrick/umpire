import React, { Component } from "react";
import PlayerCard from "../PlayerCard";
import Shuffler from "../Shuffler";

class MatchCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
      roundWinner: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.roundWinner !== prevState.roundWinner) {
      this.props.handleWinner(this.state.roundWinner);
    }
  }

  render() {
    let arr = this.props.players;
    return (
      <div
        className={`${
          this.state.selected ? "pointer-events-none" : null
        } mt-4 mb-4`}
      >
        <>
          <PlayerCard
            player={arr[0]}
            selected={this.state.selected === 1}
            handleClick={() =>
              this.setState({ selected: 1, roundWinner: arr[0] })
            }
          />
          <PlayerCard
            player={arr[1]}
            selected={this.state.selected === 2}
            handleClick={() =>
              this.setState({ selected: 2, roundWinner: arr[1] })
            }
          />
        </>
      </div>
    );
  }
}

export default MatchCard;
