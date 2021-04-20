import "./App.css";
import React from "react";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstSection from "./Components/FirstSection";
import Hexagons from "./Components/Hexagons";
import BigHex from "./Components/BigHex";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <FirstSection />
      <Hexagons />
      <BigHex />
      <Contact />

      {/* <Router>
        <Navbar />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
