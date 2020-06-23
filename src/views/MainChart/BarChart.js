import React, { useState, memo } from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data, options }) => {
  console.log("BarChart -> options", options);
  console.log("BarChart -> data", data);
  return <Bar options={options} data={data} />;
};

export default memo(BarChart);
