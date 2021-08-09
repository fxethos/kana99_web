import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import MatchList from "./pages/MatchList/MatchList";
import ContestList from "./pages/ContestList/ContestList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer, FooterBottom } from "./components";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route exact path="/match-list" component={MatchList} />
        <Route exact path="/contest-list" component={ContestList} />

        <Navbar>
          <Route path="/" exact component={Home} />
          <Footer />
          <FooterBottom />
        </Navbar>
      </Switch>
    </Router>
  );
};

export default App;
