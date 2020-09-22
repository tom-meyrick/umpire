import { connect } from "react-redux";
import TournamentGrid from "./TournamentGrid";

const mapStateToProps = ({ playerNames }) => {
  return {
    playerNames,
  };
};

export default connect(mapStateToProps)(TournamentGrid);
