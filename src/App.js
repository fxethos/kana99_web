import React from "react";
import GlobalStyle from "./globalStyles";
import AppRouter from "./Routers/AppRouter";
import "./App.scss";
import { useEffect } from "react";
import { Authenticator } from './Helpers/AuthHelpers';
import {upcomingMatches} from "./Helpers/APIHelpers";

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
