import React, { memo } from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data, options }) => {
  return <Bar options={options} data={data} />;
};

export default memo(BarChart);
