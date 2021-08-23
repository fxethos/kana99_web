import React from "react";
import GlobalStyle from "./globalStyles";
// import ScrollToTop from "./components/ScrollToTop";
import AppRouter from "./Routers/AppRouter";
import "./App.scss";
import { useEffect } from "react";
import upcomingMatches from "./Helpers/APIHelpers";

const App = () => {
  
  useEffect(() => {
    upcomingMatches();
  }, [])


  return (
    <div>
      <GlobalStyle />
      {/*<ScrollToTop />*/}
      <AppRouter />
    </div>
  );
};

export default App;
