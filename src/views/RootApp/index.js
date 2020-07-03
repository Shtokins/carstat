import React, { useState, useContext } from "react";
import { Layout, Menu } from "antd";
import { MainChartBlock } from "../MainChartBlock";
import { UIContext } from "../../context/ui/UIContext";
import { UISider } from "./UISider";

const { Sider } = Layout;

// eslint-disable-next-line no-undef
const publicImageFolder = process.env.PUBLIC_URL + "/images";

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
