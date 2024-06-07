import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./Login";
import { STAND_ALONE } from "./consts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>{STAND_ALONE ? <Login /> : <App />}</React.StrictMode>
);
