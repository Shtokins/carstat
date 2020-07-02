import React from "react";
import "./App.css";
import { RootApp } from "./views/RootApp";
import "antd/dist/antd.css";
import { CarsApiState } from "./context/carsApi/carsApiState";
import { UIState } from "./context/ui/uiState";

function App() {
  return (
    <UIState>
      <CarsApiState>
        <RootApp />
      </CarsApiState>
    </UIState>
  );
}

export default App;
