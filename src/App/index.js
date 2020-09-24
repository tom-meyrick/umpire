import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = ({
  noPlayers,
  playerNames,
  dataFlow,
  winner,
  refresh,
  namesSubmitted,
}) => {
  return {
    noPlayers,
    playerNames,
    dataFlow,
    winner,
    refresh,
    namesSubmitted,
  };
};

export default connect(mapStateToProps)(App);
