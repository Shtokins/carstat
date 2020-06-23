import React, { useReducer } from "react";
import { CarsApiContext } from "./carsApiContext";
import { carsApiReducer } from "./carsApiReducer";
import * as t from "./actionTypes";
import axios from "axios";

export const CarsApiState = ({ children }) => {
  const [state, dispatch] = useReducer(carsApiReducer, {});

  const getCarsData = async () => {
    setLoading();
    const response = await axios.get("cars.json");
    console.log("response: ", response);
    dispatch({ type: t.GET_CARS_DATA, payload: response.data });
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
