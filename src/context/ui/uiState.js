import React, { useReducer } from "react";
import { UIContext } from "./UIContext";
import { uiReducer } from "./uiReducer";
import * as t from "./actionTypes";

export const UIState = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, { uiName: "antd" });

  const setUI = key => {
    console.log("UIState -> key", key);
    dispatch({ type: t.SET_UI, payload: key });
  };

  return (
    <UIContext.Provider value={{ uiName: state.uiName, setUI }}>
      {children}
    </UIContext.Provider>
  );
};
