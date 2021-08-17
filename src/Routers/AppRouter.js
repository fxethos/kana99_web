import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import MatchList from "../pages/MatchList/MatchList";
import ContestList from "../pages/ContestList/ContestList";
import ScoreBoardPage from "../pages/ScoreBoardPage/ScoreBoardPage";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route exact path="/contest-list" component={ContestList} />
      <Route exact path="/match-list" component={MatchList} />
      <Route exact path="/scoreboard-page" component={ScoreBoardPage} />
    </Switch>
  </Router>
);

export default AppRouter;
