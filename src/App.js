import "./App.css";
import React from "react";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstSection from "./Components/FirstSection";
import Hexagons from "./Components/Hexagons";
import BigHex from "./Components/BigHex";
import Contact from "./Components/Contact"

function App() {
  return (
    <div className="app">
      <Header />
      <FirstSection />
      <Hexagons />
      <BigHex />
      <Contact />
    </div>
  );
}

export default App;
