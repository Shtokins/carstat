import React, { useEffect, useContext, useCallback } from "react";
import { MainChart } from "../MainChart";
import { CarsApiContext } from "../../context/carsApi/carsApiContext";

export const MainChartBlock = () => {
  const { getCarsData, carsApiState } = useContext(CarsApiContext);
  const getData = useCallback(() => {
    getCarsData();
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    getData();
  }, [getData]);
  return carsApiState.cars ? <MainChart cars={carsApiState.cars} /> : null;
};
