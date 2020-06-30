import React, { useState, useEffect } from "react";
import BarChart from "./components/BarChart";
import { fetchBarChartData, fetchLineChartData } from "./chartHelpers";
import LineChart from "./components/LineChart";
import ControlPanel from "./components/ControlPanel";
import AdditionalCharts from "./components/AdditionalCharts";
import Tables from "./components/tables";

const initialChartSettings = {
  yearPrimary: "2019",
  kpiPrimary: "sales",
  kpiAdditional: "revenue",
  showAdditional: false
};

export const MainChart = ({ cars }) => {
  const defaultBrand = cars?.[0]?.brand ?? "Toyota";
  const [blockMode, setBlockMode] = useState("bar");
  const [chartSettings, setCharsSettings] = useState(initialChartSettings);
  const [chartData, setChartData] = useState(null);
  const [additionalBrand, setAdditionalBrand] = useState(defaultBrand);
  const [tableType, setTableType] = useState("ag");

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
    setCharsSettings,
    tableType,
    setTableType
  };
  return (
    <div className="main-chart">
      <ControlPanel {...controlPanelProps} />

      <div
        className="main-chart-container"
        style={blockMode === "bar" ? { cursor: "pointer" } : {}}
      >
        {chartData && blockMode === "bar" && (
          <BarChart
            data={chartData.barChartData}
            options={chartData.barChartOptions}
            selectBrand={setAdditionalBrand}
          />
        )}
        {chartData && blockMode === "line" && (
          <LineChart
            data={chartData.lineChartData}
            options={chartData.lineChartOptions}
          />
        )}
        {blockMode === "table" && (
          <Tables
            data={cars}
            tableType={tableType}
            kpiPrimary={chartSettings.kpiPrimary}
            selectBrand={setAdditionalBrand}
            selectedBrand={additionalBrand}
          />
        )}
      </div>
      <AdditionalCharts
        brand={additionalBrand}
        yearPrimary={chartSettings.yearPrimary}
      />
    </div>
  );
};
