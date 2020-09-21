import { handleToggleID } from "./actions/state";
import initial from "./initial";

const setPlayers = (state, action) => ({
  ...state,
  noPlayers: action.noPlayers.noPlayers,
});

const setNames = (state, action) => ({
  ...state,
  playerNames: action.playerNames.playerNames,
});

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NO":
      return setPlayers(state, action);
    case "UPDATE_NAMES":
      return setNames(state, action);
    default:
      return state;
  }
};

export default reducer;
