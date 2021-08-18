import React from "react";
import GlobalStyle from "./globalStyles";
// import ScrollToTop from "./components/ScrollToTop";
import AppRouter from "./Routers/AppRouter";
import "./App.scss";
import { useEffect } from "react";
import authenticationToken from "./Helpers/APIHelpers";

const App = () => {
  useEffect(() => {
    var authCricket = localStorage.getItem('authCricket');
    if (!authCricket) {
      authenticationToken();
    }
    setInterval(() => {
      authenticationToken();
    }, 86400000);

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
