import React, { useState, useEffect } from "react";
import BarChart from "./BarChart";
import { fetchBarChartData, fetchLineChartData } from "./helpers";
import LineChart from "./LineChart";
import { ControlPanelWrapper } from "./styles";
import { Radio } from "antd";
import { Icon as FaIcon } from "react-fa";

const yearPrimary = "2019";
const comparatorPrimary = "sales";
const comparatorSecondary = "revenue";
const showSecondary = true;

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

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
  return (
    <div className="main-chart">
      <ControlPanelWrapper>
        <RadioGroup
          value={blockMode}
          onChange={e => setBlockMode(e.target.value)}
        >
          <RadioButton value="line">
            <FaIcon name="chart-line" /> Line
          </RadioButton>
          <RadioButton value="bar">
            <FaIcon name="chart-bar" /> Bar
          </RadioButton>
        </RadioGroup>
      </ControlPanelWrapper>
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
        {blockMode === "grid" && <div>Table here</div>}
      </div>
    </div>
  );
};
