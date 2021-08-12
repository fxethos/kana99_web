import React from "react";
import GlobalStyle from "./globalStyles";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer, FooterBottom } from "./components";
import AppRouter from "./Routers/AppRouter";
import "./App.scss";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      {/*<ScrollToTop />*/  }
      <AppRouter />
      {/*<Navbar>
        <Footer />
        <FooterBottom />
      </Navbar>*/}
    </div>
  );
};

export default App;
