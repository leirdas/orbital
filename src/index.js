import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ProvideAuth } from "./hooks/useAuth";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CssBaseline />
    <ProvideAuth>
      <App />
    </ProvideAuth>
  </StrictMode>,
  rootElement
);

// ReactDOM.render(
//   <><h1>hi</h1></>,
//   rootElement
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
