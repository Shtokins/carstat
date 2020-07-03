import React from "react";
import { AntdSider } from "./AntdSider";
import { SemanticSidebar } from "./SemanticSidebar";
import { MaterialDrawer } from "./MaterialDrawer";
import { AtlassianKitDrawer } from "./AtlassianKitDrawer";

export const UISider = props => {
  const antdSider = <AntdSider {...props}>{props.children}</AntdSider>;
  switch (props.uiName) {
    case "antd":
      return antdSider;
    case "semantic":
      return <SemanticSidebar {...props}>{props.children}</SemanticSidebar>;
    case "material":
      return <MaterialDrawer {...props}>{props.children}</MaterialDrawer>;
    case "atlassian":
      return (
        <AtlassianKitDrawer {...props}>{props.children}</AtlassianKitDrawer>
      );

    default:
      return antdSider;
  }
};
