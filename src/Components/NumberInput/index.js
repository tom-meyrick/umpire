import { connect } from "react-redux";
import NumberInput from "./NumberInput";
import { setPlayers, clearDataArray } from "../../data/actions/state";

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (noPlayers) => dispatch(setPlayers(noPlayers)),
  handleClear: () => dispatch(clearDataArray()),
});

export default connect(null, mapDispatchToProps)(NumberInput);
