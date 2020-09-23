import { connect } from "react-redux";
import TournamentGrid from "./TournamentGrid";
import { pushWinners } from "../../data/actions/state";

const mapStateToProps = ({ playerNames, dataFlow }) => {
  return {
    playerNames,
    dataFlow,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleNextRound: () => dispatch(pushWinners()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TournamentGrid);
