import React from "react";
import Title from "../Components/Title";
import NumberInput from "../Components/NumberInput";
import Form from "../Components/Form";
import PlayerCard from "../Components/PlayerCard";
import MatchCard from "../Components/MatchCard";
import EndGame from "../Components/EndGame";
import TournamentGrid from "../Components/TournamentGrid";
import { HashRouter, Route, Switch, useHistory } from "react-router-dom";

const App = ({
  noPlayers,
  playerNames,
  dataFlow,
  winner,
  refresh,
  namesSubmitted,
}) => (
  <>
    <div className="container mx-auto text-lg font-hind">
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/">
            <Title />
            <NumberInput />
          </Route>
          <Route exact path="/players">
            {namesSubmitted ? <TournamentGrid /> : <Form />}
          </Route>
          <Route exact path="/endgame">
            <EndGame />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  </>
);

export default App;
