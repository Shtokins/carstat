import React, { useState, useContext } from "react";
import { MainChartBlock } from "../MainChartBlock";
import { UIContext } from "../../context/ui/UIContext";
import { UISider } from "./UIs/UISider";

export const RootApp = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { setUI, uiName } = useContext(UIContext);

  return (
    <UISider
      collapsed={collapsed}
      setCollapsed={setCollapsed}
      uiName={uiName}
      setUI={setUI}
    >
      <div className="dashboard container">
        <MainChartBlock />
      </div>
    </UISider>
  );
};
