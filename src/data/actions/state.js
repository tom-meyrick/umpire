export const setPlayers = (noPlayers) => {
  return {
    type: "UPDATE_NO",
    noPlayers: noPlayers,
  };
};

export const setNames = (nameArray) => {
  return {
    type: "UPDATE_NAMES",
    playerNames: nameArray,
  };
};

export const setWinners = (winner) => {
  return {
    type: "UPDATE_WINNERS",
    winner,
  };
};

export const pushWinners = () => {
  return {
    type: "PUSH_WINNERS",
  };
};

export const clearDataArray = () => {
  return {
    type: "CLEAR_DATA_ARRAY",
  };
};

export const clearWinnerArray = () => {
  return {
    type: "CLEAR_WINNER_ARRAY",
  };
};
