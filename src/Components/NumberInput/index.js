import { connect } from "react-redux";
import NumberInput from "./NumberInput";
import { setPlayers } from "../../data/actions/state";

// const mapStateToProps = ({ noPlayers }) => {
//   return {
//     noPlayers,
//   };
// };

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (noPlayers) => dispatch(setPlayers(noPlayers)),
});

export default connect(null, mapDispatchToProps)(NumberInput);
