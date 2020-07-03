import React from "react";
import { AntdSider } from "./AntdSider";
import { SemanticSidebar } from "./SemanticSidebar";
import { MaterialDrawer } from "./MaterialDrawer";

export const UISider = ({
  collapsed,
  setCollapsed,
  children,
  uiName,
  setUI
}) => {
  const antdSider = (
    <AntdSider
      collapsed={collapsed}
      setCollapsed={setCollapsed}
      uiName={uiName}
      setUI={setUI}
    >
      {children}
    </AntdSider>
  );
  switch (uiName) {
    case "antd":
      return antdSider;
    case "semantic":
      return (
        <SemanticSidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          uiName={uiName}
          setUI={setUI}
        >
          {children}
        </SemanticSidebar>
      );
    case "material":
      return (
        <MaterialDrawer
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          uiName={uiName}
          setUI={setUI}
        >
          {children}
        </MaterialDrawer>
      );
    default:
      return antdSider;
  }
};
