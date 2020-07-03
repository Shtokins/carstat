import React from "react";
import Button from "@atlaskit/button";
import { MenuGroup, Section, ButtonItem } from "@atlaskit/menu";
import { colors } from "@atlaskit/theme";
import Drawer from "@atlaskit/drawer";
// eslint-disable-next-line no-undef
const publicImageFolder = process.env.PUBLIC_URL + "/images";

export const AtlassianKitDrawer = ({
  collapsed,
  setCollapsed,
  children,
  uiName,
  setUI
}) => {
  console.log("collapsed: ", collapsed);
  return (
    <div css={{ padding: "2rem" }}>
      <Drawer
        onClose={() => setCollapsed(true)}
        isOpen={!collapsed}
        width="narrow"
      >
        <div
          style={{
            color: colors.N800,
            border: `1px solid ${colors.N40}`,
            boxShadow:
              "0px 4px 8px rgba(9, 30, 66, 0.25), 0px 0px 1px rgba(9, 30, 66, 0.31)",
            borderRadius: 4,
            maxWidth: 320,
            margin: "16px auto"
          }}
        >
          <MenuGroup>
            <ButtonItem
              onClick={() => setUI("antd")}
              isSelected={uiName === "antd"}
              iconBefore={
                <img
                  alt=""
                  src={publicImageFolder + "/antdLogo.png"}
                  height={30}
                />
              }
            >
              Ant Design
            </ButtonItem>
            <ButtonItem
              onClick={() => setUI("semantic")}
              isSelected={uiName === "semantic"}
              iconBefore={
                <img
                  alt=""
                  src={publicImageFolder + "/suiLogo.png"}
                  height={30}
                />
              }
            >
              Semantic UI
            </ButtonItem>
            <ButtonItem
              onClick={() => setUI("material")}
              isSelected={uiName === "material"}
              iconBefore={
                <img
                  alt=""
                  src={publicImageFolder + "/muiLogo.png"}
                  height={30}
                />
              }
            >
              Material UI
            </ButtonItem>
            <ButtonItem
              onClick={() => setUI("atlassian")}
              isSelected={uiName === "atlassian"}
              iconBefore={
                <img
                  alt=""
                  src={publicImageFolder + "/atlassianKitLogo.png"}
                  height={30}
                />
              }
            >
              Atlassian Kit
            </ButtonItem>
          </MenuGroup>
        </div>
      </Drawer>
      {children}
    </div>
  );
};
