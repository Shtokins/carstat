import React, { useState, useEffect } from "react";
import BarChart from "./BarChart";
import { fetchBarChartData } from "./helpers";

const yearPrimary = "2019";
const comparatorPrimary = "sales";
const comparatorSecondary = "revenue";
const showSecondary = true;

export const MainChart = ({ cars }) => {
  const [blockMode, setBlockMode] = useState("bar");
  const [chartData, setChartData] = useState(null);
  useEffect(() => {
    const { barChartData, barChartOptions } = fetchBarChartData({
      data: cars,
      yearPrimary,
      comparatorPrimary,
      comparatorSecondary,
      showSecondary
    });
    setChartData({ barChartOptions, barChartData });
  }, [cars]);
  if (!cars) return null;
  return (
    <div className="main-chart">
      <div className="main-chart-control row">Buttons, radio, blah-blah</div>
      <div className="main-chart-container">
        {chartData && blockMode === "bar" && (
          <BarChart
            data={chartData.barChartData}
            options={chartData.barChartOptions}
          />
        )}
        {blockMode === "line" && <div>BarChart here</div>}
        {blockMode === "grid" && <div>Table here</div>}
      </div>
    </div>
  );
};
