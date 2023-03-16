import React from "react";
import ReactDOM from 'react-dom/client';

require('file-loader?name=[name].[ext]!/public/index.html');
import App from "./App";
import "./App.css";

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);


/*http://localhost:3010*/