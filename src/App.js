import React from "react";
import GlobalStyle from "./globalStyles";
// import ScrollToTop from "./components/ScrollToTop";
import AppRouter from "./Routers/AppRouter";
import "./App.scss";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      {/*<ScrollToTop />*/}
      <AppRouter />
    </div>
  );
};

export default App;
