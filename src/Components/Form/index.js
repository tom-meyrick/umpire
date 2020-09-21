import { connect } from "react-redux";
import Form from "./Form";
import { setNames } from "../../data/actions/state";

const mapStateToProps = ({ noPlayers }) => {
  return {
    noPlayers,
  };
};

const mapDispatchToProps = (dispatch) => ({
  hand: (data) => dispatch(setNames(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
