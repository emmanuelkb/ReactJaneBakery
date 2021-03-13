import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigation from "./Navigation";
import Banner from "./Banner";
import About from "./About";
import DivLine from "./DivLine";
import Inventory from "./Inventory";
import Contact from "./Contact";
import reportWebVitals from "./reportWebVitals";
import Footer from "./Footer";

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Banner />
    <About />
    <DivLine />
    <Inventory />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
