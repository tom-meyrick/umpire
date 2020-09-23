import { connect } from "react-redux";
import MatchCard from "./MatchCard";
import { setWinners } from "../../data/actions/state";

const mapStateToProps = ({ winner, refresh }) => {
  return {
    winner,
    refresh,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleWinner: (roundWinner) => dispatch(setWinners(roundWinner)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MatchCard);
