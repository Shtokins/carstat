import React, { useEffect, useContext } from "react";
import { MainChart } from "../MainChart";
import { CarsApiContext } from "../../context/carsApi/carsApiContext";

export const MainChartBlock = () => {
  const { getCarsData, carsApiState } = useContext(CarsApiContext);
  useEffect(() => {
    getCarsData();
  }, []);
  console.log("carsApiState: ", carsApiState);
  return <MainChart />;
};
