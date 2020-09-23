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
    // this.handleRefresh = this.handleRefresh.bind(this);
  }

  // handleRefresh() {
  //   let { selected } = this.state;
  //   return this.props.refresh ? { selected: 0 } : null;
  // }

  componentDidUpdate(prevProps, prevState) {
    let { selected, roundWinner } = this.state;
    if (this.state.roundWinner !== prevState.roundWinner) {
      this.props.handleWinner(this.state.roundWinner);
    }
    if (prevState.selected && this.props.refresh) {
      this.setState({ selected: 0 });
    }
  }

  render() {
    let arr = this.props.players;
    let key = this.props.key;
    console.log(this.state.selected);
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
            key={key}
            handleClick={() =>
              this.setState({ selected: 1, roundWinner: arr[0] })
            }
          />
          <PlayerCard
            player={arr[1]}
            key={key}
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
