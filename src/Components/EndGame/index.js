import { connect } from "react-redux";
import EndGame from "./EndGame";
import { endGame } from "../../data/actions/state";

const mapStateToProps = ({ dataFlow }) => {
  return {
    dataFlow,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleNextRound: () => dispatch(endGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EndGame);
