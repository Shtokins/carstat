import React, { useState, useEffect, memo, useContext } from "react";
import { fetchAdditionalChartData } from "../chartHelpers";
import { Row, Col } from "antd";
import { CarsApiContext } from "../../../context/carsApi/carsApiContext";
import { Bar, Line, Doughnut } from "react-chartjs-2";

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
      year: yearPrimary,
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
  // useEffect(() => {
  //   const { pieData } = fetchAdditionalChartData({
  //     data: cars,
  //     yearPrimary,
  //     brand
  //   });
  //   setChartData({
  //     ...chartData,
  //     pieData
  //   });
  // }, [yearPrimary]);
  if (!chartData) return null;
  // console.log("chartData", chartData);
  const {
    barData,
    barOptions,
    lineData,
    lineOptions,
    pieData,
    pieOptions
  } = chartData;
  return (
    <Row className="additional-charts-row">
      <Col sm={24} md={8}>
        <Line options={lineOptions} data={lineData} />
      </Col>
      <Col sm={24} md={8}>
        <Bar options={barOptions} data={barData} />
      </Col>
      <Col sm={24} md={8}>
        <Doughnut options={pieOptions} data={pieData} />
      </Col>
    </Row>
  );
};
export default memo(AdditionalCharts);
