// javascript library
import React from "react";

//entry point ti reac library 
import ReactDom from "react-dom";

import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
