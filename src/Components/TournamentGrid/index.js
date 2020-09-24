import { connect } from "react-redux";
import TournamentGrid from "./TournamentGrid";
import { pushWinners } from "../../data/actions/state";

const mapStateToProps = ({ playerNames, dataFlow, round, noPlayers }) => {
  return {
    playerNames,
    dataFlow,
    round,
    noPlayers,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleNextRound: () => dispatch(pushWinners()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TournamentGrid);
