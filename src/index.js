import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/app/App";
import reportWebVitals from "./reportWebVitals";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header />
      <App />
      <Footer />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
