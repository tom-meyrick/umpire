import React from "react";
import Title from "../Components/Title";
import NumberInput from "../Components/NumberInput";
import Form from "../Components/Form";
import PlayerCard from "../Components/PlayerCard";
import MatchCard from "../Components/MatchCard";
import EndGame from "../Components/EndGame";
import TournamentGrid from "../Components/TournamentGrid";

const App = (noPlayers, playerNames, dataFlow, winner, refresh) => (
  <>
    <div className="container mx-auto text-lg font-hind">
      <Title />
      <NumberInput />
      <Form />

      <TournamentGrid />
      <EndGame />
    </div>
  </>
);

export default App;
