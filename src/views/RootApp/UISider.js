import React from "react";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

// eslint-disable-next-line no-undef
const publicImageFolder = process.env.PUBLIC_URL + "/images";

export const UISider = ({
  collapsed,
  setCollapsed,
  children,
  uiName,
  setUI
}) => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f2f2f2" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        className="antd-sider"
      >
        <div className="logo">Logo</div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[uiName]}
          onClick={setUI}
        >
          <Menu.Item
            key="antd"
            icon={
              <img
                alt=""
                src={publicImageFolder + "/antdLogo.png"}
                width={30}
              />
            }
          >
            Ant Design
          </Menu.Item>
          <Menu.Item
            key="semantic"
            icon={
              <img alt="" src={publicImageFolder + "/suiLogo.png"} width={30} />
            }
          >
            Semantic UI
          </Menu.Item>
          <Menu.Item
            key="material"
            icon={
              <img alt="" src={publicImageFolder + "/muiLogo.png"} width={30} />
            }
          >
            Material UI
          </Menu.Item>
          <Menu.Item
            key="atlassian"
            icon={
              <img
                alt=""
                src={publicImageFolder + "/atlassianKitLogo.png"}
                width={30}
              />
            }
          >
            Atlassian Kit
          </Menu.Item>
        </Menu>
      </Sider>
      {children}
    </Layout>
  );
};
