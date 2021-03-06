import React, { useReducer } from "react";
import { CarsApiContext } from "./carsApiContext";
import { carsApiReducer } from "./carsApiReducer";
import * as t from "./actionTypes";
import axios from "axios";

export const CarsApiState = ({ children }) => {
  const [state, dispatch] = useReducer(carsApiReducer, {});

  const getCarsData = async () => {
    setLoading();
    try {
      const response = await axios.get("cars.json");
      dispatch({ type: t.GET_CARS_DATA, payload: response.data });
    } catch (error) {
      console.error("GET DATA ERROR: ", error);
    }
  };

  const setLoading = () => {
    dispatch({ type: t.SET_LOADING });
  };

  return (
    <CarsApiContext.Provider value={{ getCarsData, carsApiState: state }}>
      {children}
    </CarsApiContext.Provider>
  );
};
