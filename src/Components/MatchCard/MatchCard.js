import React, { Component } from "react";
import PlayerCard from "../PlayerCard";

class MatchCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
      roundWinner: "",
    };
  }

  //Reset "selected" when refresh state is triggered - resets the button divs for the next round
  componentDidUpdate(prevProps, prevState) {
    if (prevState.selected && this.props.refresh) {
      this.setState({ selected: 0 });
    }
  }

  render() {
    // Players passed in from TournamentGrid
    let arr = this.props.players;
    // Array keys passed in from TournamentGrid
    let key = this.props.key;
    let { selected } = this.state;
    return (
      // If selected, disable the button div
      <div className={`${selected ? "pointer-events-none" : null} mt-4 mb-4`}>
        <>
          <PlayerCard
            // The selected, key and player values for this card
            player={arr[0]}
            selected={selected === 1}
            key={key}
            handleClick={() =>
              // Set selected and roundWinner, then pass the state into child component
              this.setState({ selected: 1, roundWinner: arr[0] }, () =>
                this.props.handleWinner(this.state.roundWinner)
              )
            }
          />
          <PlayerCard
            // The selected, key and player values for this card
            player={arr[1]}
            key={key}
            selected={selected === 2}
            handleClick={() =>
              // Set selected and roundWinner, then pass the state into child component
              this.setState({ selected: 2, roundWinner: arr[1] }, () =>
                this.props.handleWinner(this.state.roundWinner)
              )
            }
          />
        </>
      </div>
    );
  }
}

export default MatchCard;
