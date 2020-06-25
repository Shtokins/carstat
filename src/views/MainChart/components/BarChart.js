import React, { memo } from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data, options, selectBrand }) => {
  const chartClick = chartElement => {
    if (chartElement[0]) {
      const {
        _model: { label }
      } = chartElement[0];
      selectBrand(label);
    }
  };

  return <Bar options={options} data={data} onElementsClick={chartClick} />;
};

export default memo(BarChart);
