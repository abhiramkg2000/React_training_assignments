import React from "react";
import ReactDOM from "react-dom/client";

require("file-loader?name=[name].[ext]!/public/index.html");

import App from "./App";
import UserProvider from "./context/UserProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <App />
  </UserProvider>
);

/*http://localhost:3010*/
