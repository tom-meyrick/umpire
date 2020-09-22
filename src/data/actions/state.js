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
