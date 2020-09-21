import React from "react";
import Title from "./Components/Title";
import NumberInput from "./Components/NumberInput";
import Form from "./Components/Form";
import PlayerCard from "./Components/PlayerCard";
import MatchCard from "./Components/MatchCard";
import EndGame from "./Components/EndGame";

const App = () => (
  <>
    <div className="container mx-auto content-center text-lg font-hind">
      <h3>Pattern Library</h3>
      <h5>Title</h5>
      <Title />
      <h5>Input</h5>
      <NumberInput />
      <h5>Form</h5>
      <Form />
      <h5>Player Cards</h5>
      <PlayerCard />
      <h5>Match Card</h5>
      <MatchCard />
      <h5>Congrats message</h5>
      <EndGame />
    </div>
  </>
);

export default App;
