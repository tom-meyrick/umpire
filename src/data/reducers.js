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

const setWinners = (state, action) => ({
  ...state,
  winner: [...state.winner, action.winner],
});

const pushWinners = (state) => ({
  ...state,
  dataFlow: [...state.winner],
});

const clearArray = (state) => ({
  ...state,
  winner: [],
  dataFlow: [],
});

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NO":
      return setPlayers(state, action);
    case "UPDATE_NAMES":
      return setNames(state, action);
    case "UPDATE_WINNERS":
      return setWinners(state, action);
    case "PUSH_WINNERS":
      return pushWinners(state);
    case "CLEAR_ARRAY":
      return clearArray(state);
    default:
      return state;
  }
};

export default reducer;
