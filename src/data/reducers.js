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
  refresh: false,
});

const pushWinners = (state) => (
  console.log(state.winner.length),
  {
    ...state,
    dataFlow: [...state.winner],
    champion:
      !state.winner.length && !state.dataFlow.length ? state.winner[0] : "",
    refresh: true,
    winner: [],
  }
);

const clearWinnerArray = (state) => ({
  ...state,
  winner: [],
});

const clearDataArray = (state) => ({
  ...state,
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
    case "CLEAR_WINNER_ARRAY":
      return clearWinnerArray(state);
    case "CLEAR_DATA_ARRAY":
      return clearDataArray(state);
    default:
      return state;
  }
};

export default reducer;
