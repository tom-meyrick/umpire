import { connect } from "react-redux";
import EndGame from "./EndGame";

const mapStateToProps = ({ dataFlow }) => {
  return {
    dataFlow,
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   handleNextRound: () => dispatch(pushWinners()),
// });

export default connect(mapStateToProps)(EndGame);
