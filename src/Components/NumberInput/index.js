import { connect } from "react-redux";
import NumberInput from "./NumberInput";
import { setPlayers } from "../../data/actions/state";

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (noPlayers) => dispatch(setPlayers(noPlayers)),
});

export default connect(null, mapDispatchToProps)(NumberInput);
