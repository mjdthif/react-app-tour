import React, { Component } from "react";
import "./index.scss";
import Navbar from "../src/TourProject/Navbar/NavBar.js";
import Tourlist from "./Components/TourList ";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Tourlist></Tourlist>
    </div>
  );
};

export default App;
