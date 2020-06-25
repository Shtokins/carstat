import React, { useState, useEffect } from "react";
import BarChart from "./components/BarChart";
import { fetchBarChartData, fetchLineChartData } from "./helpers";
import LineChart from "./components/LineChart";
import ControlPanel from "./components/ControlPanel";
import AdditionalCharts from "./components/AdditionalCharts";

const initialChartSettings = {
  yearPrimary: "2019",
  kpiPrimary: "sales",
  kpiAdditional: "revenue",
  showAdditional: false
};

export const MainChart = ({ cars }) => {
  const [blockMode, setBlockMode] = useState("bar");
  const [chartSettings, setCharsSettings] = useState(initialChartSettings);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const {
      yearPrimary,
      kpiPrimary,
      kpiAdditional,
      showAdditional
    } = chartSettings;
    const { barChartData, barChartOptions } = fetchBarChartData({
      data: cars,
      yearPrimary,
      kpiPrimary,
      kpiAdditional,
      showAdditional
    });
    const { lineChartData, lineChartOptions } = fetchLineChartData({
      data: cars,
      yearPrimary,
      kpiPrimary,
      showAdditional
    });
    setChartData({
      barChartOptions,
      barChartData,
      lineChartData,
      lineChartOptions
    });
  }, [cars, chartSettings]);
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
      <AdditionalCharts
        brand="Toyota"
        yearPrimary={chartSettings.yearPrimary}
      />
    </div>
  );
};
