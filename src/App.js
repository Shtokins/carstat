import React from "react";
import "./App.css";
import { RootApp } from "./views/RootApp";
import "antd/dist/antd.css";
import { CarsApiState } from "./context/carsApi/carsApiState";

function App() {
  return (
    <CarsApiState>
      <RootApp />
    </CarsApiState>
  );
}

export default App;
