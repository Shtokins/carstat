import React, { useState, useEffect } from "react";
import BarChart from "./components/BarChart";
import { fetchBarChartData, fetchLineChartData } from "./helpers";
import LineChart from "./components/LineChart";
import ControlPanel from "./components/ControlPanel";
import { Radio } from "antd";

const yearPrimary = "2019";
const comparatorPrimary = "sales";
const comparatorSecondary = "revenue";
const showSecondary = true;

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const initialChartSettings = {
  yearPrimary: "2019",
  kpiPrimary: "sales",
  kpiAdditional: "revenue",
  showAdditional: true
};

export const MainChart = ({ cars }) => {
  const [blockMode, setBlockMode] = useState("bar");
  const [chartSettings, setCharsSettings] = useState(initialChartSettings);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const { barChartData, barChartOptions } = fetchBarChartData({
      data: cars,
      yearPrimary,
      comparatorPrimary,
      comparatorSecondary,
      showSecondary
    });
    const { lineChartData, lineChartOptions } = fetchLineChartData({
      data: cars,
      yearPrimary,
      comparatorPrimary,
      showSecondary
    });
    setChartData({
      barChartOptions,
      barChartData,
      lineChartData,
      lineChartOptions
    });
  }, [cars]);
  if (!cars) return null;
  const controlPanelProps = {
    setBlockMode,
    blockMode,
    chartSettings,
    setCharsSettings
  };
  return (
    <div className="main-chart">
      <ControlPanel {...controlPanelProps} />

      <div className="main-chart-container">
        {chartData && blockMode === "bar" && (
          <BarChart
            data={chartData.barChartData}
            options={chartData.barChartOptions}
          />
        )}
        {chartData && blockMode === "line" && (
          <LineChart
            data={chartData.lineChartData}
            options={chartData.lineChartOptions}
          />
        )}
        {blockMode === "table" && <div>Table here</div>}
      </div>
    </div>
  );
};
