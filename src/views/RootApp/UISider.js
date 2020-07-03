import React from "react";
import { AntdSider } from "./AntdSider";
import { SemanticSidebar } from "./SemanticSidebar";

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
    default:
      return antdSider;
  }
};
