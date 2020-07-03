import React from "react";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";

// eslint-disable-next-line no-undef
const publicImageFolder = process.env.PUBLIC_URL + "/images";

export const SemanticSidebar = ({
  collapsed,
  setCollapsed,
  children,
  uiName,
  setUI
}) => {
  console.log("collapsed: ", collapsed);
  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        icon="labeled"
        inverted
        vertical
        visible={!collapsed}
        width="thin"
        className="sui-sidebar"
        animation="push"
        direction="left"
      >
        <Menu.Item
          as="a"
          onClick={() => setUI("antd")}
          active={uiName === "antd"}
        >
          <div className="sui-sider-menu-item">
            <img alt="" src={publicImageFolder + "/antdLogo.png"} height={30} />
            <div> Ant Design</div>
          </div>
        </Menu.Item>
        <Menu.Item
          as="a"
          onClick={() => setUI("semantic")}
          active={uiName === "semantic"}
        >
          <div className="sui-sider-menu-item">
            <img alt="" src={publicImageFolder + "/suiLogo.png"} height={30} />
            <div>Semantic UI</div>
          </div>
        </Menu.Item>
        <Menu.Item
          as="a"
          onClick={() => setUI("material")}
          active={uiName === "material"}
        >
          <div className="sui-sider-menu-item">
            <img alt="" src={publicImageFolder + "/muiLogo.png"} height={30} />
            <div> Material UI</div>
          </div>
        </Menu.Item>
        <Menu.Item
          as="a"
          onClick={() => setUI("atlassian")}
          active={uiName === "atlassian"}
        >
          <div className="sui-sider-menu-item">
            <img
              alt=""
              src={publicImageFolder + "/atlassianKitLogo.png"}
              height={30}
            />
            <div> Atlassian Kit</div>
          </div>
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher>
        <div
          className="sui-sidebar-trigger"
          onClick={() => setCollapsed(!collapsed)}
        >
          <Icon name={collapsed ? "indent" : "outdent"} />
        </div>
        <Segment basic>{children}</Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};
