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

  //Reset the selected state when refresh state is triggered
  componentDidUpdate(prevProps, prevState) {
    if (prevState.selected && this.props.refresh) {
      this.setState({ selected: 0 });
    }
  }

  render() {
    let arr = this.props.players;
    let key = this.props.key;
    let { selected } = this.state;
    return (
      <div className={`${selected ? "pointer-events-none" : null} mt-4 mb-4`}>
        <>
          <PlayerCard
            player={arr[0]}
            selected={selected === 1}
            key={key}
            handleClick={() =>
              this.setState({ selected: 1, roundWinner: arr[0] }, () =>
                this.props.handleWinner(this.state.roundWinner)
              )
            }
          />
          <PlayerCard
            player={arr[1]}
            key={key}
            selected={selected === 2}
            handleClick={() =>
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
