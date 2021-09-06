import React from "react";
import { Authenticator } from './Helpers/AuthHelpers';
import { Provider } from "react-redux";
import GlobalStyle from "./globalStyles";
import AppRouter from "./Routers/AppRouter";
import configureStore from "./store/createStore";
import "./App.scss";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Authenticator>
        <GlobalStyle />
        <AppRouter />
      </Authenticator>
    </Provider>
  );
};

export default App;
