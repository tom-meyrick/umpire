import React from "react";
import Title from "../Components/Title";
import NumberInput from "../Components/NumberInput";
import Form from "../Components/Form";
import PlayerCard from "../Components/PlayerCard";
import MatchCard from "../Components/MatchCard";
import EndGame from "../Components/EndGame";
import TournamentGrid from "../Components/TournamentGrid";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

const App = (noPlayers, playerNames, dataFlow, winner, refresh) => (
  <>
    <div className="container mx-auto text-lg font-hind">
      <Router>
        <Switch>
          <Route exact path="/">
            <Title />
            <NumberInput />
          </Route>
          <Route exact path="/players">
            {!playerNames ? <Form /> : <TournamentGrid />}
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
