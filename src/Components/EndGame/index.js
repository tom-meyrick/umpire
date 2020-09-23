import { connect } from "react-redux";
import EndGame from "./EndGame";

const mapStateToProps = ({ champion }) => {
  return {
    champion,
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   handleNextRound: () => dispatch(pushWinners()),
// });

export default connect(mapStateToProps)(EndGame);
