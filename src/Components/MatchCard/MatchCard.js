import React, { Component } from "react";
import PlayerCard from "../PlayerCard";
import Shuffler from "../Shuffler";

class MatchCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
      winner: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.winner !== prevState.winner) {
      this.props.handleWinner(this.state.winner);
    }
  }

  trackState() {
    return !this.props.winner.length
      ? this.setState({ winner: "", selected: 0 })
      : null;
  }

  render() {
    let arr = this.props.players;

    const checkSelected = (value) => {
      return !this.state.selected ? value : 0;
    };

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
              this.setState({ selected: checkSelected(1), winner: arr[0] })
            }
          />
          <PlayerCard
            player={arr[1]}
            selected={this.state.selected === 2}
            handleClick={() =>
              this.setState({ selected: checkSelected(2), winner: arr[1] })
            }
          />
        </>
      </div>
    );
  }
}

export default MatchCard;
