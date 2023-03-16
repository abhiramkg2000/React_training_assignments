import React from "react";
import ReactDOM from "react-dom/client";

require("file-loader?name=[name].[ext]!/public/index.html");

import App from "./App";
import { Provider } from "react-redux";
import store from "./store/Store";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>
);

/*http://localhost:3010*/
