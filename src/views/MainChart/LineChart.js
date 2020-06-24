import React, { memo } from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ data, options }) => {
  console.log("BarChart -> options", options);
  console.log("BarChart -> data", data);
  return <Line options={options} data={data} />;
};

export default memo(LineChart);
