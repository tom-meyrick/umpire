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
