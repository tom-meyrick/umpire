import { connect } from "react-redux";
import TournamentGrid from "./TournamentGrid";
import { pushWinners } from "../../data/actions/state";

const mapStateToProps = ({
  playerNames,
  dataFlow,
  round,
  noPlayers,
  winner,
}) => {
  return {
    playerNames,
    dataFlow,
    round,
    noPlayers,
    winner,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleNextRound: () => dispatch(pushWinners()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TournamentGrid);
