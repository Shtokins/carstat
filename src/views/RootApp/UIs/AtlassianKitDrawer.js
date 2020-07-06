import React from "react";
import { MenuGroup, ButtonItem as MenuButtonItem } from "@atlaskit/menu";
import { colors } from "@atlaskit/theme";
import MenuExpandIcon from "@atlaskit/icon/glyph/menu-expand";
import {
  SideNavigation,
  NestableNavigationContent,
  ButtonItem
} from "@atlaskit/side-navigation";
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
  return (
    <div style={{ display: "flex", height: "100vh" }} className="ak-sider">
      <SideNavigation label="project">
        <NestableNavigationContent>
          <ButtonItem
            onClick={() => setUI("antd")}
            isSelected={uiName === "antd"}
          >
            <div className="button-content">
              <img
                alt=""
                src={publicImageFolder + "/antdLogo.png"}
                height={30}
              />
            </div>
          </ButtonItem>
          <ButtonItem
            onClick={() => setUI("semantic")}
            isSelected={uiName === "semantic"}
          >
            <div className="button-content">
              <img
                alt=""
                src={publicImageFolder + "/suiLogo.png"}
                height={30}
              />
            </div>
          </ButtonItem>
          <ButtonItem
            onClick={() => setUI("material")}
            isSelected={uiName === "material"}
          >
            <div className="button-content">
              <img
                alt=""
                src={publicImageFolder + "/muiLogo.png"}
                height={30}
              />
            </div>
          </ButtonItem>
          <ButtonItem
            onClick={() => setUI("atlassian")}
            isSelected={uiName === "atlassian"}
          >
            <div className="button-content">
              <img
                alt=""
                src={publicImageFolder + "/atlassianKitLogo.png"}
                height={30}
              />{" "}
            </div>
          </ButtonItem>

          <ButtonItem onClick={() => setCollapsed(false)}>
            <MenuExpandIcon />
          </ButtonItem>
        </NestableNavigationContent>
        <Drawer
          onClose={() => setCollapsed(true)}
          isOpen={!collapsed}
          width="narrow"
        >
          <div
            style={{
              color: colors.N800
            }}
          >
            <MenuGroup>
              <MenuButtonItem
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
              </MenuButtonItem>
              <MenuButtonItem
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
              </MenuButtonItem>
              <MenuButtonItem
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
              </MenuButtonItem>
              <MenuButtonItem
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
              </MenuButtonItem>
            </MenuGroup>
          </div>
        </Drawer>
      </SideNavigation>
      {children}
    </div>
  );
};
