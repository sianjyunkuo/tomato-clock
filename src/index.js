import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ContextProvider } from "./context";

import "./style/index.sass";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
