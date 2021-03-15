import React from "react";
import "./App.sass";
import Routes from "./Routes";
import { Provider } from "react-redux";
import storeConfig from "./store.ts";

function App() {
  const store = storeConfig();

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
