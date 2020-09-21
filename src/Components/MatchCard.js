import React, { Component } from "react";
import PlayerCard from "../Components/PlayerCard";

class MatchCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Initial state
    };
  }
  handleEvent = () => {
    this.setState({
      // Update state
    });
  };

  render() {
    return (
      <>
        <PlayerCard />
        <PlayerCard />
      </>
    );
  }
}

export default MatchCard;
