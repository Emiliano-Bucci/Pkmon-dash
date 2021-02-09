import { Global } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { globalStyles } from "./theme/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
