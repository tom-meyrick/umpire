import { connect } from "react-redux";
import NumberInput from "./NumberInput";
import { setPlayers, clearArray } from "../../data/actions/state";

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (noPlayers) => dispatch(setPlayers(noPlayers)),
  handleClear: () => dispatch(clearArray()),
});

export default connect(null, mapDispatchToProps)(NumberInput);
