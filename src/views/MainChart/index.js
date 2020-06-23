import React, { useState } from "react";

export const MainChart = () => {
  const [blockMode, setBlockMode] = useState("bar");

  return (
    <div className="main-chart">
      <div className="main-chart-control row">Buttons, radio, blah-blah</div>
      <div className="main-chart-container">
        {blockMode === "bar" && <div>BarChart here</div>}
        {blockMode === "line" && <div>BarChart here</div>}
        {blockMode === "grid" && <div>Table here</div>}
      </div>
    </div>
  );
};
