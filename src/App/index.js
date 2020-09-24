import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = ({
  noPlayers,
  playerNames,
  dataFlow,
  winner,
  refresh,
}) => {
  return {
    noPlayers,
    playerNames,
    dataFlow,
    winner,
    refresh,
  };
};

export default connect(mapStateToProps)(App);
