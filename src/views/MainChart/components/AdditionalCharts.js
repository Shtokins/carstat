import React, { useState, useEffect, memo, useContext } from "react";
import { fetchAdditionalChartData } from "../helpers";
import { Row, Col } from "antd";
import { CarsApiContext } from "../../../context/carsApi/carsApiContext";
import { Pie, Bar, Line } from "react-chartjs-2";

const AdditionalCharts = ({ brand, yearPrimary }) => {
  const {
    carsApiState: { cars }
  } = useContext(CarsApiContext);
  const [chartData, setChartData] = useState(null);
  useEffect(() => {
    const {
      barData,
      barOptions,
      lineData,
      lineOptions,
      pieData,
      pieOptions
    } = fetchAdditionalChartData({
      data: cars,
      yyear: yearPrimary,
      brand
    });
    setChartData({
      barData,
      barOptions,
      lineData,
      lineOptions,
      pieData,
      pieOptions
    });
  }, [brand, yearPrimary]);

  useEffect(() => {
    const {
      barData,
      barOptions,
      lineData,
      lineOptions,
      pieData,
      pieOptions
    } = fetchAdditionalChartData({
      data: cars,
      yearPrimary,
      brand
    });
    setChartData({
      barData,
      barOptions,
      lineData,
      lineOptions,
      pieData,
      pieOptions
    });
  }, [brand, yearPrimary]);
  if (!chartData) return null;
  const {
    barData,
    barOptions,
    lineData,
    lineOptions,
    pieData,
    pieOptions
  } = chartData;
  return (
    <Row type="flex" className="additional-charts-row">
      <Col>
        <Line options={lineOptions} data={lineData} />
      </Col>
      <Col>
        <Bar options={barOptions} data={barData} />
      </Col>
      <Col>
        <Pie options={pieOptions} data={pieData} />
      </Col>
    </Row>
  );
};
export default memo(AdditionalCharts);
