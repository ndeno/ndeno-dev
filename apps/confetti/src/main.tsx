import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const ENV = import.meta.env.NODE_ENV || "";

function setDevCookie() {
  const date = new Date();
  date.setTime(date.getTime() + 0.1 * 24 * 60 * 60 * 1000);
  const expires = "; expires=" + date.toUTCString();
  document.cookie = "ndeno-session" + "=" + "foo" + expires + "; path=/";
}

async function enableMocking() {
  if (ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  setDevCookie();

  return worker.start();
}

enableMocking()
  .then(() => {
    ReactDOM.createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  })
  .catch((e) => {
    console.log(e);
  });
