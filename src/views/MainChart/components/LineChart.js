import React, { memo } from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ data, options }) => {
  return <Line options={options} data={data} />;
};

export default memo(LineChart);
