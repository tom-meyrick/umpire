import React from "react";
import Title from "../Components/Title";
import NumberInput from "../Components/NumberInput";
import Form from "../Components/Form";
import EndGame from "../Components/EndGame";
import TournamentGrid from "../Components/TournamentGrid";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

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
      <Router>
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
      </Router>
    </div>
  </>
);

export default App;
