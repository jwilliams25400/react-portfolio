// javascript library
import React from "react";

//entry point ti reac library 
import ReactDom from "react-dom";

import App from "./App";

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
