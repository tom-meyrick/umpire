import { connect } from "react-redux";
import Form from "./Form";
import { setNames } from "../../data/actions/state";

const mapStateToProps = ({ noPlayers }) => {
  return {
    noPlayers,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handlePlayers: (nameArray) => dispatch(setNames(nameArray)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
