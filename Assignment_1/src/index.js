// require('file-loader?name=[name].[ext]!./public/index.html');

require('file-loader?name=[name].[ext]!/public/index.html');
import React from "react";
import ReactDOM from 'react-dom/client';

import App from "./App";
import './App.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
root.render(<App/>);