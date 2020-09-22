import { connect } from "react-redux";
import MatchCard from "./MatchCard";
import { setWinners } from "../../data/actions/state";

const mapDispatchToProps = (dispatch) => ({
  handleWinner: (winner) => dispatch(setWinners(winner)),
});

export default connect(null, mapDispatchToProps)(MatchCard);
