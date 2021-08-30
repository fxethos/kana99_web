import React from "react";
import GlobalStyle from "./globalStyles";
import AppRouter from "./Routers/AppRouter";
import "./App.scss";
import { useEffect } from "react";
import upcomingMatches from "./Helpers/APIHelpers";
import { Authenticator } from './Helpers/AuthHelpers';

const App = () => {
  
  useEffect(() => {

    if(!JSON.parse(localStorage.getItem('upcomingMatches'))){
      upcomingMatches()
    }
    
    setInterval(()=>{
      upcomingMatches();
    },86400000)
    
  }, [])


  return (
    <Authenticator>
      <GlobalStyle />
      {/*<ScrollToTop />*/}
      <AppRouter />
    </Authenticator>
  );
};

export default App;
